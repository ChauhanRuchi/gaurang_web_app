'use client';

import Header from '@/components/Header';
import DownloadAppButton from '../../components/DownloadAppButton';
import { Container, Box, Typography, Grid, Button } from '@mui/material';
import Link from 'next/link';
import { useState } from 'react';
import Footer from '@/components/Footer';

export default function TermsPage() {
  return (
    <div>
      <Header />
<h1>hgdd</h1>
      {/* Hero */}
      <Box sx={{ background: 'linear-gradient(135deg, #f5f3ff 0%, #ede9fe 100%)', color: '#1f2937', py: 6 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" sx={{ fontWeight: 800, mb: 2, fontSize: { xs: '2rem', md: '2.5rem' } }}>
            Terms of Service
          </Typography>
          <Typography variant="body1" sx={{ color: '#6b7280' }}>Last Updated: 12 January 2026</Typography>
        </Container>
      </Box>

      {/* Content */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box sx={{ maxWidth: '800px' }}>
          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" sx={{ fontWeight: 800, mb: 2 }}>Introduction</Typography>
            <Typography sx={{ color: '#6b7280', lineHeight: 1.8, mb: 2 }}>
              Welcome to Watch Video – Earn Cash Money ("the App", "we", "us", or "our"). By installing or using the App, you agree to be bound by the following Terms of Service. If you do not agree, please discontinue use of the App.
            </Typography>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" sx={{ fontWeight: 800, mb: 2 }}>1. Eligibility</Typography>
            <Typography sx={{ color: '#6b7280', lineHeight: 1.8, mb: 2 }}>
              To use the App, you must:
            </Typography>
            <Typography sx={{ color: '#6b7280', lineHeight: 1.8, mb: 3, ml: 2 }}>
              • Be at least 13 years old<br/>
              • Have a compatible mobile device and internet access<br/>
              • Comply with all applicable local laws
            </Typography>
            <Typography sx={{ color: '#6b7280', lineHeight: 1.8 }}>
              Users under 18 must obtain permission from a parent or legal guardian.
            </Typography>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" sx={{ fontWeight: 800, mb: 2 }}>2. Purpose of the App</Typography>
            <Typography sx={{ color: '#6b7280', lineHeight: 1.8, mb: 2 }}>
              The App provides:
            </Typography>
            <Typography sx={{ color: '#6b7280', lineHeight: 1.8, mb: 3, ml: 2 }}>
              • Short educational and informational videos (hosted publicly on YouTube)<br/>
              • Optional tasks such as surveys, opinions, or questionnaires<br/>
              • A points-based reward system for completing in-app tasks
            </Typography>
            <Typography sx={{ color: '#6b7280', lineHeight: 1.8 }}>
              The App is for learning and engagement purposes only, and is not intended as a financial service or earning platform.
            </Typography>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" sx={{ fontWeight: 800, mb: 2 }}>3. Points & Rewards System</Typography>
            <Typography sx={{ color: '#6b7280', lineHeight: 1.8, mb: 2 }}>
              Users can earn reward points for participating in in-app tasks. Reward points:
            </Typography>
            <Typography sx={{ color: '#6b7280', lineHeight: 1.8, mb: 3, ml: 2 }}>
              • Have no cash value<br/>
              • Cannot be transferred, traded, or sold<br/>
              • Are stored within the user account<br/>
              • Can be redeemed only for in-app digital rewards once minimum thresholds are met
            </Typography>
            <Typography sx={{ color: '#6b7280', lineHeight: 1.8, mb: 2 }}>
              Reward redemption options may include:
            </Typography>
            <Typography sx={{ color: '#6b7280', lineHeight: 1.8, mb: 3, ml: 2 }}>
              ✔ PayPal digital rewards<br/>
              ✔ Amazon digital gift cards
            </Typography>
            <Typography sx={{ color: '#6b7280', lineHeight: 1.8, mb: 2 }}>
              Reward availability depends on region, availability, and user eligibility.
            </Typography>
            <Typography sx={{ color: '#6b7280', lineHeight: 1.8, mb: 2, fontWeight: 600 }}>
              Important Notes
            </Typography>
            <Typography sx={{ color: '#6b7280', lineHeight: 1.8, mb: 3, ml: 2 }}>
              • Points do not represent real money or currency<br/>
              • Points are not bank deposits or investments<br/>
              • The App does not guarantee earnings or payouts<br/>
              • Redemption requests may require processing time for validation
            </Typography>
            <Typography sx={{ color: '#6b7280', lineHeight: 1.8, mb: 2 }}>
              We reserve the right to:
            </Typography>
            <Typography sx={{ color: '#6b7280', lineHeight: 1.8, mb: 3, ml: 2 }}>
              • Modify reward values<br/>
              • Change minimum redemption thresholds<br/>
              • Add or remove reward partners<br/>
              • Limit redemptions to prevent abuse or fraud
            </Typography>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" sx={{ fontWeight: 800, mb: 2 }}>4. Content & Videos</Typography>
            <Typography sx={{ color: '#6b7280', lineHeight: 1.8, mb: 3 }}>
              Videos inside the App are hosted publicly on YouTube. We do not upload, store, or own video content unless otherwise specified. All copyrights belong to their respective creators.
            </Typography>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" sx={{ fontWeight: 800, mb: 2 }}>5. Advertising & Third-Party Services</Typography>
            <Typography sx={{ color: '#6b7280', lineHeight: 1.8, mb: 2 }}>
              The App may display advertisements and use third-party tools including:
            </Typography>
            <Typography sx={{ color: '#6b7280', lineHeight: 1.8, mb: 3, ml: 2 }}>
              • Google AdMob (ads)<br/>
              • Firebase Analytics & Crash Reporting<br/>
              • Microsoft Clarity (UX analytics)<br/>
              • AppMatrika (analytics/attribution)
            </Typography>
            <Typography sx={{ color: '#6b7280', lineHeight: 1.8, mb: 2 }}>
              These services may collect device identifiers, usage data, and performance metrics to:
            </Typography>
            <Typography sx={{ color: '#6b7280', lineHeight: 1.8, mb: 3, ml: 2 }}>
              • Improve the App<br/>
              • Personalize content where permitted<br/>
              • Diagnose crashes<br/>
              • Measure performance
            </Typography>
            <Typography sx={{ color: '#6b7280', lineHeight: 1.8 }}>
              Users may opt-out of ad personalization via device settings where applicable.
            </Typography>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" sx={{ fontWeight: 800, mb: 2 }}>6. Account Management & Suspension</Typography>
            <Typography sx={{ color: '#6b7280', lineHeight: 1.8, mb: 2 }}>
              We reserve the right to suspend or terminate accounts that:
            </Typography>
            <Typography sx={{ color: '#6b7280', lineHeight: 1.8, mb: 3, ml: 2 }}>
              • Attempt to cheat, exploit, or manipulate tasks<br/>
              • Use automated tools, bots, or scripts<br/>
              • Engage in fraudulent redemption behavior<br/>
              • Violate any part of these Terms
            </Typography>
            <Typography sx={{ color: '#6b7280', lineHeight: 1.8 }}>
              We may also revoke points or rewards obtained through improper usage.
            </Typography>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" sx={{ fontWeight: 800, mb: 2 }}>7. User Responsibilities</Typography>
            <Typography sx={{ color: '#6b7280', lineHeight: 1.8, mb: 2 }}>
              Users agree to:
            </Typography>
            <Typography sx={{ color: '#6b7280', lineHeight: 1.8, mb: 3, ml: 2 }}>
              • Use the App lawfully<br/>
              • Not reverse-engineer, exploit, or disrupt service<br/>
              • Not impersonate others<br/>
              • Not submit harmful or malicious content
            </Typography>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" sx={{ fontWeight: 800, mb: 2 }}>8. No Financial Advice or Services</Typography>
            <Typography sx={{ color: '#6b7280', lineHeight: 1.8, mb: 2 }}>
              The App does not provide:
            </Typography>
            <Typography sx={{ color: '#6b7280', lineHeight: 1.8, mb: 3, ml: 2 }}>
              • Cash payments<br/>
              • Banking services<br/>
              • Loans or credits<br/>
              • Investment products<br/>
              • Wages or employment relationships
            </Typography>
            <Typography sx={{ color: '#6b7280', lineHeight: 1.8 }}>
              Rewards are purely digital incentives for engagement.
            </Typography>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" sx={{ fontWeight: 800, mb: 2 }}>9. Availability & Modifications</Typography>
            <Typography sx={{ color: '#6b7280', lineHeight: 1.8 }}>
              We may update, modify, or discontinue any part of the App at any time without prior notice. We are not liable for service interruptions, delays, or unavailability due to maintenance or technical issues.
            </Typography>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" sx={{ fontWeight: 800, mb: 2 }}>10. Intellectual Property</Typography>
            <Typography sx={{ color: '#6b7280', lineHeight: 1.8 }}>
              All branding, trademarks, logos, UI assets, and content within the App are protected and may not be copied or distributed without permission. Third-party trademarks (e.g., PayPal, Amazon, YouTube) belong to their respective owners.
            </Typography>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" sx={{ fontWeight: 800, mb: 2 }}>11. Limitation of Liability</Typography>
            <Typography sx={{ color: '#6b7280', lineHeight: 1.8, mb: 2 }}>
              To the fullest extent permitted by law, we are not responsible for:
            </Typography>
            <Typography sx={{ color: '#6b7280', lineHeight: 1.8, mb: 3, ml: 2 }}>
              • Loss of points<br/>
              • Delayed rewards<br/>
              • Network issues<br/>
              • Device errors<br/>
              • Ad or video content<br/>
              • Third-party services or brands
            </Typography>
            <Typography sx={{ color: '#6b7280', lineHeight: 1.8 }}>
              Use of the App is at your own risk.
            </Typography>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" sx={{ fontWeight: 800, mb: 2 }}>12. Termination</Typography>
            <Typography sx={{ color: '#6b7280', lineHeight: 1.8 }}>
              You may stop using the App at any time. We may suspend/terminate access if violations occur or if legally required.
            </Typography>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" sx={{ fontWeight: 800, mb: 2 }}>13. Changes to Terms</Typography>
            <Typography sx={{ color: '#6b7280', lineHeight: 1.8 }}>
              We may update these Terms periodically. Continued use of the App constitutes acceptance of updated Terms.
            </Typography>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" sx={{ fontWeight: 800, mb: 2 }}>14. Contact Information</Typography>
            <Typography sx={{ color: '#6b7280', lineHeight: 1.8 }}>
              For questions about these Terms, rewards, or data practices: Email: <Typography component="a" href="mailto:support@earnwatch.com" sx={{ color: '#6b7280', textDecoration: 'underline' }}>support@earnwatch.com</Typography>
            </Typography>
          </Box>

         
        </Box>
      </Container>

      {/* Start Earning While You Watch */}
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
          <DownloadAppButton />
        </Container>
      </Box>

      <Footer />
    </div>
  );
}
