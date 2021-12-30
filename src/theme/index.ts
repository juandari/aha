import { ThemeProvider, createTheme, withStyles } from '@mui/material/styles'

const theme = createTheme({
  typography: {
    fontFamily: ['Ubuntu', '"Open Sans"', 'sans-serif'].join(','),
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1440,
    },
  },
  palette: {
    background: {
      default: '#121212',
    },
    primary: {
      main: '#121212',
      light: '#FFFFFF',
    },
    secondary: {
      main: '#FF9B33',
      dark: '#FF5C01',
      light: '#FFD25F',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Ubuntu';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
        }
      `,
    },
  },
})

export { theme, ThemeProvider, withStyles }
