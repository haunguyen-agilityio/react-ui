// Libraries
import { styled } from '@mui/system'
import TextField from '@mui/material/TextField'
import FormHelperText from '@mui/material/FormHelperText'

// Themes
import theme from '@themes'
import typography from '@themes/typography'

export const InputWrapper = styled('div')({
  padding: theme.spacing(2),
})

export const StyledFormHelperText = styled(FormHelperText)({
  color: theme.palette.error.main,
  fontSize: typography.body1.fontSize,
})

export const StyledTextField = styled(TextField)((props) => ({
  '& .MuiInputBase-input': {
    color: props.error ? theme.palette.error.main : theme.palette.text.primary,
  },
  ' .MuiOutlinedInput-root': {
    '& fieldset': {
      borderRadius: 0,
      padding: theme.spacing(0),
      borderColor: props.error ? theme.palette.error.main : theme.palette.grey[400],
      '&.MuiOutlinedInput-notchedOutline': {
        borderColor: props.error ? theme.palette.error.main : theme.palette.grey[400],
      },
    },
    '&:hover fieldset': {
      border: props.error
        ? `1px solid ${theme.palette.error.main}`
        : `1px solid ${theme.palette.grey[400]}`,
    },
    '&.Mui-focused fieldset': {
      borderColor: theme.palette.grey[400],
      border: props.error
        ? `1px solid ${theme.palette.error.main}`
        : `1px solid ${theme.palette.grey[400]}`,
    },
  },
}))
