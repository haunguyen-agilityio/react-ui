// libraries
import { render, fireEvent } from '@testing-library/react'
import * as renderer from 'react-test-renderer'
import { ThemeProvider } from '@mui/material/styles'

// components
import Button from '../Button'

// theme
import theme from '../../themes'

describe('Button component', () => {
  const onClick = jest.fn()

  const ButtonComponent = ({ disable = false }) => (
    <ThemeProvider theme={theme}>
      <Button text='Button' onClick={onClick} disable={disable} />
    </ThemeProvider>
  )

  test('It should matches snapshot', () => {
    const button = renderer.create(<ButtonComponent />).toJSON()
    expect(button).toMatchSnapshot()
  })

  test('It should render correctly', () => {
    const { getByText } = render(<ButtonComponent />)
    expect(getByText('Button')).toBeInTheDocument()
  })

  test('On click function should be called once when click button', () => {
    const { getByText } = render(<ButtonComponent />)
    fireEvent.click(getByText('Button'))
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  test('Button should be disabled', () => {
    const { getByText } = render(<ButtonComponent disable={true} />)
    expect(getByText('Button')).toBeDisabled()
  })
})
