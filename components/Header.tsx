import Link from 'next/link';
import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Stack,
  Button,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import { Close } from '@mui/icons-material';
import { PlayArrow, Menu as MenuIcon } from '@mui/icons-material';

const navLinks = [
  { href: '/#features', label: 'Features' },
  { href: '/#challenges', label: 'Challenges' },
  { href: '/rewards', label: 'Rewards' },
  { href: '/privacy', label: 'Privacy Policy' },
  { href: '/terms', label: 'Terms & Conditions' },
];

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      {/* mobile drawer */}
      <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Box sx={{ width: 250, p: 2 }} role="presentation">
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <IconButton onClick={() => setDrawerOpen(false)}>
              <Close />
            </IconButton>
          </Box>
          <List onClick={() => setDrawerOpen(false)}>
            {navLinks.map((link) => (
              <ListItemButton component={Link} href={link.href} key={link.label}>
                <ListItemText primary={link.label} />
              </ListItemButton>
            ))}
            <ListItemButton 
            // onClick={() => window.open('https://play.google.com/store/apps/details?id=com.tikcash.dailymoney.rewards.watchvideoearnmoney', '_blank')}
            >
              <Button
                variant="contained"
                fullWidth
                sx={{ backgroundColor: '#5B5CFF', color: '#fff', fontWeight: 600 }}
              >
                Start Earning
              </Button>
            </ListItemButton>
          </List>
        </Box>
      </Drawer>

      {/* app bar */}
      <AppBar
        position="sticky"
        sx={{
          background: 'linear-gradient(135deg, #5B5CFF 0%, #4A4BE8 100%)',
          boxShadow: 'none',
          borderBottom: '1px solid rgba(255,255,255,0.1)',
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
          <Link href="/">
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, cursor: 'pointer' }}>
              <PlayArrow sx={{ fontSize: 28 }} />
              <Typography variant="h6" sx={{ fontWeight: 700, letterSpacing: '0.5px' }}>
                Watch Video - Earn Cash
              </Typography>
            </Box>
          </Link>
          <Stack direction="row" spacing={1} sx={{ display: { xs: 'none', sm: 'flex' } }}>
            {navLinks.map((link) => (
              <Link href={link.href} key={link.label}>
                <Button
                  color="inherit"
                  sx={{ '&:hover': { backgroundColor: 'rgba(255,255,255,0.1)' } }}
                >
                  {link.label}
                </Button>
              </Link>
            ))}
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#fff',
                color: '#5B5CFF',
                fontWeight: 600,
                '&:hover': { backgroundColor: '#f0f0f0' },
              }}
              // onClick={() => window.open('https://play.google.com/store/apps/details?id=com.tikcash.dailymoney.rewards.watchvideoearnmoney', '_blank')}
            >
              Start Earning
            </Button>
          </Stack>
          <IconButton
            edge="end"
            color="inherit"
            sx={{ display: { xs: 'flex', sm: 'none' } }}
            onClick={() => setDrawerOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
}
