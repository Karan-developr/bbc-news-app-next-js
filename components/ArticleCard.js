import React from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
  Box,
} from '@mui/material';
import { useRouter } from 'next/router';

export default function ArticleCard({ id, title, snippet, date, image }) {
  const router = useRouter();

  const handleReadMore = () => {
    router.push(`/article/${id}`);
  };

  const getImageUrl = (imageUrl) => {
    return imageUrl || '/images/image2.jpg';
  };

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    }
    return text;
  };

  return (
    <Card
      sx={{
        marginBottom: 3,
        transition: 'transform 0.2s, box-shadow 0.3s',
        boxShadow: '0px 2px 5px rgba(0,0,0,0.2)',
        '&:hover': {
          transform: 'scale(1.03)',
          boxShadow: '0px 5px 15px rgba(0,0,0,0.3)',
        },
        borderRadius: '8px',
        overflow: 'hidden',
      }}
    >
      {/* Image Section */}
      {image ? (
        <CardMedia
          component="img"
          height="200"
          image={getImageUrl(image)}
          alt={title}
          loading="lazy"
          sx={{
            objectFit: 'cover',
            width: '100%',
            height: { xs: 150, sm: 200 },
          }}
        />
      ) : (
        <Box
          sx={{
            height: 200,
            backgroundColor: '#f0f0f0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#888',
            fontSize: '1.2rem',
          }}
        >
          No Image Available
        </Box>
      )}

      {/* Content Section */}
      <CardContent>
        <Typography
          variant="h6"
          sx={{
            backgroundColor: '#bb1919',
            color: 'white',
            padding: '10px',
            borderRadius: '5px',
            fontWeight: 'bold',
            textAlign: 'center',
            fontSize: { xs: '1rem', sm: '1.2rem' },
          }}
        >
          {truncateText(title, 50)}
        </Typography>

        {/* Date */}
        <Typography
          variant="body2"
          color="text.secondary"
          gutterBottom
          sx={{ marginTop: '8px', textAlign: 'center' }}
        >
          {date}
        </Typography>

        {/* Truncated Snippet */}
        <Typography
          variant="body1"
          sx={{
            marginTop: '8px',
            textAlign: 'justify',
            fontSize: { xs: '0.9rem', sm: '1rem' },
          }}
        >
          {truncateText(snippet, 120)}
        </Typography>
      </CardContent>

      {/* Read More Button */}
      <CardActions sx={{ justifyContent: 'center' }}>
        <Button
          size="small"
          variant="contained"
          onClick={handleReadMore}
          sx={{
            backgroundColor: '#bb1919',
            color: 'white',
            fontSize: { xs: '0.8rem', sm: '0.9rem' },
            padding: { xs: '5px 10px', sm: '8px 16px' },
          }}
        >
          Read More
        </Button>
      </CardActions>
    </Card>
  );
}
