import type { ReactNode } from 'react';

import { Footer, Header } from '@/components';

type LayoutProps = { children?: ReactNode };

export const Layout = (props: LayoutProps) => {
  return (
    <>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </>
  );
};
