// Libraries
import { screen, render } from '@testing-library/react'
import * as renderer from 'react-test-renderer'

// Components
import Input from '@components/Input/index'

describe('Input', () => {
  const defaultProps = {
    value: '',
    label: 'Number',
    placeholder: 'Please input number',
    onChange: () => {},
  }
  it('Component [Input] matches DOM Snapshot', () => {
    const component = renderer.create(<Input {...defaultProps} />)

    expect(component).toMatchSnapshot()
  })

  it('Component [Input] should render correctly', () => {
    render(<Input {...defaultProps} />)

    expect(screen.getByTestId('title')).toHaveTextContent('Number')
    expect(screen.getByPlaceholderText('Please input number')).toBeTruthy()
  })
})
