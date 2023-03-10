import Container from '@mui/material/Container';
import Head from 'next/head';

import PageContainer from '@/components/UI/PageContainer';

export default function LoginPage() {
  return (
    <>
      <Head>
        <title>Education App: Login</title>
      </Head>
      <PageContainer>
        <Container>Login page</Container>
      </PageContainer>
    </>
  );
}
