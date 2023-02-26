import MaterialUILink from '@mui/material/Link';
import NextLink from 'next/link';

const Link = (props: any) => {
  return (
    <MaterialUILink component={NextLink} underline='none' {...props}>
      {props.children}
    </MaterialUILink>
  );
};

export default Link;
