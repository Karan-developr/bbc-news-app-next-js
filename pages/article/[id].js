import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Container, Typography, Button, Box, CircularProgress, Grid } from '@mui/material';
import Head from 'next/head';
import { fetchBBCNews } from '../../lib/fetchNews';

export default function ArticlePage({ article }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  if (!article && !loading) {
    return (
      <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress size={60} color="primary" />
      </Container>
    );
  }

  const handleBack = () => {
    setLoading(true);
    router.back();
  };

  return (
    <>
      <Head>
        <title>{article.title} | BBC News</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={article.contentSnippet} />
        <meta name="keywords" content="BBC News, Article, Breaking News, World News" />
        <link rel="canonical" href={`https://yourwebsite.com/article/${article.id}`} />
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.contentSnippet} />
        <meta property="og:url" content={`https://yourwebsite.com/article/${article.id}`} />
        <meta property="og:type" content="article" />
        {article.image && <meta property="og:image" content={article.image} />}
        <meta property="article:published_time" content={article.pubDate} />
        <meta name="twitter:card" content="summary_large_image" />
        {article.image && <meta name="twitter:image" content={article.image} />}
      </Head>
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Button
          onClick={handleBack}
          variant="contained"
          sx={{
            mb: 2,
            backgroundColor: '#bb1919', 
            color: 'white', 
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            
          }}
        >
          Go Back
        </Button>
        <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold', color: '#333' }}>
          {article.title}
        </Typography>

        <Grid container spacing={2} sx={{ mb: 4 }}>
          {article.image && (
            <Grid item xs={12} sm={8}>
              <Box
                component="img"
                src={article.image}
                alt={article.title}
                sx={{
                  width: '100%',
                  maxHeight: '400px',
                  objectFit: 'cover',
                  borderRadius: '8px',
                  boxShadow: '0 6px 12px rgba(0,0,0,0.2)',
                }}
              />
            </Grid>
          )}
          <Grid item xs={12} sm={4}>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              Published on: {article.pubDate}
            </Typography>
            <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
              {article.contentSnippet}
            </Typography>
          </Grid>
        </Grid>

        
      </Container>
    </>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.params;
  const articles = await fetchBBCNews();
  const article = articles[id] || null;

  return { props: { article } };
}
