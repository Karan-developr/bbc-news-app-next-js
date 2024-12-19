import React from 'react';
import { useRouter } from 'next/router';
import { Container, Typography, Button } from '@mui/material';

export default function ArticlePage() {
  const router = useRouter();
  const { url } = router.query;

  if (!url) {
    return <div>Loading...</div>;
  }

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Button onClick={() => router.back()} variant="contained" color="primary" sx={{ mb: 2 }}>
        Go Back
      </Button>
      <Typography variant="h5" gutterBottom>
        View the full article on BBC News:
      </Typography>
      <Button
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        variant="contained"
        color="secondary"
      >
        Read Full Article
      </Button>
    </Container>
  );
}
