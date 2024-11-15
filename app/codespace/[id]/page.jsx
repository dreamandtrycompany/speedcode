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
  const [wpm, setWpm] = useState(0);
  const [accuracy, setAccuracy] = useState(100);
  const [isCompleted, setIsCompleted] = useState(false);
  const [snippetScores, setSnippetScores] = useState(
    Array(1).fill({ charactersTyped: 0, errors: 0 })
  );
  const containerRef = useRef(null);
  const startTimeRef = useRef(null);
  const codeContainerRef = useRef(null);

  // Add updateMetrics function
  const updateMetrics = useCallback(() => {
    if (!startTimeRef.current || !isActive) return;

    const endTime = Date.now();
    const totalTime = (endTime - startTimeRef.current) / 60000; // Convert to minutes

    if (totalTime <= 0) return;

    const totalCharactersTyped = snippetScores[0].charactersTyped;
    const totalErrors = snippetScores[0].errors;

    // Calculate WPM: (characters / 5) / time
    const grossWPM = totalCharactersTyped / 5 / totalTime;
    const netWPM = Math.max(0, grossWPM - totalErrors / totalTime);
    
    // Calculate accuracy
    const currentAccuracy = totalCharactersTyped
      ? ((totalCharactersTyped - totalErrors) / totalCharactersTyped) * 100
      : 100;

    setWpm(Math.round(netWPM));
    setAccuracy(Math.round(currentAccuracy));
  }, [snippetScores, isActive]);

  // Add effect for live updates
  useEffect(() => {
    let intervalId;
    if (isActive && !isCompleted) {
      intervalId = setInterval(updateMetrics, 500); // Update every 500ms
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

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.focus();
    }
  }, []);

  // Modify finishGame to use the current WPM
  const finishGame = useCallback(() => {
    if (!isCompleted) {
      setIsCompleted(true);
      setIsActive(false);
    }
  }, [isCompleted]);

  const resetGame = () => {
    setInputs(Array(1).fill(''));
    setCurrentIndices(Array(1).fill(0));
    setTimeLeft(60);
    setIsActive(false);
    setIsCompleted(false);
    setWpm(0);
    setAccuracy(100);
    setSnippetScores(Array(1).fill({ charactersTyped: 0, errors: 0 }));
    startTimeRef.current = null;
    setCurrentSnippetIndex(0);
    containerRef.current.focus();
    codeContainerRef.current.scrollTop = 0;
  };

  const updateInput = useCallback((index, updater) => {
    setInputs((prev) => {
      const newInputs = [...prev];
      newInputs[index] =
        typeof updater === 'function' ? updater(newInputs[index]) : updater;
      return newInputs;
    });
  }, []);

  const updateCurrentIndex = useCallback((index, updater) => {
    setCurrentIndices((prev) => {
      const newIndices = [...prev];
      newIndices[index] =
        typeof updater === 'function' ? updater(newIndices[index]) : updater;
      return newIndices;
    });
  }, []);

  const updateSnippetScore = useCallback((index, charactersTyped, errors) => {
    setSnippetScores((prevScores) => {
      const newScores = [...prevScores];
      newScores[index] = {
        charactersTyped: Math.max(
          0,
          newScores[index].charactersTyped + charactersTyped
        ),
        errors: Math.max(0, newScores[index].errors + errors),
      };
      return newScores;
    });
  }, []);

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
          updateInput(0, (prev) => prev.slice(0, -1));
          updateCurrentIndex(0, (prev) => Math.max(0, prev - 1));
          updateSnippetScore(0, -1, 0);
        }
      } else if (e.key === 'Enter') {
        e.preventDefault();
        const nextPosition = getNextLinePosition(currentIndex, targetCode);
        const spacesToAdd = Math.max(0, nextPosition - currentIndex - 1);
        updateInput(0, (prev) => prev + '\n' + ' '.repeat(spacesToAdd));
        updateCurrentIndex(0, nextPosition);
        updateSnippetScore(0, spacesToAdd + 1, 0);
      } else if (e.key.length === 1 && currentIndex < targetCode.length) {
        updateInput(0, (prev) => prev + e.key);
        updateCurrentIndex(0, (prev) => Math.min(prev + 1, targetCode.length));
        updateSnippetScore(0, 1, e.key !== targetCode[currentIndex] ? 1 : 0);

        if (currentIndex === targetCode.length - 1) {
          finishGame();
        }
      }
    },
    [
      currentIndices,
      isActive,
      isCompleted,
      updateInput,
      updateCurrentIndex,
      updateSnippetScore,
      getNextLinePosition,
      finishGame,
      code,
      timeLeft,
    ]
  );

  const getCharClass = useCallback(
    (charIndex) => {
      const input = inputs[0];
      const currentIndex = currentIndices[0];
      if (charIndex < currentIndex) {
        return input[charIndex] === (code?.[0]?.code || '')[charIndex]
          ? 'text-green-400'
          : 'text-red-400';
      }
      return charIndex === currentIndex
        ? 'text-white bg-white/20'
        : 'text-gray-400';
    },
    [inputs, currentIndices, code]
  );

  const calculateProgress = useCallback(() => {
    const totalCharacters = (code?.[0]?.code || '').length;
    const typedCharacters = snippetScores[0].charactersTyped;
    return Math.min(100, (typedCharacters / totalCharacters) * 100);
  }, [snippetScores, code]);

  // Add spacebar prevention
  useEffect(() => {
    const preventSpaceScroll = (e) => {
      if (e.code === 'Space') {
        e.preventDefault();
      }
    };
    
    window.addEventListener('keydown', preventSpaceScroll);
    return () => window.removeEventListener('keydown', preventSpaceScroll);
  }, []);

  if (loading) {
    return (
      <div className="text-white flex justify-center items-center h-screen">
        <BlinkBlur color="#316c31" size="medium" text="" textColor="" />
      </div>
    );
  }

  if (error) {
    return <div className="text-red-500">Error: {error}</div>;
  }

  return (
    <>
      <NavbarCodeSpace />
      <div 
        ref={containerRef}
        className="bg-background h-screen fixed inset-0 flex items-center justify-center mt-10 overflow-hidden"
        tabIndex={0}
        onKeyDown={handleKeyDown}
      >
        <div className="w-full max-w-4xl px-4 flex flex-col items-center">
          {/* Progress Section */}
          <div className="w-full mb-5">
            <div className="flex justify-between items-center">
              <div className="font-sans font-bold text-white text-3xl">
                {isCompleted ? (
                  'Great, completed.'
                ) : (
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
              className="w-full bg-background border border-[#1a1a1a] rounded-2xl boxShadow h-[50vh] overflow-y-auto"
            >
              <pre className="p-6">
                <code className="leading-10 text-3xl font-bold font-mono whitespace-pre-wrap">
                  {(code?.[0]?.code || '').split('').map((char, charIndex) => {
                    if (char === '=' && code?.[0]?.code[charIndex + 1] === '=') {
                      return (
                        <>
                          <span className={getCharClass(charIndex)}>{'='}</span>
                          <span className={getCharClass(charIndex)}>{'='}</span>
                        </>
                      );
                    }
                    return (
                      <span key={charIndex} className={getCharClass(charIndex)}>
                        {char}
                      </span>
                    );
                  })}
                </code>
              </pre>
            </div>
          </div>

          {/* Stats Section with NumberFlow animations */}
          <div className="w-full mb-5 flex">
            <div className="w-full flex justify-between font-sans font-bold text-white text-3xl">
              <div className="flex gap-2">
                <span>WPM: </span>
                <NumberFlow
                  value={wpm}
                  format={{ notation: 'standard' }}
                  locales="en-US"
                />
              </div>
              <div className="flex gap-2">
                <span>Accuracy: </span>
                <NumberFlow
                  value={accuracy}
                  format={{ notation: 'standard' }}
                  locales="en-US"
                />
                <span>%</span>
              </div>
            </div>
          </div>

          {/* Reset Button Section */}
          <div className="w-full flex justify-center">
            <button
              className="px-4 py-2 font-sans text-white bg-background rounded focus:outline-none"
              onClick={resetGame}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
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