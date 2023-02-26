import Container from '@mui/material/Container';
import Head from 'next/head';

import PageContainer from '@/components/UI/PageContainer';

export default function InstructorsPage() {
  return (
    <>
      <Head>
        <title>Instructors</title>
      </Head>
      <PageContainer>
        <Container>Instructors page</Container>
      </PageContainer>
    </>
  );
}
