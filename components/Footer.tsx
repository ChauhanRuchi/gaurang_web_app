import Link from 'next/link';
import { Box, Container, Grid, Typography, Stack } from '@mui/material';

export default function Footer() {
  return (
    <Box sx={{ backgroundColor: '#1f2937', color: '#fff', py: 6 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} sx={{ mb: 4 }}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
              Watch Video - Earn Cash
            </Typography>
            <Typography variant="body2" sx={{ color: '#d1d5db', mb: 2 }}>
              Turn your screen time into income. Watch videos, complete surveys, and earn real rewards. The most trusted platform for earning through entertainment.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
              Quick Links
            </Typography>
            <Stack spacing={1}>
              <Link href="#features">
                <Typography variant="body2" sx={{ color: '#d1d5db', cursor: 'pointer', '&:hover': { color: '#fff' } }}>
                  Features
                </Typography>
              </Link>
              <Link href="/#challenges">
                <Typography variant="body2" sx={{ color: '#d1d5db', cursor: 'pointer', '&:hover': { color: '#fff' } }}>
                  Challenges
                </Typography>
              </Link>
              <Link href="/rewards">
                <Typography variant="body2" sx={{ color: '#d1d5db', cursor: 'pointer', '&:hover': { color: '#fff' } }}>
                  Rewards
                </Typography>
              </Link>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
              Legal
            </Typography>
            <Stack spacing={1}>
              <Link href="/privacy">
                <Typography variant="body2" sx={{ color: '#d1d5db', cursor: 'pointer', '&:hover': { color: '#fff' } }}>
                  Privacy Policy
                </Typography>
              </Link>
              <Link href="/terms">
                <Typography variant="body2" sx={{ color: '#d1d5db', cursor: 'pointer', '&:hover': { color: '#fff' } }}>
                  Terms & Conditions
                </Typography>
              </Link>
            </Stack>
          </Grid>
       
        </Grid>
        <Box sx={{ borderTop: '1px solid rgba(255,255,255,0.1)', pt: 4, textAlign: 'center' }}>
          <Typography variant="body2" sx={{ color: '#9ca3af' }}>
            © 2026 Watch Video - Earn Cash Money. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
