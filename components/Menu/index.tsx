import Box from '@mui/material/Box';
import { useRouter } from 'next/router';

import { MAIN_ROUTES } from '@/common/routes';
import Link from '@/components/UI/Link';

import classes from './styles';

export default function Menu() {
  const router = useRouter();

  return (
    <Box component='nav' sx={classes.nav}>
      {MAIN_ROUTES.map(({ path, title }) => (
        <Link
          key={title}
          href={path}
          sx={classes.menuLink}
          variant='link'
          className={router?.asPath === path ? 'active' : ''}
        >
          {title}
        </Link>
      ))}
    </Box>
  );
}
