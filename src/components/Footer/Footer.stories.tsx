//Libraries
import { ComponentStory, ComponentMeta } from '@storybook/react'

// Components
import Footer from '../Footer'

export default {
  title: 'Components/Footer',
  component: Footer,
} as ComponentMeta<typeof Footer>

const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />

export const Primary = Template.bind({})
Primary.args = {
  isDisabled: false,
  isSelected: false,
}

export const Disabled = Template.bind({})
Disabled.args = {
  isDisabled: true,
  isSelected: false,
}

export const Selected = Template.bind({})
Selected.args = {
  isDisabled: false,
  isSelected: true,
}
