import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <h1 className="text-4xl font-bold mb-4">404 - Article Not Found</h1>
      <p className="text-lg mb-8">Sorry, the article you're looking for doesn't exist or has been removed.</p>
      <Link href="/" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
        Return to Home
      </Link>
    </div>
  );
}