import Container from '@mui/material/Container';
import Head from 'next/head';

import PageContainer from '@/components/UI/PageContainer';

export default function BlogPage() {
  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>
      <PageContainer>
        <Container>Blog page</Container>
      </PageContainer>
    </>
  );
}
