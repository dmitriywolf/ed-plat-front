import Typography from '@mui/material/Typography';

import { PATHS } from '@/common/constants';
import Link from '@/components/UI/Link';
import LogoIcon from '@/public/images/Logo.svg';

import classes from './styles';

const Logo = (): JSX.Element => {
  return (
    <Link sx={classes.logoWrap} href={PATHS.home}>
      <LogoIcon />
      <Typography component='span' sx={classes.logoTitle}>
        Ed-Circle.
      </Typography>
    </Link>
  );
};

export default Logo;
