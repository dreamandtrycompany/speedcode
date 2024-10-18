import Image from "next/image";

export default function Home() {
  return (
    <>
    <nav className="flex justify-between py-5 fixed top-0 left-0 w-full">
      <span className="font-extrabold px-5 text-xl font-sans">
        SC
      </span>
      <ul className="flex gap-12 justify-center items-center">
        <li className="font-bold font-sans">FAQs</li>
        <li className="font-bold font-sans">Contact</li>
        <li className="font-bold font-sans"><button className="border-2 border-white rounded-3xl px-5 py-2">
          Login
          </button></li>
      </ul>
    </nav>
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center">
        <span className="font-bold text-8xl">
          SpeedCode
        </span>
        <div className="flex gap-4 justify-around items-center flex-col sm:flex-row">
          <a
            className="rounded-full font-bold text-white border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 bg-[#29b960] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sign Up
          </a>
          <a
            className="rounded-full font-bold text-white border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center bg-[#C23E3E] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Pro
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          What is SpeedCode?
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          About DATCO.
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to wearedat.co
        </a>
      </footer>
    </div>
    </>
  );
}
