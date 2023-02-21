import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Head from 'next/head';
import * as React from 'react';

import Copyright from '@/components/Copyright';
import Link from '@/components/Link';
import ProTip from '@/components/ProTip';

export default function Home() {
  // const n = 33;

  return (
    <>
      <Head>
        <title>Education App: Home</title>
      </Head>
      <Container maxWidth='lg'>
        <Box
          sx={{
            my: 4,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography variant='h4' component='h1' gutterBottom>
            Material UI - Next.js example in TypeScript
          </Typography>
          <Link href='/about' color='secondary'>
            wfwegweiuwegiwhgoweighweo;ghw;gow
          </Link>
          <ProTip />
          <Copyright />
        </Box>
      </Container>
    </>
  );
}
