// Libraries
import { useState } from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Box, MenuItem, Typography } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'

// Themes
import theme from '../../themes'

// Components
import SelectInput, { ISelectOptionProps } from '.'

const mockOptions: ISelectOptionProps[] = [
  {
    label: 'Option 1',
    value: 'option1',
  },
  {
    label: 'Option 2',
    value: 'option2',
  },
  {
    label: 'Option 3',
    value: 'option3',
  },
]

const mockAssetOptions: ISelectOptionProps[] = [
  {
    label: 'All',
    value: 'all',
  },
  {
    label: 'Bitcoin',
    value: 'bitcoin',
    source: '/icons/coins/bitcoin.svg',
  },
  {
    label: 'Ethereum',
    value: 'ethereum',
    source: '/icons/coins/ethereum.svg',
  },
  {
    label: 'Ripple',
    value: 'ripple',
    source: '/icons/coins/ripple.svg',
  },
  {
    label: 'Bitcoin Cash',
    value: 'bitcoin-cash',
    source: '/icons/coins/bitcoin-cash.svg',
  },
  {
    label: 'Litecoin',
    value: 'litecoin',
    source: '/icons/coins/litecoin.svg',
  },
]

const renderAssetOptions = mockAssetOptions.map(({ label, value, source }: ISelectOptionProps) => (
  <MenuItem key={value} value={value}>
    {source && (
      <Box className='asset-icon'>
        {/* <Image width={30} height={30} alt={label} src={source} /> */}
      </Box>
    )}
    <Typography className='asset-name'>{label}</Typography>
  </MenuItem>
))

const renderOptions = mockOptions.map((option: ISelectOptionProps) => (
  <MenuItem key={option.value} value={option.value}>
    {option.label}
  </MenuItem>
))

export default {
  title: 'Components/SelectInput',
  component: SelectInput,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
} as ComponentMeta<typeof SelectInput>

export const Playground: ComponentStory<typeof SelectInput> = (args) => {
  const [value, setValue] = useState('')

  const handleOnChange = (value: string) => {
    setValue(value)
  }

  return (
    <SelectInput {...args} value={value} onChange={handleOnChange}>
      {args.selectVariant === 'asset' ? renderAssetOptions : renderOptions}
    </SelectInput>
  )
}

export const All = () => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      rowGap: '20px',
    }}
  >
    <SelectInput name='select-input-default' label='Default' value='' onChange={() => {}}>
      <MenuItem value=''>Default Value</MenuItem>
      {renderOptions}
    </SelectInput>
    <SelectInput
      name='select-input-error'
      label='Error'
      value=''
      onChange={() => {}}
      errorMessage='Required'
      error
    >
      <MenuItem value=''>Default Value</MenuItem>
      {renderOptions}
    </SelectInput>
    <SelectInput
      name='select-input-disabled'
      label='Disabled'
      value=''
      onChange={() => {}}
      disabled
    >
      <MenuItem value=''>Default Value</MenuItem>
      {renderOptions}
    </SelectInput>
    <SelectInput
      name='select-input-selected'
      label='Selected An Option'
      value='option1'
      onChange={() => {}}
    >
      {renderOptions}
    </SelectInput>
    <SelectInput
      name='small-select-input-default'
      label='Default Small'
      value=''
      onChange={() => {}}
      arrowIcon='secondary'
      size='small'
    >
      <MenuItem value=''>Default Value</MenuItem>
      {renderOptions}
    </SelectInput>
    <SelectInput
      name='small-select-input-error'
      label='Error Small'
      value=''
      onChange={() => {}}
      errorMessage='Required'
      error
      arrowIcon='secondary'
      size='small'
    >
      <MenuItem value=''>Default Value</MenuItem>
      {renderOptions}
    </SelectInput>
    <SelectInput
      name='small-select-input-disabled'
      label='Disabled Small'
      value=''
      onChange={() => {}}
      disabled
      arrowIcon='secondary'
      size='small'
    >
      <MenuItem value=''>Default Value</MenuItem>
      {renderOptions}
    </SelectInput>
    <SelectInput
      name='small-select-input-selected'
      label='Selected An Option Small'
      value='option1'
      onChange={() => {}}
      arrowIcon='secondary'
      size='small'
    >
      {renderOptions}
    </SelectInput>
    <SelectInput
      name='asset-select-input-selected'
      label='Selected An Option (Asset)'
      value='bitcoin'
      onChange={() => {}}
      arrowIcon='secondary'
      selectVariant='asset'
    >
      {renderAssetOptions}
    </SelectInput>
    <SelectInput
      name='small-asset-select-input-default'
      label='Default An Option Small (Asset)'
      value=''
      onChange={() => {}}
      arrowIcon='secondary'
      selectVariant='asset'
      size='small'
    >
      <MenuItem value=''>Default Value</MenuItem>
      {renderAssetOptions}
    </SelectInput>
    <SelectInput
      name='small-asset-select-input-selected'
      label='Selected An Option Small (Asset)'
      value='bitcoin'
      onChange={() => {}}
      arrowIcon='secondary'
      selectVariant='asset'
      size='small'
    >
      {renderAssetOptions}
    </SelectInput>
  </Box>
)

