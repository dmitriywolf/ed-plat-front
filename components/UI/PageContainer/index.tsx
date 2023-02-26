import Box from '@mui/material/Box';

export default function PageContainer(props: any) {
  return <Box sx={{ paddingTop: 12.5 }}>{props.children}</Box>;
}
