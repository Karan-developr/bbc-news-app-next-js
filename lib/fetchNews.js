import axios from "axios";

export async function fetchBBCNews() {
  const url = process.env.NEWS_API_URL;
  const params = {
    sources: process.env.NEWS_API_SOURCE, 
    apiKey: process.env.NEWS_API_KEY,
  };

  try {
    const response = await axios.get(url, { params });
    const articles = response.data.articles;

    return articles.map((item) => ({
      title: item.title,
      link: item.url,
      pubDate: item.publishedAt,
      contentSnippet: item.description,
      image: item.urlToImage,
    }));
  } catch (error) {
    console.error("Error fetching BBC News feed", error);
    return [];
  }
}
