import { screen, render } from '@testing-library/react'
import * as renderer from 'react-test-renderer'
import ProfileDropdown from '../ProfileDropdown'

describe('Dropdown', () => {
  it('Component [ProfileDropdown] matches DOM Snapshot', () => {
    const component = renderer.create(
      <ProfileDropdown isDisableGutters={false} isDisabled={false} />,
    )
    expect(component).toMatchSnapshot()
  })

  it('Component [Dropdown] should render correctly content', () => {
    render(<ProfileDropdown isDisableGutters={false} isDisabled={false} />)

    expect(screen.getByText('Hello, world')).toBeInTheDocument()
    expect(screen.getByText('Address')).toBeInTheDocument()
    expect(screen.getByText('Documents')).toBeInTheDocument()
    expect(screen.getByText('Profile Settings')).toBeInTheDocument()
    expect(screen.getByText('Log out')).toBeInTheDocument()
  })
})
