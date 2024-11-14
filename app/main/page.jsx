'use client';

import React, { useState, useEffect } from 'react';
import { marked } from 'marked';
import { getCodes } from '../../lib/supabase';
import { useRouter } from 'next/navigation';
import { BlinkBlur } from 'react-loading-indicators';
import localFont from 'next/font/local';

const geistSans = localFont({
  src: '../fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});

const geistMono = localFont({
  src: '../fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

const Page = () => {
  const [codes, setCodes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCode, setSelectedCode] = useState(null);
  const [showMobileModal, setShowMobileModal] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();

  // Check screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Check on mount
    checkScreenSize();

    // Add event listener for window resize
    window.addEventListener('resize', checkScreenSize);

    // Cleanup
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  useEffect(() => {
    const fetchCodes = async () => {
      try {
        const data = await getCodes();
        setCodes(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCodes();
  }, []);

  const handleCodeSelect = (code) => {
    setSelectedCode(code);
  };

  const handleStartSelected = () => {
    if (isMobile) {
      setShowMobileModal(true);
      setTimeout(() => setShowMobileModal(false), 3000);
    } else if (selectedCode) {
      router.push(`/codespace/${selectedCode.id}`);
    }
  };

  const handleStartRandom = () => {
    if (isMobile) {
      setShowMobileModal(true);
      setTimeout(() => setShowMobileModal(false), 3000);
    } else if (codes.length > 0) {
      const randomCode = codes[Math.floor(Math.random() * codes.length)];
      setSelectedCode(randomCode);
      router.push(`/codespace/${randomCode.id}`);
    }
  };

  if (loading) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <BlinkBlur color="#316c31" size="medium" text="" textColor="" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <p className="text-red-500">Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="w-full h-screen overflow-hidden">
      {/* Custom Mobile Warning Modal */}
      {showMobileModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 px-4">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="bg-white rounded-lg p-6 md:p-8 max-w-md w-full relative z-10 transform transition-transform duration-300 ease-in-out animate-slideIn">
            <div className="text-center">
              <h3 className="font-sans text-xl md:text-2xl font-bold text-gray-900 mb-2">
                Desktop Required
              </h3>
              <p className="text-gray-600 font-sans">
                Please use a desktop computer to play this game. The mobile
                experience is not supported.
              </p>
              <button
                onClick={() => setShowMobileModal(false)}
                className="mt-4 font-sans px-4 py-2 bg-[#29b960] text-white rounded hover:bg-[#134d29] transition-colors duration-200"
              >
                Got it
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="flex flex-col md:flex-row h-screen w-full">
        {/* Codes List Section */}
        <div className="font-mono w-full md:w-1/2 p-10 relative md:fixed md:left-0 md:top-20 md:bottom-0">
          <div className="h-[calc(100vh-580px)] md:h-[calc(100vh-230px)] overflow-y-auto">
            <ul className="space-y-2">
              {codes.map((code, index) => (
                <li
                  key={code.id}
                  className={`cursor-pointer p-2 rounded transition-all duration-300 ${
                    selectedCode?.id === code.id
                      ? 'bg-[#29b960] text-white'
                      : 'text-white hover:bg-gray-700'
                  }`}
                  onClick={() => handleCodeSelect(code)}
                >
                  {index + 1}. {code.title}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Description Section */}
        <div className="border-t-2 border-gray-500 md:border-none font-sans w-full md:w-1/2 p-10 relative md:fixed md:right-0 md:top-20 md:bottom-0">
          {selectedCode ? (
            <div className="h-[calc(100vh-580px)] md:h-[calc(100vh-230px)] overflow-y-auto text-white">
              <h1 className="text-4xl font-bold mb-8">{selectedCode.title}</h1>
              <div
                className="markdown-content"
                style={{ fontFamily: 'var(--font-geist-sans)' }}
                dangerouslySetInnerHTML={{
                  __html: marked(selectedCode.description),
                }}
              />
            </div>
          ) : (
            <div className="h-[calc(100vh-380px)] md:h-[calc(100vh-180px)] flex items-center justify-center text-gray-400">
              <p className="text-xl font-mono">
                select a code to view description
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Buttons Section */}
      <div className="fixed bottom-8 md:bottom-10 left-1/2 transform -translate-x-1/2 flex gap-4 md:gap-8 z-50">
        <button
          className={`font-sans font-bold ${
            selectedCode
              ? 'bg-[#29b960] hover:bg-[#134d29]'
              : 'bg-gray-500 cursor-not-allowed'
          } transition-all duration-300 rounded-full p-3 md:p-5 text-white text-sm md:text-base`}
          onClick={handleStartSelected}
          disabled={!selectedCode}
        >
          Start Selected
        </button>
        <button
          className="font-sans font-bold bg-[#29b960] hover:bg-[#134d29] transition-all duration-300 rounded-full p-3 md:p-5 text-white text-sm md:text-base"
          onClick={handleStartRandom}
          disabled={codes.length === 0}
        >
          Start Random
        </button>
      </div>
    </div>
  );
};

export default Page;
