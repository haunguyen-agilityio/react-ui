// libraries
import { render, fireEvent } from '@testing-library/react'
import * as renderer from 'react-test-renderer'
import { ThemeProvider } from '@mui/material/styles'

// theme
import theme from '../../themes'

// components
import Checkbox from '../Checkbox'

describe('Check box component', () => {
  const onChange = jest.fn()

  const CheckboxComponent = ({ disable = false, isChecked = false }) => (
    <ThemeProvider theme={theme}>
      <Checkbox label='Default' onChange={onChange} disable={disable} isChecked={isChecked} />
    </ThemeProvider>
  )

  test('It should matches snapshot', () => {
    const checkbox = renderer.create(<CheckboxComponent />).toJSON()
    expect(checkbox).toMatchSnapshot()
  })

  test('It should render correctly', () => {
    const { getByText } = render(<CheckboxComponent />)
    expect(getByText('Default')).toBeInTheDocument()
  })

  test('On click function should be called once when check the checkbox', () => {
    const { getByRole } = render(<CheckboxComponent />)
    fireEvent.click(getByRole('checkbox'))
    expect(onChange).toHaveBeenCalledTimes(1)
  })

  test('Input should be disable', () => {
    const { getByRole } = render(<CheckboxComponent disable={true} />)
    expect(getByRole('checkbox')).toBeDisabled()
  })

  test('Input should not be checked by default', () => {
    const { getByRole } = render(<CheckboxComponent />)
    expect(getByRole('checkbox')).toHaveProperty('checked', false)
  })

  test('Input should be checked', () => {
    const { getByRole } = render(<CheckboxComponent isChecked={true} />)
    expect(getByRole('checkbox')).toHaveProperty('checked', true)
  })
})
