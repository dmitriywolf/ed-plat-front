import Container from '@mui/material/Container';
import Head from 'next/head';

import PageContainer from '@/components/UI/PageContainer';

export default function CoursesPage() {
  return (
    <>
      <Head>
        <title>Courses</title>
      </Head>
      <PageContainer>
        <Container>Courses page</Container>
      </PageContainer>
    </>
  );
}
