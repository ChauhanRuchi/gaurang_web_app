'use client';

import Header from '@/components/Header';
import DownloadAppButton from '../../components/DownloadAppButton';
import { Container, Box, Typography, Grid, Button } from '@mui/material';
import Link from 'next/link';
import { useState } from 'react';
import Footer from '@/components/Footer';

export default function PrivacyPage() {
  return (
    <div>
      <Header />

      {/* Hero */}
      <Box sx={{ background: 'linear-gradient(135deg, #f5f3ff 0%, #ede9fe 100%)', color: '#1f2937', py: 6 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" sx={{ fontWeight: 800, mb: 2, fontSize: { xs: '2rem', md: '2.5rem' } }}>
            Privacy Policy
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
              This Privacy Policy describes how the app Watch Video – Earn Cash Money ("the App", "we", "our", or "us") collects, uses, stores, and protects user data. By downloading and using the App, you agree to the terms described below.
            </Typography>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" sx={{ fontWeight: 800, mb: 2 }}>1. Information We Collect</Typography>
            <Typography sx={{ color: '#6b7280', lineHeight: 1.8, mb: 2, fontWeight: 600 }}>1.1 Device & Usage Data</Typography>
            <Typography sx={{ color: '#6b7280', lineHeight: 1.8, mb: 3 }}>
              We automatically collect certain device information such as: Crash logs & performance data, In-app features used, Screen interactions & events, App version & install source, IP address, Device model & OS version
            </Typography>

            <Typography sx={{ color: '#6b7280', lineHeight: 1.8, mb: 2, fontWeight: 600 }}>1.2 Analytics & Interaction Data</Typography>
            <Typography sx={{ color: '#6b7280', lineHeight: 1.8, mb: 3 }}>
              To improve app functionality and user experience, we collect: Task participation, Video engagement, Button clicks, Screens viewed, Session duration
            </Typography>

            <Typography sx={{ color: '#6b7280', lineHeight: 1.8, mb: 2, fontWeight: 600 }}>1.3 Account & Profile Data</Typography>
            <Typography sx={{ color: '#6b7280', lineHeight: 1.8, mb: 3 }}>
              If the App includes account creation, we may collect: Points balance & reward history, Country or region, Email address, Name or username
            </Typography>

            <Typography sx={{ color: '#6b7280', lineHeight: 1.8, mb: 2, fontWeight: 600 }}>1.4 Rewards & Task Completion Data</Typography>
            <Typography sx={{ color: '#6b7280', lineHeight: 1.8, mb: 3 }}>
              To provide rewards, we store: Points earned, Task verification (e.g., secret codes), Redemption requests. We do not collect banking information, credit cards, or payment details.
            </Typography>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" sx={{ fontWeight: 800, mb: 2 }}>2. Third-Party Services We Use</Typography>
            <Typography sx={{ color: '#6b7280', lineHeight: 1.8, mb: 3 }}>
              The App uses third-party services for analytics, advertising, crash reporting, and rewards processing. These services may independently collect certain data.
            </Typography>
            <Typography sx={{ color: '#6b7280', lineHeight: 1.8, mb: 2, fontWeight: 600 }}>Google AdMob (Advertising)</Typography>
            <Typography sx={{ color: '#6b7280', lineHeight: 1.8, mb: 3 }}>
              Used to display ads and monetize content. AdMob may collect advertising identifiers for ad personalization or measurement. Link: <Typography component="a" href="https://policies.google.com/privacy" sx={{ color: '#6b7280', textDecoration: 'underline' }}>https://policies.google.com/privacy</Typography>
            </Typography>
            <Typography sx={{ color: '#6b7280', lineHeight: 1.8, mb: 2, fontWeight: 600 }}>Firebase (Analytics + Crash Reporting)</Typography>
            <Typography sx={{ color: '#6b7280', lineHeight: 1.8, mb: 3 }}>
              Used for analytics, event tracking, and crash diagnostics. Link: <Typography component="a" href="https://firebase.google.com/support/privacy" sx={{ color: '#6b7280', textDecoration: 'underline' }}>https://firebase.google.com/support/privacy</Typography>
            </Typography>
            <Typography sx={{ color: '#6b7280', lineHeight: 1.8, mb: 2, fontWeight: 600 }}>Microsoft Clarity (Interaction & UX Analytics)</Typography>
            <Typography sx={{ color: '#6b7280', lineHeight: 1.8, mb: 3 }}>
              Records user interactions to improve UI/UX experience. Link: <Typography component="a" href="https://privacy.microsoft.com" sx={{ color: '#6b7280', textDecoration: 'underline' }}>https://privacy.microsoft.com</Typography>
            </Typography>
            <Typography sx={{ color: '#6b7280', lineHeight: 1.8, mb: 2, fontWeight: 600 }}>AppMatrika (Analytics/Attribution/Performance)</Typography>
            <Typography sx={{ color: '#6b7280', lineHeight: 1.8, mb: 3 }}>
              Used for performance analytics, device metrics, and attribution. Link: <Typography component="a" href="https://videoearnmoney.online" sx={{ color: '#6b7280', textDecoration: 'underline' }}>https://videoearnmoney.online</Typography>
            </Typography>
            <Typography sx={{ color: '#6b7280', lineHeight: 1.8 }}>
              These services may use cookies, SDKs, or device identifiers for their functionality.
            </Typography>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" sx={{ fontWeight: 800, mb: 2 }}>3. YouTube Content</Typography>
            <Typography sx={{ color: '#6b7280', lineHeight: 1.8 }}>
              Videos accessed inside the App are hosted publicly on YouTube and are not owned or stored by us. All copyrights and trademarks belong to their respective owners.
            </Typography>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" sx={{ fontWeight: 800, mb: 2 }}>4. Advertising & Personalization</Typography>
            <Typography sx={{ color: '#6b7280', lineHeight: 1.8 }}>
              We may display ads to users. Ad personalization depends on user consent, regional regulation (GDPR, CCPA), and device preferences. Users may opt-out of ad personalization through device settings or Google settings.
            </Typography>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" sx={{ fontWeight: 800, mb: 2 }}>5. Rewards & Redemption</Typography>
            <Typography sx={{ color: '#6b7280', lineHeight: 1.8, mb: 2 }}>
              The App offers a points-based rewards system for completing educational tasks. Rewards may be redeemed for:
            </Typography>
            <Typography sx={{ color: '#6b7280', lineHeight: 1.8, mb: 2 }}>
              ✔ PayPal digital rewards<br/>
              ✔ Amazon digital gift cards
            </Typography>
            <Typography sx={{ color: '#6b7280', lineHeight: 1.8, mb: 2 }}>
              Rewards are:
            </Typography>
            <Typography sx={{ color: '#6b7280', lineHeight: 1.8, mb: 2 }}>
              • Subject to availability<br/>
              • Region dependent<br/>
              • Non-cash & non-transferable<br/>
              • Issued only after meeting minimum thresholds
            </Typography>
            <Typography sx={{ color: '#6b7280', lineHeight: 1.8, mb: 2 }}>
              We do not offer:
            </Typography>
            <Typography sx={{ color: '#6b7280', lineHeight: 1.8 }}>
              • Cash payouts<br/>
              • Bank withdrawals<br/>
              • Investment products<br/>
              • Loans or financial services
            </Typography>
            <Typography sx={{ color: '#6b7280', lineHeight: 1.8 }}>
              All third-party brand names (e.g., PayPal, Amazon) and logos are the property of their respective owners and are used for descriptive purposes only.
            </Typography>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" sx={{ fontWeight: 800, mb: 2 }}>6. Children's Privacy</Typography>
            <Typography sx={{ color: '#6b7280', lineHeight: 1.8 }}>
              The App is not designed for children under 13. We do not knowingly collect personal data from children. If we learn data was collected from a child, it will be deleted.
            </Typography>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" sx={{ fontWeight: 800, mb: 2 }}>7. Data Storage & Security</Typography>
            <Typography sx={{ color: '#6b7280', lineHeight: 1.8 }}>
              We use reasonable security measures to protect data from unauthorized access, modification, or disclosure. However, no system is 100% secure.
            </Typography>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" sx={{ fontWeight: 800, mb: 2 }}>8. Data Sharing</Typography>
            <Typography sx={{ color: '#6b7280', lineHeight: 1.8, mb: 2 }}>
              We do not sell personal data.
            </Typography>
            <Typography sx={{ color: '#6b7280', lineHeight: 1.8 }}>
              We may share data with: Third-party analytics/advertising providers, Reward fulfillment partners (if applicable), Legal authorities (only if legally required)
            </Typography>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" sx={{ fontWeight: 800, mb: 2 }}>9. User Rights</Typography>
            <Typography sx={{ color: '#6b7280', lineHeight: 1.8, mb: 2 }}>
              Depending on your region (GDPR/CCPA), you may request:
            </Typography>
            <Typography sx={{ color: '#6b7280', lineHeight: 1.8 }}>
              • Access to data<br/>
              • Deletion of data<br/>
              • Correction of data<br/>
              • Opt-out from personalization
            </Typography>
            <Typography sx={{ color: '#6b7280', lineHeight: 1.8 }}>
              Requests can be made through in-app support or email.
            </Typography>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" sx={{ fontWeight: 800, mb: 2 }}>10. Changes to This Policy</Typography>
            <Typography sx={{ color: '#6b7280', lineHeight: 1.8 }}>
              We may update this Privacy Policy occasionally. Continued use of the App implies acceptance of updated terms.
            </Typography>
          </Box>

          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" sx={{ fontWeight: 800, mb: 2 }}>11. Contact Us</Typography>
            <Typography sx={{ color: '#6b7280', lineHeight: 1.8 }}>
              If you have questions or concerns regarding this Privacy Policy or data handling practices, you may contact us at: Email: <Typography component="a" href="mailto:support@earnwatch.com" sx={{ color: '#6b7280', textDecoration: 'underline' }}>support@earnwatch.com</Typography>
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
