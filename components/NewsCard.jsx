import Link from 'next/link';

export default function NewsCard({ article }) {
  return (
    <Link href={`/article/${article.id}`} className="block">
      <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 h-full">
        {article.imageUrl ? (
          <img 
            src={article.imageUrl} 
            alt={article.title} 
            className="w-full h-48 object-cover"
          />
        ) : (
          <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
            <p className="text-gray-500">No image available</p>
          </div>
        )}
        
        <div className="p-4">
          <h2 className="text-black font-bold text-xl mb-2 line-clamp-2">{article.title}</h2>
          <p className="text-gray-700 text-sm mb-3 line-clamp-3">{article.description}</p>
          <div className="flex justify-between items-center">
            <span className="text-gray-500 text-xs">{new Date(article.publishedAt).toLocaleDateString()}</span>
            <span className="bg-black hover:bg-gray-700 text-white px-3 py-1 rounded text-sm transition-colors duration-300">
              Read More
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}