export const Default = () => (
  <SelectInput name='select-input-default' label='Default' value='' onChange={() => {}}>
    <MenuItem value=''>Default Value</MenuItem>
    {renderOptions}
  </SelectInput>
)

export const Error = () => (
  <SelectInput
    name='select-input-error'
    label='Error'
    value=''
    onChange={() => {}}
    errorMessage='Required'
    error
  >
    <MenuItem value=''>Default Value</MenuItem>
    {renderOptions}
  </SelectInput>
)

export const Disabled = () => (
  <SelectInput name='select-input-disabled' label='Disabled' value='' onChange={() => {}} disabled>
    <MenuItem value=''>Default Value</MenuItem>
    {renderOptions}
  </SelectInput>
)

export const SelectedAnOption = () => (
  <SelectInput
    name='select-input-selected'
    label='Selected An Option'
    value='option1'
    onChange={() => {}}
  >
    {renderOptions}
  </SelectInput>
)

export const DefaultSmall = () => (
  <SelectInput
    name='small-select-input-default'
    label='Default Small'
    value=''
    onChange={() => {}}
    arrowIcon='secondary'
    size='small'
  >
    <MenuItem value=''>Default Value</MenuItem>
    {renderOptions}
  </SelectInput>
)

export const ErrorSmall = () => (
  <SelectInput
    name='small-select-input-error'
    label='Error Small'
    value=''
    onChange={() => {}}
    errorMessage='Required'
    error
    arrowIcon='secondary'
    size='small'
  >
    <MenuItem value=''>Default Value</MenuItem>
    {renderOptions}
  </SelectInput>
)

export const DisabledSmall = () => (
  <SelectInput
    name='small-select-input-disabled'
    label='Disabled Small'
    value=''
    onChange={() => {}}
    disabled
    arrowIcon='secondary'
    size='small'
  >
    <MenuItem value=''>Default Value</MenuItem>
    {renderOptions}
  </SelectInput>
)

export const SelectedAnOptionSmall = () => (
  <SelectInput
    name='small-select-input-selected'
    label='Selected An Option Small'
    value='option1'
    onChange={() => {}}
    arrowIcon='secondary'
    size='small'
  >
    {renderOptions}
  </SelectInput>
)

export const SelectAssetOption = () => (
  <SelectInput
    name='asset-select-input-selected'
    label='Selected An Option (Asset)'
    value='bitcoin'
    onChange={() => {}}
    arrowIcon='secondary'
    selectVariant='asset'
  >
    {renderAssetOptions}
  </SelectInput>
)

export const DefaultAssetOptionSmall = () => (
  <SelectInput
    name='small-asset-select-input-default'
    label='Default An Option Small (Asset)'
    value=''
    onChange={() => {}}
    arrowIcon='secondary'
    selectVariant='asset'
    size='small'
  >
    <MenuItem value=''>Default Value</MenuItem>
    {renderAssetOptions}
  </SelectInput>
)

export const SelectAssetOptionSmall = () => (
  <SelectInput
    name='small-asset-select-input-selected'
    label='Selected An Option Small (Asset)'
    value='bitcoin'
    onChange={() => {}}
    arrowIcon='secondary'
    selectVariant='asset'
    size='small'
  >
    {renderAssetOptions}
  </SelectInput>
)
