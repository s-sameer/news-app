import { getLatestNews } from '@/services/newsService';
import NewsGrid from '@/components/NewsGrid';

export default async function Home() {
  const articles = await getLatestNews();
  
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-12 text-center">Latest News</h1>
      <NewsGrid articles={articles} />
    </main>
  );
}