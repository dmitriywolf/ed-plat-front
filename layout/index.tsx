import Box from '@mui/material/Box';
import type { ReactNode } from 'react';

import Footer from '@/components/Footer';
import Header from '@/components/Header';

import classes from './styles';

type LayoutProps = { children?: ReactNode };

const Layout = (props: LayoutProps) => {
  return (
    <>
      <Header />
      <Box component='main' sx={classes.main}>
        {props.children}
      </Box>
      <Footer />
    </>
  );
};

export default Layout;
