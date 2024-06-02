import React from 'react';
import { Button, Container, Grid, Typography } from '@mui/material';

const branding = () => {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjU_HPHR9sSTn37xHHkk0NF4Gs_kbHAe85Gg&s")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      padding: '2rem',
      display: 'flex',
      alignItems: 'center',
    }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="center" alignItems="center">
          <Grid item xs={12} md={6}>
            <div style={{
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              padding: '2rem',
              borderRadius: '1rem',
            }}>
              <Typography variant="h3" gutterBottom>
                Welcome to our T-Shirt Merchandise Store
              </Typography>
              <Typography variant="body1" paragraph>
                Discover a wide range of stylish and comfortable T-shirts for every occasion.
              </Typography>
              <Button variant="contained" color="primary" style={{ marginTop: '1rem' }}>
                Explore Collection
              </Button>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <img src="file:///C:/Users/aacha/Downloads/image-removebg-preview.png" alt="T-shirt merchandise" style={{ maxWidth: '100%', height: 'auto' }} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default branding;
