import React from 'react';
import { fetchBBCNews } from '../lib/fetchNews';
import ArticleCard from '../components/ArticleCard';
import { Container, Typography, Grid } from '@mui/material';
import Head from 'next/head';

export default function HomePage({ articles }) {
  return (
    <>
      <Head>
        <title>BBC News - Stay Updated with the Latest Headlines</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Get the latest breaking news and top stories from BBC. Explore world news, politics, technology, and more." />
        <meta name="keywords" content="BBC News, World News, Breaking News, Politics, Technology" />
        <meta name="author" content="BBC News Aggregator" />
        <link rel="canonical" href="https://bbc-news-app-next-js.vercel.app/" />
        <meta property="og:title" content="BBC News - Stay Updated with the Latest Headlines" />
        <meta property="og:description" content="Get the latest breaking news and top stories from BBC." />
        <meta property="og:url" content="https://bbc-news-app-next-js.vercel.app/" />
        <meta property="og:type" content="website" />
      </Head>
      <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          textAlign: 'center',
          fontWeight: 'bold',
          marginBottom: '2rem',
          fontSize: { xs: '1.8rem', sm: '2.4rem' },
        }}
      >
        BBC News
      </Typography>
        <Grid container spacing={3}>
          {articles.map((article, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <ArticleCard
                id={index}
                title={article.title}
                snippet={article.contentSnippet}
                date={article.pubDate}
                image={article.image  || '/images/image2.jpg'}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}

export async function getServerSideProps() {
  const articles = await fetchBBCNews();
  return { props: { articles } };
}
