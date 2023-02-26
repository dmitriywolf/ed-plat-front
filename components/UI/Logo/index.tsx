import { Link, Typography } from '@mui/material';
import NextLink from 'next/link';

import { PATHS } from '@/common/constants';
import LogoIcon from '@/public/images/Logo.svg';

import classes from './styles';

export const Logo = (): JSX.Element => {
  return (
    <Link sx={classes.logoWrap} component={NextLink} href={PATHS.home} underline='none'>
      <LogoIcon />
      <Typography component='span' sx={classes.logoTitle}>
        Ed-Circle.
      </Typography>
    </Link>
  );
};
