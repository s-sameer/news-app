import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'Modern News App',
  description: 'A simple and modern news application built with Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="bg-black text-white p-4 sticky top-0 z-10 shadow-md">
          <div className="container mx-auto">
            <Link href="/">
              <h1 className="text-2xl font-bold">NewsFlash</h1>
            </Link>
          </div>
        </header>
        <div className="min-h-screen bg-black">
          {children}
        </div>
        <footer className="bg-gray-800 text-white p-4">
          <div className="container mx-auto text-center">
            <p>© {new Date().getFullYear()} NewsFlash. All content is for demo purposes only.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}