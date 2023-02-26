import { Box } from '@mui/material';
import type { ReactNode } from 'react';

import { Footer, Header } from '@/components';

import classes from './styles';

type LayoutProps = { children?: ReactNode };

export const Layout = (props: LayoutProps) => {
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
