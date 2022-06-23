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
      primary: '#1D1617',
      secondary: '#ADA4A5',
    },
    error: {
      main: '#fb4d00',
    },
    warning: {
      main: '#ff0000',
    },
  },
  typography: {
    fontFamily: 'Helvetica',
  },

});

// .storybook/YourTheme.js
