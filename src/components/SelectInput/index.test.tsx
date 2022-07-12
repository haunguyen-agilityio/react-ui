// Libraries
import renderer from 'react-test-renderer'
import { fireEvent, render } from '@testing-library/react'
import { ThemeProvider } from '@mui/material/styles'
import { MenuItem, Typography, Box } from '@mui/material'

// Themes
import theme from '../../themes'

// Components
import SelectInput, { ISelectInputProps, ISelectOptionProps } from '.'

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

const renderOptions = mockOptions.map((option: ISelectOptionProps) => (
  <MenuItem key={option.value} value={option.value}>
    {option.label}
  </MenuItem>
))

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

describe('SelectInput', () => {
  const componentProps: ISelectInputProps = {
    name: 'test-select-input-name',
    labelId: 'test-select-input-labelid',
    onChange: jest.fn(),
    value: '',
    children: renderOptions,
  }
  const ThemedComponent = (props: ISelectInputProps) => (
    <ThemeProvider theme={theme}>
      <SelectInput {...props} />
    </ThemeProvider>
  )

  test('It should match DOM Snapshot when value is not empty', () => {
    const component = renderer
      .create(<ThemedComponent {...componentProps} value='option1' />)
      .toJSON()
    expect(component).toMatchSnapshot()
  })

  test('It should match DOM Snapshot when value is empty', () => {
    const component = renderer.create(<ThemedComponent {...componentProps} />).toJSON()
    expect(component).toMatchSnapshot()
  })

  test('It should match DOM Snapshot when error', () => {
    const component = renderer
      .create(<ThemedComponent {...componentProps} error errorMessage='Required' />)
      .toJSON()
    expect(component).toMatchSnapshot()
  })

  test('It should match DOM Snapshot when not full width', () => {
    const component = renderer
      .create(<ThemedComponent {...componentProps} fullWidth={false} />)
      .toJSON()
    expect(component).toMatchSnapshot()
  })

  test('It should match DOM Snapshot when select variant is asset select', () => {
    const component = renderer
      .create(
        <ThemedComponent {...componentProps} selectVariant='asset'>
          {renderAssetOptions}
        </ThemedComponent>,
      )
      .toJSON()
    expect(component).toMatchSnapshot()
  })

  test('It should match DOM Snapshot when small size', () => {
    const component = renderer.create(<ThemedComponent {...componentProps} size='small' />).toJSON()
    expect(component).toMatchSnapshot()
  })

  test('It should match DOM Snapshot when use secondary icon', () => {
    const component = renderer
      .create(<ThemedComponent {...componentProps} arrowIcon='secondary' />)
      .toJSON()
    expect(component).toMatchSnapshot()
  })

  test('It can be disabled', () => {
    const { getByDisplayValue } = render(
      <ThemedComponent {...componentProps} value='option1' disabled />,
    )
    expect(getByDisplayValue('option1')).toBeDisabled()
  })

  test('It has label', () => {
    const { getByText } = render(<ThemedComponent {...componentProps} label='Select label' />)
    expect(getByText('Select label')).toBeTruthy()
  })

  test('It triggers handleOnChange function when select an option', () => {
    const { getByDisplayValue } = render(<ThemedComponent {...componentProps} value='option1' />)
    fireEvent.change(getByDisplayValue('option1'), {
      target: { value: 'option2' },
    })
    expect(componentProps.onChange).toHaveBeenCalledTimes(1)
  })
})
