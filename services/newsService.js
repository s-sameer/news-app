import { dummyArticles } from "@/data/newsData";

export async function getLatestNews() {
    // Simulate network delay to make it feel like a real API
    await new Promise(resolve => setTimeout(resolve, 300));
    return dummyArticles;
}

export async function getArticleById(id) {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 200));
    return dummyArticles.find(article => article.id === parseInt(id)) || null;
}