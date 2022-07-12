// component
import Avatar, { AvatarProp } from '../Avatar'

// lib
import { fireEvent, render, screen } from '@testing-library/react'

describe('Test Avatar', () => {
  const defaultProps: AvatarProp = {
    image: './src/image.jpg',
    firstName: 'Jame',
    onClick: jest.fn(),
    sizeAvatar: 50,
    variant: 'circular',
    isEdit: false,
  }

  const customProps: AvatarProp = {
    image: './src/image.jpg',
    firstName: 'Jame',
    onClick: jest.fn(),
    sizeAvatar: 50,
    variant: 'circular',
    isEdit: true,
  }

  test('It should match DOM Snapshot', () => {
    const { container } = render(<Avatar {...defaultProps} />)

    expect(container).toMatchSnapshot()
  })

  test('It should render correctly', () => {
    render(<Avatar {...defaultProps} />)

    expect(screen.getByRole('img')).toBeInTheDocument()
  })

  test('It should call onClick Avatar', () => {
    render(<Avatar {...defaultProps} />)
    fireEvent.click(screen.getByRole('img'))

    expect(defaultProps.onClick).toHaveBeenCalled()
    expect(defaultProps.onClick).toHaveBeenCalledTimes(1)
  })

  test('It should call onClick Avatar Edit', () => {
    render(<Avatar {...customProps} />)
    fireEvent.click(screen.getByRole('img'))

    expect(customProps.onClick).toHaveBeenCalled()
    expect(customProps.onClick).toHaveBeenCalledTimes(1)
  })
})
