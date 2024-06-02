import React from 'react';
import { Box, Grid, Typography, Link, Container, IconButton, TextField, Button } from '@mui/material';
import { styled, useTheme } from '@mui/system';
import { useMediaQuery } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PinterestIcon from '@mui/icons-material/Pinterest';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const FooterWrapper = styled('footer')({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  backgroundColor: '#212121',
  color: '#FFFFFF',
  padding: '10px',
  overflow: 'hidden',
});

const Newsletter = styled(Box)({
  marginBottom: '24px',
  textAlign: 'center',
});

const NewsletterForm = styled('form')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  maxWidth: '500px',
  margin: '0 auto',
});

const MenuList = styled('ul')({
  listStyleType: 'none',
  padding: 0,
  margin: 0,
});

const MenuItem = styled('li')({
  marginBottom: '8px',
});

const SocialIcons = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  gap: '16px',
});

const Footer = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <FooterWrapper>
      <Container sx={{ marginTop: "1%" }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Newsletter>
              <Typography variant="h3" sx={{ color: 'wheat', fontFamily: 'cursive', fontWeight: 100 }} gutterBottom>
                Subscribe to Our Newsletter
              </Typography>
              <NewsletterForm>
                <TextField
                  variant="filled"
                  placeholder="Enter your email"
                  fullWidth
                  InputProps={{
                    disableUnderline: true,
                    sx: {
                      color: 'white',
                      '&::placeholder': {
                        color: 'white',
                      },
                    },
                  }}
                  sx={{
                    marginRight: 1,
                    '& .MuiInputBase-input': {
                      color: 'white',
                    },
                  }}
                />
                <Button sx={{ color: 'white', marginLeft: '-20px' }} type="submit">
                  <ArrowForwardIcon />
                </Button>
              </NewsletterForm>
            </Newsletter>
          </Grid>
          <Grid item xs={12} md={3} sx={{ textAlign: isSmallScreen ? 'center' : 'left' }}>
            <Box>
              <Typography variant="h5" sx={{ color: 'wheat' }} gutterBottom>
                Menu
              </Typography>
              <MenuList>
                <MenuItem>
                  <Link href="/collections/all" color="inherit" underline="hover" sx={{ '&:hover': { color: 'wheat' } }}>
                    Shop All
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link href="/pages/about-us" color="inherit" underline="hover" sx={{ '&:hover': { color: 'wheat' } }}>
                    About Us
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link href="/blogs/community" color="inherit" underline="hover" sx={{ '&:hover': { color: 'wheat' } }}>
                    Community
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link href="#" color="inherit" underline="hover" sx={{ '&:hover': { color: 'wheat' } }}>
                    Vibes
                  </Link>
                </MenuItem>
              </MenuList>
            </Box>
          </Grid>
          <Grid item xs={12} md={3} sx={{ textAlign: isSmallScreen ? 'center' : 'left' }}>
            <Box>
              <Typography variant="h5" sx={{ color: 'wheat' }} gutterBottom>
                Support
              </Typography>
              <MenuList>
                <MenuItem>
                  <Link href="/pages/shipping-returns" color="inherit" underline="hover" sx={{ '&:hover': { color: 'wheat' } }}>
                    Shipping & Returns
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link href="/pages/help" color="inherit" underline="hover" sx={{ '&:hover': { color: 'wheat' } }}>
                    Help & FAQ
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link href="/pages/terms-conditions" color="inherit" underline="hover" sx={{ '&:hover': { color: 'wheat' } }}>
                    Terms & Conditions
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link href="/pages/privacy-policy" color="inherit" underline="hover" sx={{ '&:hover': { color: 'wheat' } }}>
                    Privacy Policy
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link href="/pages/contact" color="inherit" underline="hover" sx={{ '&:hover': { color: 'wheat' } }}>
                    Contact
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link href="/account/login" color="inherit" underline="hover" sx={{ '&:hover': { color: 'wheat' } }}>
                    Login
                  </Link>
                </MenuItem>
              </MenuList>
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={4} marginTop={4} justifyContent="center">
          <Grid item xs={12} md={6}>
            <SocialIcons>
              <IconButton color="inherit" aria-label="facebook">
                <FacebookIcon fontSize="large" />
              </IconButton>
              <IconButton color="inherit" aria-label="twitter">
                <TwitterIcon fontSize="large" />
              </IconButton>
              <IconButton color="inherit" aria-label="instagram">
                <InstagramIcon fontSize="large" />
              </IconButton>
              <IconButton color="inherit" aria-label="youtube">
                <YouTubeIcon fontSize="large" />
              </IconButton>
              <IconButton color="inherit" aria-label="whatsapp">
                <WhatsAppIcon fontSize="large" />
              </IconButton>
              <IconButton color="inherit" aria-label="pinterest">
                <PinterestIcon fontSize="large" />
              </IconButton>
              <IconButton color="inherit" aria-label="linkedin">
                <LinkedInIcon fontSize="large" />
              </IconButton>
            </SocialIcons>
          </Grid>
        </Grid>
        <Box textAlign="center" paddingY={2}>
          <Typography variant="body2">&copy; 2024 The PureThreads Inc.</Typography>
        </Box>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
