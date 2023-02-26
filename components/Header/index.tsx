import { Box, Container } from '@mui/material';
import React from 'react';

import { Logo } from '@/components/UI';

import classes from './styles';

export const Header = () => {
  return (
    <Box component='header' sx={classes.header}>
      <Container>
        <Box>
          <Logo />
        </Box>
      </Container>
    </Box>
  );
};
