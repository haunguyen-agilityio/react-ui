// Libraries
import React, { memo } from 'react'
import { FormControl } from '@mui/material'

// Styles
import { StyledFormHelperText, StyledFormLabel, StyledTextField } from './styles'

export interface ITextareaInputProps {
  name: string
  value: string
  label?: string
  placeholder?: string
  disabled?: boolean
  error?: boolean
  errorMessage?: string
  fullWidth?: boolean
  rows?: number
  onChange: (value: string) => void
}

const TextareaInput = ({
  name = 'textarea-input-name',
  value = '',
  label = '',
  placeholder = 'Enter something',
  disabled = false,
  error = false,
  errorMessage = '',
  fullWidth = true,
  rows = 5,
  onChange = () => {},
}: ITextareaInputProps) => {
  const handleOnChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(event.target.value)
  }

  return (
    <FormControl fullWidth={fullWidth} error={error}>
      {label && <StyledFormLabel disabled={disabled}>{label}</StyledFormLabel>}
      <StyledTextField
        name={name}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        onChange={handleOnChange}
        multiline
        rows={rows}
        error={error}
      />
      {error && <StyledFormHelperText>{errorMessage}</StyledFormHelperText>}
    </FormControl>
  )
}

export default memo(TextareaInput)
