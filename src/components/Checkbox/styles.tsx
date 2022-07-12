// libraries
import { Checkbox, CheckboxProps, FormControlLabel } from '@mui/material'
import { styled } from '@mui/system'

export const StyledFormControlLabel = styled(FormControlLabel)(({ theme }) => ({
  '.MuiFormControlLabel-label.Mui-disabled': {
    color: theme.palette.common.black,
  },
}))

interface ICheckboxProps extends CheckboxProps {
  isError?: boolean
}

export const StyledCheckbox = styled((props: ICheckboxProps) => <Checkbox {...props} />, {
  shouldForwardProp: (prop) => prop !== 'isError',
})(({ theme, isError }) => ({
  color: isError ? theme.palette.error.main : '#dedede',
  '&:hover': {
    backgroundColor: 'transparent',
  },
  '&.Mui-disabled': {
    opacity: 0.2,
  },
  '.MuiSvgIcon-root': {
    transform: 'scale(1.25)',
  },
  '&.Mui-checked': {
    color: theme.palette.primary.main,
  },
}))
