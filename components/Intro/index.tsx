import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import classes from './styles';

const Intro = () => {
  return (
    <Box component='section' sx={classes.introSection}>
      <Container>
        <Typography component='h1' variant='introTitle'>
          up your skills to advance your career path
        </Typography>
      </Container>
    </Box>
  );
};

export default Intro;
