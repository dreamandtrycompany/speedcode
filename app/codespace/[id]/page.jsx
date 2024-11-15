'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { usePathname } from 'next/navigation';
import { getCodeById } from '../../../lib/supabase';
import NumberFlow from '@number-flow/react';
import NavbarCodeSpace from '../../(components)/NavbarCodeSpace';
import { BlinkBlur } from 'react-loading-indicators';

const CodeDisplayPage = () => {
  const pathname = usePathname();
  const [code, setCode] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentSnippetIndex, setCurrentSnippetIndex] = useState(0);
  const [inputs, setInputs] = useState(Array(1).fill(''));
  const [currentIndices, setCurrentIndices] = useState(Array(1).fill(0));
  const [timeLeft, setTimeLeft] = useState(60);
  const [isActive, setIsActive] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  // Enhanced metrics state
  const [wpm, setWpm] = useState(0);
  const [rawWpm, setRawWpm] = useState(0);
  const [accuracy, setAccuracy] = useState(100);
  const [charRatio, setCharRatio] = useState({ correct: 0, incorrect: 0 });
  const [consistency, setConsistency] = useState(100);

  // References
  const startTimeRef = useRef(null);
  const wpmHistoryRef = useRef([]);
  const containerRef = useRef(null);
  const codeContainerRef = useRef(null);

  // Function to update inputs at a given index
  const updateInput = (index, updater) => {
    setInputs((prevInputs) =>
      prevInputs.map((input, i) => (i === index ? updater(input) : input))
    );
  };
  

  // Function to update current indices at a given index
  const updateCurrentIndex = (index, updater) => {
    setCurrentIndices((prevIndices) =>
      prevIndices.map((currentIndex, i) => (i === index ? updater(currentIndex) : currentIndex))
    );
  };
  

  const getCharClass = (charIndex) => {
    const targetCode = code?.[0]?.code || '';
    const currentIndex = currentIndices[0]; // index of current position in typing
    const typedChar = inputs[0][charIndex]; // character user has typed at this position
    const targetChar = targetCode[charIndex]; // actual character in target code
  
    if (charIndex < currentIndex) {
      return typedChar === targetChar ? 'text-green-500' : 'text-red-500'; // Correct or incorrect character
    } else if (charIndex === currentIndex) {
      return 'text-orange-500'; // Current position
    } else {
      return 'text-gray-500'; // Remaining text
    }
  };

  const finishGame = () => {
    setIsCompleted(true);
    setIsActive(false);
    setTimeLeft(0); // Stop the timer
    // Calculate any final scores or ratios here if necessary
  };
  

  const calculateProgress = () => {
    const targetCode = code?.[0]?.code || '';
    const totalCharacters = targetCode.length;
    const correctlyTyped = charRatio.correct;
  
    if (totalCharacters === 0) return 0;
  
    // Calculate progress as a percentage
    return Math.round((correctlyTyped / totalCharacters) * 100);
  };

  // Function to get the position of the next line (mock function, can be customized)

  // Metrics update function
  const updateMetrics = useCallback(() => {
    if (!startTimeRef.current || !isActive) return;

    const endTime = Date.now();
    const totalTime = (endTime - startTimeRef.current) / 60000; // Convert to minutes

    if (totalTime <= 0) return;

    const totalCharactersTyped = charRatio.correct + charRatio.incorrect;

    // Calculate Raw WPM (including mistakes)
    const currentRawWpm = Math.round(totalCharactersTyped / 5 / totalTime);

    // Calculate WPM (only correct characters)
    const currentWpm = Math.round(charRatio.correct / 5 / totalTime);

    // Calculate accuracy
    const currentAccuracy = totalCharactersTyped > 0
      ? Math.round((charRatio.correct / totalCharactersTyped) * 100)
      : 100;

    // Update WPM history for consistency calculation
    wpmHistoryRef.current.push(currentRawWpm);

    // Calculate consistency using coefficient of variation
    if (wpmHistoryRef.current.length > 1) {
      const mean = wpmHistoryRef.current.reduce((a, b) => a + b) / wpmHistoryRef.current.length;
      const variance = wpmHistoryRef.current.reduce((acc, val) => acc + Math.pow(val - mean, 2), 0) / wpmHistoryRef.current.length;
      const standardDeviation = Math.sqrt(variance);
      const cv = (standardDeviation / mean) * 100;
      const currentConsistency = Math.max(0, Math.min(100, 100 - cv));
      setConsistency(Math.round(currentConsistency));
    }

    setWpm(currentWpm);
    setRawWpm(currentRawWpm);
    setAccuracy(currentAccuracy);
  }, [charRatio, isActive]);

  // Effect for live updates
  useEffect(() => {
    let intervalId;
    if (isActive && !isCompleted) {
      intervalId = setInterval(updateMetrics, 200);
    }
    return () => clearInterval(intervalId);
  }, [isActive, isCompleted, updateMetrics]);

  useEffect(() => {
    const fetchCode = async () => {
      try {
        const id = pathname.split('/').pop();
        const foundCode = await getCodeById(id);
        setCode(foundCode);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCode();
  }, [pathname]);

  useEffect(() => {
    let timer;
    if (isActive && timeLeft > 0 && !isCompleted) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(timer);
            finishGame();
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isActive, timeLeft, isCompleted]);

  const resetGame = () => {
    setInputs(Array(1).fill(''));
    setCurrentIndices(Array(1).fill(0));
    setTimeLeft(60);
    setIsActive(false);
    setIsCompleted(false);
    setWpm(0);
    setRawWpm(0);
    setAccuracy(100);
    setConsistency(100);
    setCharRatio({ correct: 0, incorrect: 0 });
    wpmHistoryRef.current = [];
    startTimeRef.current = null;
    setCurrentSnippetIndex(0);
    containerRef.current.focus();
    codeContainerRef.current.scrollTop = 0;
  };

  const getNextLinePosition = useCallback((currentPosition, targetCode) => {
    let nextPosition = currentPosition;
    while (
      nextPosition < targetCode.length &&
      targetCode[nextPosition] !== '\n'
    ) {
      nextPosition++;
    }
    nextPosition++;
    while (
      nextPosition < targetCode.length &&
      targetCode[nextPosition] === ' '
    ) {
      nextPosition++;
    }
    return Math.min(nextPosition, targetCode.length);
  }, []);

  // Modified handleKeyDown to track correct/incorrect characters
  const handleKeyDown = useCallback(
    (e) => {
      if (isCompleted || timeLeft <= 0) return;
  
      if (!isActive && !isCompleted) {
        setIsActive(true);
        startTimeRef.current = Date.now();
      }
  
      const targetCode = code?.[0]?.code || '';
      const currentIndex = currentIndices[0];
  
      if (e.key === 'Backspace') {
        if (currentIndex > 0) {
          const lastChar = inputs[0][inputs[0].length - 1];
          const wasCorrect = lastChar === targetCode[currentIndex - 1];
  
          setCharRatio((prev) => ({
            correct: prev.correct - (wasCorrect ? 1 : 0),
            incorrect: prev.incorrect - (wasCorrect ? 0 : 1)
          }));
  
          // Update inputs and current index
          setInputs((prev) => {
            const updatedInputs = [...prev];
            updatedInputs[0] = updatedInputs[0].slice(0, -1);
            return updatedInputs;
          });
          
          setCurrentIndices((prev) => {
            const updatedIndices = [...prev];
            updatedIndices[0] = Math.max(0, currentIndex - 1);
            return updatedIndices;
          });
        }
      } else if (e.key === 'Enter') {
        e.preventDefault();
        const nextPosition = getNextLinePosition(currentIndex, targetCode);
        const spacesToAdd = Math.max(0, nextPosition - currentIndex - 1);
  
        setCharRatio((prev) => ({
          ...prev,
          correct: prev.correct + spacesToAdd + 1
        }));
  
        setInputs((prev) => {
          const updatedInputs = [...prev];
          updatedInputs[0] += '\n' + ' '.repeat(spacesToAdd);
          return updatedInputs;
        });
  
        setCurrentIndices((prev) => {
          const updatedIndices = [...prev];
          updatedIndices[0] = nextPosition;
          return updatedIndices;
        });
      } else if (e.key.length === 1 && currentIndex < targetCode.length) {
        const isCorrect = e.key === targetCode[currentIndex];
  
        setCharRatio((prev) => ({
          correct: prev.correct + (isCorrect ? 1 : 0),
          incorrect: prev.incorrect + (isCorrect ? 0 : 1)
        }));
  
        setInputs((prev) => {
          const updatedInputs = [...prev];
          updatedInputs[0] += e.key;
          return updatedInputs;
        });
  
        setCurrentIndices((prev) => {
          const updatedIndices = [...prev];
          updatedIndices[0] = Math.min(currentIndex + 1, targetCode.length);
          return updatedIndices;
        });
  
        if (currentIndex === targetCode.length - 1) {
          finishGame();
        }
      }
    },
    [code, currentIndices, inputs, isActive, isCompleted, timeLeft, getNextLinePosition, finishGame]
  );
  

  // Rest of your component remains the same, but update the Stats Section to show new metrics
  return (
    <>
      <NavbarCodeSpace />
      <div 
        ref={containerRef}
        className="bg-background h-screen fixed inset-0 flex items-center justify-center mt-10 overflow-hidden"
        tabIndex={0}
        onKeyDown={handleKeyDown}
      >
        <div className="w-full max-w-7xl px-4 flex flex-col items-center">
          {/* Progress Section */}
          <div className="w-full mb-5">
            <div className="flex justify-between items-center">
              <div className="font-sans font-bold text-white text-3xl">
                {isCompleted ? 'Great, completed.' : (
                  <NumberFlow
                    value={timeLeft}
                    format={{ notation: 'compact' }}
                    locales="en-US"
                  />
                )}
              </div>
              <div className="w-1/2 bg-neutral-700 rounded-full h-3">
                <div
                  className="bg-[#2b9b60] h-3 rounded-full transition-all duration-300 ease-in-out"
                  style={{ width: `${calculateProgress()}%` }}
                ></div>
              </div>
            </div>
          </div>

          {/* Code Section */}
          <div className="w-full mb-5">
            <div
              ref={codeContainerRef}
              className="w-full bg-background border-4 border-[#1a1a1a] rounded-2xl boxShadow h-[50vh] overflow-y-auto"
            >
              <pre className="p-6">
              <code className="leading-10 text-3xl font-bold font-mono whitespace-pre-wrap">
                {(code?.[0]?.code || '').split('').map((char, charIndex) => (
                  <span key={charIndex} className={getCharClass(charIndex)}>
                    {char}
                  </span>
                ))}
              </code>
            </pre>
            </div>
          </div>

          {/* Enhanced Stats Section */}
          <div className="font-sans font-bold rounded-6xl w-full mb-5 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-36">
            <div className="flex gap-2 text-white text-xl">
              <span>WPM:</span>
              <NumberFlow value={wpm} format={{ notation: 'standard' }} locales="en-US" />
            </div>
            <div className="flex gap-2 text-white text-xl">
              <span>Raw WPM:</span>
              <NumberFlow value={rawWpm} format={{ notation: 'standard' }} locales="en-US" />
            </div>
            <div className="flex gap-2 text-white text-xl">
              <span>Accuracy:</span>
              <NumberFlow value={accuracy} format={{ notation: 'standard' }} locales="en-US" />
              <span>%</span>
            </div>
            <div className="flex gap-2 text-white text-xl">
              <span>Consistency:</span>
              <NumberFlow value={consistency} format={{ notation: 'standard' }} locales="en-US" />
              <span>%</span>
            </div>
          </div>

          {/* Reset Button */}
          <div className="w-full flex justify-center">
            <button
              className="px-4 py-2 font-sans text-white bg-background rounded focus:outline-none"
              onClick={resetGame}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                style={{ fill: '#FFFFFF' }}
              >
                <path d="M 15 3 C 12.031398 3 9.3028202 4.0834384 7.2070312 5.875 A 1.0001 1.0001 0 1 0 8.5058594 7.3945312 C 10.25407 5.9000929 12.516602 5 15 5 C 20.19656 5 24.450989 8.9379267 24.951172 14 L 22 14 L 26 20 L 30 14 L 26.949219 14 C 26.437925 7.8516588 21.277839 3 15 3 z M 4 10 L 0 16 L 3.0507812 16 C 3.562075 22.148341 8.7221607 27 15 27 C 17.968602 27 20.69718 25.916562 22.792969 24.125 A 1.0001 1.0001 0 1 0 21.494141 22.605469 C 19.74593 24.099907 17.483398 25 15 25 C 9.80344 25 5.5490109 21.062074 5.0488281 16 L 8 16 L 4 10 z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CodeDisplayPage;