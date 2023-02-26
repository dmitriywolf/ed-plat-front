import Head from 'next/head';

import Intro from '@/components/Intro';

export default function Home() {
  // const n = 33;

  return (
    <>
      <Head>
        <title>Education App: Home</title>
      </Head>
      <Intro />
    </>
  );
}
