import { createTheme } from '@mui/material';

// import { components } from '@/theme/components';
import { foundations } from '@/theme/foundations';

// Create a theme instance.
const theme = createTheme({
  ...foundations,
  // components: {
  //   ...components,
  // },
});

export default theme;
