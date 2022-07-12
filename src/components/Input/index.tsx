// Libraries
import Typography from '@mui/material/Typography'

// Styles
import { StyledTextField, InputWrapper } from './styles'
import { StyledFormHelperText } from './styles'

// Themes
import theme from '../../themes'

enum TypeCategory {
  Number = 'number',
  Text = 'text',
  Password = 'password',
  Search = 'search',
}

export interface IInputProps {
  value: string
  label: string
  placeholder: string
  isDisable?: boolean
  isError?: boolean
  errorText?: string
  textFieldTypes?: TypeCategory
  onChange: () => void
}

const Input = ({
  value = '',
  label = '',
  placeholder = '',
  isError = false,
  isDisable = false,
  errorText = '',
  textFieldTypes = TypeCategory.Text,
  onChange = () => {},
}: IInputProps) => {
  return (
    <InputWrapper>
      <Typography
        data-testid='title'
        variant='subtitle2'
        color={isError ? theme.palette.error.main : isDisable ? `${theme.palette.grey[400]}` : ''}
      >
        {label}
      </Typography>
      <StyledTextField
        data-testid='input'
        fullWidth
        type={textFieldTypes}
        error={isError}
        disabled={isDisable}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
      <StyledFormHelperText data-testid='errorMessage'>{errorText}</StyledFormHelperText>
    </InputWrapper>
  )
}
export default Input
