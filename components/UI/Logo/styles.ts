import { Theme } from '@mui/material';

const logoWrap = {
  display: 'flex',
  maxWidth: 160,
  alignItems: 'center',
  gap: 1.25,
  cursor: 'pointer',
  color: (theme: Theme) => theme.palette.text.primary,
  '&:hover': {
    color: (theme: Theme) => theme.palette.link.main,
  },
};

const logoTitle = {
  fontSize: '1.25rem',
  fontWeight: 700,
  lineHeight: 1.2,
};

const classes = { logoWrap, logoTitle };

export default classes;
