// Libraries
import { screen, render } from '@testing-library/react'
import * as renderer from 'react-test-renderer'

// Components
import Footer from '../Footer'

describe('Footer', () => {
  const defaultProps = {}
  it('Component [Footer] matches DOM Snapshot', () => {
    const component = renderer.create(<Footer {...defaultProps} />)

    expect(component).toMatchSnapshot()
  })

  it('Component [Input] should render correctly', () => {
    render(<Footer {...defaultProps} />)

    expect(screen.getByTestId('supportButton')).toHaveTextContent('Support')
    expect(screen.getByTestId('privacyButton')).toHaveTextContent('Privacy Policy')
    expect(screen.getByTestId('termsButton')).toHaveTextContent('Terms of Service')
  })
})
