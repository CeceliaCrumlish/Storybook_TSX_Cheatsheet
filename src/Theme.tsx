import { createTheme } from '@mui/material/styles';

export const OurTheme = createTheme({
  palette: {
    primary: {
      main: '#F89365',
      dark: '#a8bac4',
      contrastText: 'rgba(253,253,253,0.87)',
    },
    secondary: {
      main: '#f7cebb',
      contrastText: '#F89365',
      light: '#ffffff',
      dark: '#F89365',
    },
    background: {
      default: '#f5f5f5',
    },
    success: {
      main: '#72D456',
      dark: '#8EE4DA',
    },
    text: {
      secondary: '#7E7E7E',
    },
    error: {
      main: '#fb4d00',
    },
    warning: {
      main: '#ff0000',
    },
  },
  typography: {
    fontFamily: '"Poppins"',
  },
});

// .storybook/YourTheme.js
