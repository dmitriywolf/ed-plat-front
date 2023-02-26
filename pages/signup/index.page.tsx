import Container from '@mui/material/Container';
import Head from 'next/head';

import PageContainer from '@/components/UI/PageContainer';

export default function SignupPage() {
  return (
    <>
      <Head>
        <title>Education App: Signup</title>
      </Head>
      <PageContainer>
        <Container>signup page</Container>
      </PageContainer>
    </>
  );
}
