// Libraries
import { FormHelperText, FormLabel, TextField } from '@mui/material'
import { styled } from '@mui/material/styles'

const StyledTextField = styled(TextField)(({ theme, error }) => ({
  '& .MuiOutlinedInput-input': {
    resize: 'vertical',
    fontSize: theme.typography.h4.fontSize,
  },
  '& .MuiOutlinedInput-root:hover fieldset': {
    borderColor: error ? theme.palette.error.main : theme.palette.grey[400],
  },
  '& .MuiOutlinedInput-root.Mui-focused fieldset': {
    borderColor: error ? theme.palette.error.main : theme.palette.grey[400],
  },
  '& .MuiInputBase-input::placeholder': {
    opacity: 1,
    color: error ? theme.palette.error.main : theme.palette.grey[400],
    fontSize: theme.typography.h4.fontSize,
  },
  '& fieldset': {
    borderRadius: 0,
  },
}))

const StyledFormHelperText = styled(FormHelperText)(({ theme }) => ({
  marginTop: theme.spacing(0.3),
  marginLeft: 0,
  fontSize: theme.typography.body1.fontSize,
}))

const StyledFormLabel = styled(FormLabel)(({ theme }) => ({
  fontSize: theme.typography.h5.fontSize,
  color: theme.palette.common.black,
}))

export { StyledFormHelperText, StyledFormLabel, StyledTextField }
