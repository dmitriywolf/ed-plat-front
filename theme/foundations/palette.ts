import { PaletteOptions } from '@mui/material';

declare module '@mui/material/styles' {
  interface Palette {
    link: Palette['primary'];
    violetRed: Palette['primary'];
    skyBlue: Palette['primary'];
    royalBlue: Palette['primary'];
    seaGreen: Palette['primary'];
    basicPurple: Palette['grey'];
    basicSecondary: Palette['grey'];
  }

  interface PaletteOptions {
    link?: PaletteOptions['primary'];
    violetRed?: PaletteOptions['primary'];
    skyBlue?: PaletteOptions['primary'];
    royalBlue?: PaletteOptions['primary'];
    seaGreen?: PaletteOptions['primary'];
    basicPurple?: PaletteOptions['grey'];
    basicSecondary?: PaletteOptions['grey'];
  }
}

export const palette: PaletteOptions = {
  text: {
    primary: '#101828',
    secondary: '#646464',
  },
  primary: {
    main: '#6941C6',
  },
  secondary: {
    main: '#344054',
  },
  // custom colors
  link: {
    main: '#026AA2',
  },
  violetRed: {
    main: '#C11574',
    light: '#FDF2FA',
  },
  skyBlue: {
    main: '#026AA2',
    light: '#F0F9FF',
  },
  royalBlue: {
    main: '#3538CD',
    light: '#EEF4FF',
  },
  seaGreen: {
    main: '#027A48',
    light: '#ECFDF3',
  },
  basicPurple: {
    50: '#F9F5FF',
    100: '#F4EBFF',
    200: '#E9D7FE',
    300: '#D6BBFB',
    400: '#B692F6',
    500: '#9E77ED',
    600: '#7F56D9',
    700: '#6941C6',
    800: '#53389E',
    900: '#42307D',
  },
  basicSecondary: {
    50: '#F9FAFB',
    100: '#F2F4F7',
    200: '#EAECF0',
    300: '#D0D5DD',
    400: '#98A2B3',
    500: '#667085',
    600: '#475467',
    700: '#344054',
    800: '#1D2939',
    900: '#101828',
  },
};
