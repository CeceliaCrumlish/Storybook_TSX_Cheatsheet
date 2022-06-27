import { createTheme } from '@mui/material/styles';
import { Paper } from "@mui/icons-material"

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
    fontFamily: 'sans-serif',
    h1:{
        align: "center", 
        weight: 600,
        size: "28px",
        height: "16.8px",
        lineHeight: "10px",

    },
    h4:{
        weight: 400,
        size: "12px",
        height: "16.8px",
        color: "#212121",
        lineHeight: "10px",

    },
  },
  /*note, if you are doing style overrides for components you need to use
  the keyword "components: and not just "overrides", because of the type 
  strictness of jsx or because createMuiTheme is deprecated*/
components: {
  MuiPaper: {

    styleOverrides: {
      root: {
        padding: "16px",
        borderBlockColor: '#FFFFFF',
        elevation: "1",
      },
    },
  },

}

});

