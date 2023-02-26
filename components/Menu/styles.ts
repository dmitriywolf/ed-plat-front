import { Theme } from '@mui/material';

const nav = {
  display: 'flex',
  gap: 3,
};

const menuLink = {
  '&:hover': {
    color: (theme: Theme) => theme.palette.link.main,
  },

  '&.active': {
    color: (theme: Theme) => theme.palette.secondary.main,
  },
};

const classes = { nav, menuLink };

export default classes;
