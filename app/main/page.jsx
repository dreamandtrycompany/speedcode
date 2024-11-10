"use client";

import React, { useState, useEffect } from 'react';
//path for routing db
import { getCodes } from '../../lib/supabase'; 
import { useRouter } from 'next/navigation';
import AuthNavbar from '../(components)/AuthNavbar';

const Page = () => {
  const [codes, setCodes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCode, setSelectedCode] = useState(null);
  const router = useRouter();

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
    if (selectedCode) {
      // Handle starting the selected code
      console.log('Starting selected code:', selectedCode);
      router.push(`/codespace/${selectedCode.id}`);
    }
  };

  const handleStartRandom = () => {
    if (codes.length > 0) {
      const randomCode = codes[Math.floor(Math.random() * codes.length)];
      setSelectedCode(randomCode);
      // Handle starting the random code
      console.log('Starting random code:', randomCode);
      router.push(`/codespace/${randomCode.id}`);
    }
  };

  return (
    <>
      <AuthNavbar />
      <div className="overflow-y-hidden">
        <div className="justify-center flex items-center mt-[9rem]">
          <div className="font-sans w-[50vw] h-[60vh] bg-[#1f1f1f] p-10 rounded-4xl">
            {loading ? (
              <p className="text-white">Loading Al...</p>
            ) : error ? (
              <p className="text-red-500">Error: {error}</p>
            ) : (
              <div className="h-full overflow-y-auto">
                <ul className="space-y-4">
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
                      <span className="text-xl">
                        {index + 1}. {code.title}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className="justify-center flex items-center p-6">
          <div className="p-12">
            <button 
              className={`font-sans ${
                selectedCode 
                  ? 'bg-[#29b960] hover:bg-[#134d29]' 
                  : 'bg-gray-500 cursor-not-allowed'
              } transition-all duration-300 rounded-full p-5 text-white`}
              onClick={handleStartSelected}
              disabled={!selectedCode}
            >
              Start Selected
            </button>
          </div>
          
          <div className="p-12">
            <button 
              className="font-sans bg-[#29b960] hover:bg-[#134d29] hover:border-[#134d29] transition-all duration-300 rounded-full p-5 text-white"
              onClick={handleStartRandom}
              disabled={codes.length === 0}
            >
              Start Random
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;