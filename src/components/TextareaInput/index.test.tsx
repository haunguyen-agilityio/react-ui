// Libraries
import { fireEvent, render } from '@testing-library/react'
import { ThemeProvider } from '@mui/material/styles'

// Themes
import theme from '../../themes'

// Components
import TextareaInput, { ITextareaInputProps } from '.'

describe('TextareaInput', () => {
  const componentProps: ITextareaInputProps = {
    name: 'test-textarea-name',
    onChange: jest.fn(),
    value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  }
  const ThemedComponent = (props: ITextareaInputProps) => (
    <ThemeProvider theme={theme}>
      <TextareaInput {...props} />
    </ThemeProvider>
  )

  test('It should match DOM Snapshot when value is not empty', () => {
    const { asFragment } = render(<ThemedComponent {...componentProps} />)
    expect(asFragment()).toMatchSnapshot()
  })

  test('It should match DOM Snapshot when value is empty', () => {
    const { asFragment } = render(<ThemedComponent {...componentProps} />)
    expect(asFragment()).toMatchSnapshot()
  })

  test('It should match DOM Snapshot when error', () => {
    const { asFragment } = render(
      <ThemedComponent {...componentProps} error errorMessage='Required' />,
    )
    expect(asFragment()).toMatchSnapshot()
  })

  test('It should match DOM Snapshot when not full width', () => {
    const { asFragment } = render(<ThemedComponent {...componentProps} fullWidth={false} />)
    expect(asFragment()).toMatchSnapshot()
  })

  test('It should has placeholder', () => {
    const { getByPlaceholderText } = render(
      <ThemedComponent {...componentProps} value='' placeholder='Enter something' />,
    )
    expect(getByPlaceholderText('Enter something')).toBeTruthy()
  })

  test('It can be disabled', () => {
    const { getByDisplayValue } = render(<ThemedComponent {...componentProps} disabled />)
    expect(
      getByDisplayValue('Lorem ipsum dolor sit amet, consectetur adipiscing elit.'),
    ).toBeDisabled()
  })

  test('It should has label', () => {
    const { getByText } = render(<ThemedComponent {...componentProps} label='Textarea label' />)
    expect(getByText('Textarea label')).toBeTruthy()
  })

  test('It should trigger handleOnChange function when value changes', () => {
    const { getByDisplayValue } = render(<ThemedComponent {...componentProps} />)
    fireEvent.change(
      getByDisplayValue('Lorem ipsum dolor sit amet, consectetur adipiscing elit.'),
      { target: { value: 'Textarea value' } },
    )
    expect(componentProps.onChange).toHaveBeenCalledTimes(1)
  })
})
