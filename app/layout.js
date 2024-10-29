import localFont from 'next/font/local';
import { ClerkProvider } from '@clerk/nextjs';
import './globals.css';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});

export const metadata = {
  title: 'SpeedCode',
  description: 'Created by DATCO.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased`}>
        <ClerkProvider>
          <div>
            <main className="flex-1">
              {children}
            </main>
          </div>
        </ClerkProvider>
      </body>
    </html>
  );
}