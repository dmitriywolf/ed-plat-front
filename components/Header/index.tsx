import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import Logo from '@/components/UI/Logo';

import classes from './styles';

const Header = () => {
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

export default Header;
