import Parser from "rss-parser";


const parser = new Parser();

export async function fetchBBCNews() {
  try {
    const feed = await parser.parseURL("http://feeds.bbci.co.uk/news/rss.xml");
    return feed.items.map((item) =>
      ({
        title: item.title,
        link: item.link,
        pubDate: item.pubDate,
        contentSnippet: item.contentSnippet,
        image: item.enclosure?.url || "/images/image2.jpg",
      })
    );
  } catch (error) {
    console.error("Error fetching BBC News feed", error);
    return [];
  }
}
