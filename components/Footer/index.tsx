import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

const Footer = () => {
  return (
    <Box component='footer' sx={{ backgroundColor: '#101828' }}>
      <Container>
        <Typography color='white'>Footer</Typography>
      </Container>
    </Box>
  );
};

export default Footer;
