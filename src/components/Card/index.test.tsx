import '@testing-library/jest-dom'
import * as renderer from 'react-test-renderer'
import Card from '.'

describe('Card', () => {
  it('Component [Card] matches DOM Snapshot', () => {
    const component = renderer.create(<Card />)
    expect(component).toMatchSnapshot()
  })
})
