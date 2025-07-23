import React from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TopBanner from '../Components/TopBanner.jsx'

// Dummy data array for all feedbacks (not filtered by user/team)
const feedbacks = [
  {
    id: 'f1',
    user: 'Samuel',
    comment: 'Amazing staff and fantastic experience. Highly recommended!',
    date: '2023-07-17',
  },
  {
    id: 'f2',
    user: 'Aria',
    comment: 'The trip organization was perfect. Will definitely book again.',
    date: '2023-07-15',
  },
  {
    id: 'f3',
    user: 'Liam',
    comment: 'Loved the attention to detail. Superb support team.',
    date: '2023-07-13',
  },
  {
    id: 'f4',
    user: 'Sophie',
    comment: 'Prompt responses and friendly advice. Great job!',
    date: '2023-07-09',
  },
  // Add more demo feedback entries as needed
];

const FeedBacks = () => (
    <>
        <TopBanner text='Feedbacks'/>   
  <Box sx={{ maxWidth: 700, mx: 'auto', py: 8, px: 2 }}>
  
    {feedbacks.length === 0 ? (
      <Typography variant="body1" textAlign="center" mt={6}>
        No feedback available yet.
      </Typography>
    ) : (
      feedbacks.map(({ id, user, comment, date }) => (
        <Card
          key={id}
          raised
          sx={{
            mb: 3,
            borderRadius: 3,
            boxShadow: 5,
            transition: 'transform 0.18s',
            '&:hover': { transform: 'scale(1.025)' },
            background: 'linear-gradient(90deg, #fef6f0 0%, #f4f8fb 96%)',
          }}
        >
          <CardContent>
            <Typography
              variant="body1"
              sx={{ fontStyle: 'italic', mb: 1, color: '#20252a' }}
            >
              “{comment}”
            </Typography>
            <Typography
              variant="subtitle2"
              fontWeight={600}
              sx={{ color: 'secondary.main', letterSpacing: 0.3 }}
            >
              — {user}
            </Typography>
            <Typography
              variant="caption"
              color="text.secondary"
              sx={{ ml: 1, fontSize: '0.85rem' }}
            >
              {new Date(date).toLocaleDateString(undefined, {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
              })}
            </Typography>
          </CardContent>
        </Card>
      ))
    )}

    <Button
      variant="contained"
      color="primary"
    //   href="/"
      sx={{ display: 'block', mx: 'auto', mt: 5 ,textAlign: 'center', 
    justifyContent: 'center',  }}
    >
      Give a feddback
    </Button>
  </Box>
  </>
);


export default FeedBacks;
