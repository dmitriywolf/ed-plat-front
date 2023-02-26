import { Theme } from '@mui/material';

const logoWrap = {
  display: 'flex',
  maxWidth: '160px',
  alignItems: 'center',
  gap: '10px',
  cursor: 'pointer',
  color: (theme: Theme) => theme.palette.text.primary,
  '&:hover': {
    color: (theme: Theme) => theme.palette.link.dark,
  },
};

const logoTitle = {
  fontSize: '1.25rem',
  fontWeight: 'bold',
  lineHeight: 1.2,
};

const classes = { logoWrap, logoTitle };

export default classes;
