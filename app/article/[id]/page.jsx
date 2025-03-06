import Link from 'next/link';
import { getArticleById } from '@/services/newsService';
import { notFound } from 'next/navigation';

export default async function ArticlePage({ params }) {
  const article = await getArticleById(params.id);
  
  if (!article) {
    notFound();
  }
  
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Link href="/" className="text-white mb-6 inline-block">
        ← Back to News
      </Link>
      
      <article className="bg-white rounded-lg shadow-md p-6">
        <h1 className="text-black text-3xl font-bold mb-4">{article.title}</h1>
        
        <div className="flex items-center text-gray-600 mb-6">
          <span>{article.author}</span>
          <span className="mx-2">•</span>
          <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
          <span className="mx-2">•</span>
          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
            {article.category}
          </span>
        </div>
        
        {article.imageUrl && (
          <img 
            src={article.imageUrl} 
            alt={article.title}
            className="w-full h-64 md:h-96 object-cover rounded-lg mb-6"
          />
        )}
        
        <div 
          className="prose max-w-none text-black"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
      </article>
    </div>
  );
}