import { colors } from '@mui/material'
import { createTheme } from '@mui/material/styles'
import typography from './typography'

// Create a theme instance.
const theme = createTheme({
  palette: {
    text: {
      primary: colors.common.black,
      secondary: '#21d083',
    },
    background: {
      default: '#f9f9f9',
      paper: colors.common.white,
    },
    grey: {
      500: '#333', // bg for header/footer
    },
    info: {
      main: '#bbb', // title column, holding number
    },
    primary: {
      main: '#21d083',
    },
  },
  spacing: 10,
  typography,
})

export default theme
