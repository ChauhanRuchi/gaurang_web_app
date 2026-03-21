'use client';

import { Container, Box, Typography, Grid, Card, CardContent, Button, Stack } from '@mui/material';
import { PlayArrow, CheckCircle, CardGiftcard, TrendingUp, Download, VideoLibrary, Poll, LocalFireDepartment, ArrowForward } from '@mui/icons-material';
import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Home() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const navLinks = [
    { href: '#features', label: 'Features' },
    { href: '/challenges', label: 'Challenges' },
    { href: '/rewards', label: 'Rewards' },
  ];

  return (
    <div>
      <Header />

      {/* Hero Section */}
      <Box sx={{
        background: 'linear-gradient(135deg, #f5f3ff 0%, #ede9fe 100%)',
        color: '#1f2937',
        py: { xs: 6, md: 10 },
        position: 'relative',
        overflow: 'hidden',
      }}>
        <Box sx={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: { xs: '200px', md: '400px' },
          height: { xs: '200px', md: '400px' },
          background: 'rgba(91, 92, 255, 0.1)',
          borderRadius: '50%',
          transform: 'translate(100px, -100px)',
        }} />
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h3" sx={{ fontWeight: 800, mb: 2, fontSize: { xs: '2rem', md: '3.5rem' }, lineHeight: 1.2 }}>
                Welcome to
              </Typography>
              <Typography variant="h3" sx={{ fontWeight: 800, mb: 2, fontSize: { xs: '2rem', md: '3.5rem' }, color: '#5B5CFF', lineHeight: 1.2 }}>
                Watch Video – Earn Cash Money
              </Typography>
              <Typography variant="h5" sx={{ fontWeight: 600, mb: 3, color: '#1f2937' }}>
                Watch. Earn. Enjoy.
              </Typography>
              <Typography variant="body1" sx={{ fontSize: { xs: '0.95rem', md: '1.1rem' }, mb: 4, color: '#4b5563', lineHeight: 1.6 }}>
                Turn your screen time into income. Watch videos, take surveys, and get real rewards. Join millions who are already earning while being entertained.
              </Typography>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <Button
                  variant="contained"
                  sx={{ backgroundColor: '#5B5CFF', color: '#fff', fontWeight: 600, py: 1.5, px: 4, '&:hover': { backgroundColor: '#4A4BE8' } }}
                  startIcon={<PlayArrow />}
                  onClick={() => window.open('https://play.google.com/store/apps/details?id=com.tikcash.dailymoney.rewards.watchvideoearnmoney', '_blank')}
                >
                  Start Earning Now
                </Button>
                <Button
                  variant="outlined"
                  component="a"
                  href="#how-it-works"
                  sx={{ color: '#1f2937', borderColor: '#1f2937', fontWeight: 600, py: 1.5, px: 4, '&:hover': { backgroundColor: 'rgba(31, 41, 55, 0.05)', borderColor: '#1f2937' } }}
                  startIcon={<ArrowForward sx={{ fontSize: 20 }} />}
                >
                  Learn How It Works
                </Button>
              </Stack>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                px: { xs: 2, md: 0 }
              }}>
                <Box sx={{
                  background: '#1f2937',
                  borderRadius: '2rem',
                  p: 3,
                  width: '100%',
                  maxWidth: '300px',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
                }}>
                  <Box sx={{ background: '#000', borderRadius: '1.5rem', p: 2, mb: 2 }}>
                    <Typography sx={{ color: '#fff', fontSize: '0.9rem', mb: 2 }}>Watch Video - Earn Cash Money</Typography>
                    <Box sx={{ background: '#10b981', color: '#fff', borderRadius: '0.75rem', display: 'inline-block', px: 2, py: 1, fontSize: '0.8rem', fontWeight: 600 }}>
                      💰 429432
                    </Box>
                  </Box>
                  {[
                    { title: 'Attitude Towards Financial Planning', desc: 'Explore your approach to financial planning', points: '4500 Points Rewards' },
                    { title: 'Art & Creativity', desc: 'Discover your creative interests and artistic expressions', points: '6000 Points Rewards' },
                    { title: 'Exploring Financial Habits and Challenges', desc: 'Understand financial habits and overcome challenges.', points: '4500 Points Rewards' }
                  ].map((item, idx) => (
                    <Box key={idx} sx={{ mb: 2, pb: 2, borderBottom: idx < 2 ? '1px solid rgba(255,255,255,0.1)' : 'none' }}>
                      <Typography sx={{ color: '#fff', fontWeight: 600, fontSize: '0.95rem', mb: 0.5 }}>{item.title}</Typography>
                      <Typography sx={{ color: '#9ca3af', fontSize: '0.85rem', mb: 1.5 }}>{item.desc}</Typography>
                      <Button variant="contained" fullWidth sx={{ backgroundColor: '#10b981', color: '#fff', fontWeight: 600, py: 1, '&:hover': { backgroundColor: '#059669' } }}>
                        {item.points}
                      </Button>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Earning Options */}
      <Box sx={{ py: { xs: 6, md: 8 }, backgroundColor: '#f9fafb' }} id="features">
        <Container maxWidth="lg">
          <Typography variant="h4" sx={{ fontWeight: 800, mb: 1, textAlign: 'center', fontSize: { xs: '1.75rem', md: '2.25rem' } }}>
            Discover Your Earning Options
          </Typography>
          <Typography variant="body1" sx={{ textAlign: 'center', color: '#6b7280', mb: 6, fontSize: { xs: '0.95rem', md: '1rem' } }}>
            Multiple ways to earn rewards that fit your lifestyle. Choose what works best for you.
          </Typography>
          <Grid container spacing={3}>
            {[
              { icon: VideoLibrary, title: 'Watch Videos', desc: 'Earn coins for every video watched. Enjoy entertainment while building your rewards.' },
              { icon: Poll, title: 'Complete Surveys', desc: 'Share your opinions and earn rewards. Quick surveys that value your thoughts.' },
              { icon: LocalFireDepartment, title: 'Daily Streaks', desc: 'Unlock bonuses every day. Consistency pays off with streak multipliers.' },
            ].map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <Grid item xs={12} sm={6} md={4} key={idx}>
                  <Card
                    onMouseEnter={() => setHoveredCard(idx)}
                    onMouseLeave={() => setHoveredCard(null)}
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      transition: 'transform 0.3s, boxShadow 0.3s',
                      transform: hoveredCard === idx ? 'translateY(-8px)' : 'translateY(0)',
                      boxShadow: hoveredCard === idx ? '0 12px 24px rgba(0,0,0,0.1)' : '0 4px 12px rgba(0,0,0,0.05)',
                      border: '1px solid rgba(0,0,0,0.05)'
                    }}
                  >
                    <CardContent sx={{ flex: 1 }}>
                      <Box sx={{ backgroundColor: '#ede9fe', width: 56, height: 56, borderRadius: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
                        <IconComponent sx={{ fontSize: 32, color: '#5B5CFF' }} />
                      </Box>
                      <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>{item.title}</Typography>
                      <Typography variant="body2" sx={{ color: '#6b7280', lineHeight: 1.6 }}>{item.desc}</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>

      {/* Why Choose Us */}
      <Box sx={{ py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <Typography variant="h4" sx={{ fontWeight: 800, mb: 1, textAlign: 'center', fontSize: { xs: '1.75rem', md: '2.25rem' } }}>
            Why Millions Love Watch Video – Earn Cash Money
          </Typography>
          <Typography variant="body1" sx={{ textAlign: 'center', color: '#6b7280', mb: 6, fontSize: { xs: '0.95rem', md: '1rem' } }}>
            Join the most trusted platform for earning rewards through entertainment. Experience the difference that makes us the #1 choice.
          </Typography>
          <Grid container spacing={3}>
            {[
              { icon: CheckCircle, title: 'Instant Rewards', desc: 'Get your coins immediately after completing tasks. No waiting periods.' },
              { icon: TrendingUp, title: 'Daily Challenges', desc: 'Fresh challenges every day to keep earning exciting and engaging.' },
              { icon: CardGiftcard, title: 'Redeem Gift Cards', desc: 'Convert your coins to popular gift cards from top brands instantly.' },
              // { icon: Users, title: 'Active Community', desc: 'Join thousands of earners sharing tips and celebrating achievements.' },
            ].map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <Grid item xs={12} sm={6} md={3} key={idx}>
                  <Card sx={{ border: '1px solid rgba(0,0,0,0.05)', boxShadow: 'none' }}>
                    <CardContent>
                      <Box sx={{ backgroundColor: '#ede9fe', width: 56, height: 56, borderRadius: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
                        <IconComponent sx={{ fontSize: 32, color: '#5B5CFF' }} />
                      </Box>
                      <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>{item.title}</Typography>
                      <Typography variant="body2" sx={{ color: '#6b7280', lineHeight: 1.6 }}>{item.desc}</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>

      {/* How It Works */}
      <Box id="how-it-works" sx={{ py: { xs: 6, md: 8 }, backgroundColor: '#f9f8ff' }}>
        <Container maxWidth="lg">
          <Typography variant="h4" sx={{ fontWeight: 800, mb: 1, textAlign: 'center', fontSize: { xs: '1.75rem', md: '2.25rem' } }}>
            How It Works
          </Typography>
          <Typography variant="body1" sx={{ textAlign: 'center', color: '#6b7280', mb: 6, fontSize: { xs: '0.95rem', md: '1rem' } }}>
            Start earning in just 3 simple steps. It's that easy to turn your free time into rewards.
          </Typography>
          <Grid container spacing={{ xs: 4, md: 2 }} sx={{ position: 'relative' }}>
            {[
              { num: '1', icon: Download, title: 'Download the App', desc: 'Get Watch Video – Earn Cash Money from Play Store. Quick setup in under 2 minutes.' },
              { num: '2', icon: VideoLibrary, title: 'Watch & Earn', desc: 'Complete daily tasks, watch videos, and take rewards instantly.' },
              { num: '3', icon: CardGiftcard, title: 'Redeem Rewards', desc: 'Convert your coins to gift cards from top brands or cash via PayPal instantly.' },
            ].map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <Grid item xs={12} md={4} key={idx}>
                  <Box sx={{ textAlign: 'center', position: 'relative' }}>
                    <Box sx={{
                      width: 80,
                      height: 80,
                      backgroundColor: '#5B5CFF',
                      color: '#fff',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '2rem',
                      fontWeight: 800,
                      mx: 'auto',
                      mb: 2,
                      boxShadow: '0 4px 12px rgba(91, 92, 255, 0.3)'
                    }}>
                      {item.num}
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                      <IconComponent sx={{ fontSize: 40, color: '#5B5CFF' }} />
                    </Box>
                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>{item.title}</Typography>
                    <Typography variant="body2" sx={{ color: '#6b7280', lineHeight: 1.6 }}>{item.desc}</Typography>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box sx={{
        background: 'linear-gradient(135deg, #5B5CFF 0%, #4A4BE8 100%)',
        color: '#fff',
        py: { xs: 6, md: 8 },
        textAlign: 'center'
      }}>
        <Container maxWidth="md">
          <Typography variant="h4" sx={{ fontWeight: 800, mb: 3, fontSize: { xs: '1.75rem', md: '2.25rem' } }}>
            Start Earning While You Watch
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, fontSize: { xs: '0.95rem', md: '1.1rem' } }}>
            Entertainment that pays you. Join millions who are already earning with Watch Video – Earn Cash Money.
          </Typography>
          <Button variant="contained" size="large" sx={{ backgroundColor: '#fff', color: '#10b981', fontWeight: 700, py: 2, px: 6, '&:hover': { backgroundColor: '#f0f0f0' } }}>
            Download Now
          </Button>
        </Container>
      </Box>
      <Footer />
    </div>
  );
}
