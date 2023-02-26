import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import { PATHS } from '@/common/constants';
import Link from '@/components/UI/Link';

export default function AuthMenu() {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
      <Link href={PATHS.login}>Log In</Link>
      <Button variant='contained' sx={{ textTransform: 'none' }} href={PATHS.signup}>
        Create free account
      </Button>
    </Box>
  );
}
