import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import AuthMenu from '@/components/AuthMenu';
import Menu from '@/components/Menu';
import Logo from '@/components/UI/Logo';

import classes from './styles';

const Header = () => {
  return (
    <Box component='header' sx={classes.header}>
      <Container>
        <Box sx={classes.headerInner}>
          <Logo />
          <Menu />
          <AuthMenu />
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
