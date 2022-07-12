// Libraries
import React, { useState } from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Box } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'

// Themes
import theme from '../../themes'

// Components
import TextareaInput from '.'

export default {
  title: 'Components/TextareaInput',
  component: TextareaInput,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
} as ComponentMeta<typeof TextareaInput>

export const Playground: ComponentStory<typeof TextareaInput> = (args) => {
  const [value, setValue] = useState('')

  const handleOnChange = (value: string) => {
    setValue(value)
  }

  return <TextareaInput {...args} value={value} onChange={handleOnChange} />
}

export const All = () => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      rowGap: '20px',
    }}
  >
    <TextareaInput name='textarea-input-default' label='Default' value='' onChange={() => {}} />
    <TextareaInput
      name='textarea-input-error'
      label='Error'
      value=''
      onChange={() => {}}
      errorMessage='Required'
      error
    />
    <TextareaInput
      name='textarea-input-disabled'
      label='Disabled'
      value=''
      onChange={() => {}}
      disabled
    />
    <TextareaInput
      name='textarea-input-has-text'
      label='Has Text'
      value='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      onChange={() => {}}
    />
  </Box>
)

export const Default = () => (
  <TextareaInput name='textarea-input-default' label='Default' value='' onChange={() => {}} />
)

export const Error = () => (
  <TextareaInput
    name='textarea-input-error'
    label='Error'
    value=''
    onChange={() => {}}
    error
    errorMessage='Required'
  />
)

export const Disabled = () => (
  <TextareaInput
    name='textarea-input-disabled'
    label='Disabled'
    value=''
    onChange={() => {}}
    disabled
  />
)

export const HasText = () => (
  <TextareaInput
    name='textarea-input-has-text'
    label='Has Text'
    value='Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
    onChange={() => {}}
  />
)
export {}
