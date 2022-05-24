import { red } from '@mui/material/colors'
import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    primary: {
      main: '#666666',
    },
    secondary: {
      main: '#4169e1',
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: 'Noto Sans JP, sans-serif',
  },
})

export default theme
