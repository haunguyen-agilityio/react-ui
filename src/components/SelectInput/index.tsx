// Libraries
import React, { ReactNode } from 'react'
import { SelectChangeEvent, FormControl } from '@mui/material'
import { ArrowDropDown, KeyboardArrowDown } from '@mui/icons-material'

// Styles
import { StyledFormHelperText, StyledFormLabel, StyledSelect } from './styles'

export interface ISelectOptionProps {
  label: string
  value: string
  source?: string
}

export interface ISelectInputProps {
  value: string
  name: string
  label?: string
  error?: boolean
  labelId?: string
  fullWidth?: boolean
  defaultValue?: string
  disabled?: boolean
  errorMessage?: string
  size?: 'medium' | 'small'
  selectVariant?: 'normal' | 'asset'
  arrowIcon?: 'primary' | 'secondary'
  children: ReactNode
  onChange: (value: string) => void
}

const SelectInput = ({
  value = '',
  label = '',
  name = 'select-input-name',
  error = false,
  labelId = 'select-input-labelid',
  fullWidth = true,
  defaultValue = '',
  disabled = false,
  errorMessage = '',
  size = 'medium',
  selectVariant = 'normal',
  arrowIcon = 'primary',
  children = <></>,
  onChange = () => {},
}: ISelectInputProps) => {
  const handleChange = (event: SelectChangeEvent<unknown>) => {
    onChange(event.target.value as string)
  }

  return (
    <FormControl fullWidth={fullWidth} disabled={disabled} error={error}>
      {label && (
        <StyledFormLabel id={labelId} error={error}>
          {label}
        </StyledFormLabel>
      )}
      <StyledSelect
        value={value}
        labelId={labelId}
        defaultValue={defaultValue}
        displayEmpty
        onChange={handleChange}
        disabled={disabled}
        name={name}
        size={size}
        error={error}
        IconComponent={arrowIcon === 'primary' ? ArrowDropDown : KeyboardArrowDown}
        selectVariant={selectVariant}
      >
        {children}
      </StyledSelect>
      {error && <StyledFormHelperText error={error}>{errorMessage}</StyledFormHelperText>}
    </FormControl>
  )
}

export default SelectInput
