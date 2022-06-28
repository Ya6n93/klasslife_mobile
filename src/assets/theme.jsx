import {extendTheme} from 'native-base';

export const theme = extendTheme({
  colors: {
    // Add new color
    primary: {
      50: '#55BFC9',
      600: '#159e81',
      700: '#08715c',
      800: '#004537',
      900: '#001911',
    },
    // Redefinig only one shade, rest of the color will remain same.
    secondary: {
      400: '#FFFF',
    },
    common: {
      grey: '#A1A1A1',
      black: '#000000',
      lightGrey: '#DCDCDC',
      white: '#FFFFFF',
    },
  },
  config: {
    // Changing initialéMode to 'dark'
    initialColorMode: 'light',
  },
});
