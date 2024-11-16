'use client';
import React from 'react';

const FourthSection = () => {
  const codeString = `head = Node(PRO)
head.next = Node(YOU)
head.next.next = Node(REACHED)
head.next.next.next = Node(THE)
head.next.next.next.next = Node(END)
head.next.next.next.next.next = Node(HAHA)
print(getNow(BUY PRO))`;

  return (
    <section className="panel min-h-screen w-full flex items-center justify-center p-2 sm:p-4 md:p-6 lg:p-8 bg-gradient-to-b to-background">
      <div className="block-clip-path-scale w-full max-w-[90vw] md:max-w-[80vw] lg:max-w-[75vw]">
        <div className="relative">
          {/* Decorative elements */}
          <div className="font-sans absolute -top-5 left-3 text-green-500 opacity-60 text-xs sm:text-sm">
            get_pro.py
          </div>
          <div className="absolute -top-5 right-4 text-white/30 text-xs">
            <span className="mr-2">●</span>
            <span className="mr-2">●</span>
            <span>●</span>
          </div>

          {/* Code Container */}
          <pre
            className="font-sans font-bold
                       text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl
                       p-4 sm:p-6 md:p-8 lg:p-10
                       rounded-lg
                       overflow-x-auto
                       bg-black backdrop-blur-md
                       transition-all duration-300
                       shadow-xl
                       border border-white/10
                       relative"
          >
            <code className="block font-mono leading-relaxed tracking-wide break-words whitespace-pre-wrap">
              {codeString.split('\n').map((line, index) => (
                <div
                  key={index}
                  className="py-1 sm:py-1.5 flex items-start group hover:bg-white/5 transition-colors rounded"
                >
                  {/* Line number */}
                  <span className="select-none text-white/20 mr-3 text-right w-6 text-xs sm:text-sm">
                    {(index + 1).toString().padStart(2, '0')}
                  </span>
                  {/* Code line */}
                  <span className="flex-1 text-white/50 group-hover:text-white/70 transition-colors">
                    {line}
                  </span>
                </div>
              ))}
            </code>
          </pre>

          {/* Bottom decoration */}
          <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full"></div>
        </div>
      </div>

      <style jsx>{`
        pre {
          tab-size: 2;
          -moz-tab-size: 2;
          -o-tab-size: 2;
          scrollbar-width: thin;
          scrollbar-color: rgba(255, 255, 255, 0.1) transparent;
        }

        pre::-webkit-scrollbar {
          width: 4px;
          height: 4px;
        }

        pre::-webkit-scrollbar-track {
          background: transparent;
        }

        pre::-webkit-scrollbar-thumb {
          background-color: rgba(255, 255, 255, 0.1);
          border-radius: 999px;
        }

        pre::-webkit-scrollbar-thumb:hover {
          background-color: rgba(255, 255, 255, 0.2);
        }

        @media (max-width: 640px) {
          pre {
            tab-size: 1;
            -moz-tab-size: 1;
            -o-tab-size: 1;
          }

          code {
            word-break: break-word;
            word-wrap: break-word;
          }
        }

        @keyframes glow {
          0%,
          100% {
            opacity: 0.6;
          }
          50% {
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
};

export default FourthSection;