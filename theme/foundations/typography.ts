import { Inter } from '@next/font/google';

export const inter = Inter({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Arial', 'sans-serif'],
});

export const typography = {
  fontFamily: inter.style.fontFamily,
  display: 'inline-block',
  width: '100%',
  // h1: {
  //   fontSize: '22px',
  //   lineHeight: 22 / 22 + 'em',
  //   fontWeight: 600,
  // },
  // h3: {
  //   fontSize: '20px',
  //   lineHeight: 29 / 24 + 'em',
  //   fontWeight: 200,
  // },
};
