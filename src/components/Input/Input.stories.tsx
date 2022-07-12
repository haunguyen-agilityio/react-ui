//Libraries
import { ComponentStory, ComponentMeta } from '@storybook/react'

// Components
import Input from '../Input'

export default {
  title: 'Components/Input',
  component: Input,
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />

export const Primary = Template.bind({})
Primary.args = {
  label: 'Default',
  placeholder: 'Placeholder',
}

export const Disabled = Template.bind({})
Disabled.args = {
  label: 'Disabled',
  placeholder: 'Placeholder',
  isDisable: true,
}

export const Filled = Template.bind({})
Filled.args = {
  value: 'Placeholder',
  label: 'Filled',
  placeholder: 'Placeholder',
}

export const Error = Template.bind({})
Error.args = {
  value: 'Placeholder',
  label: 'Error',
  placeholder: 'Placeholder',
  isError: true,
  errorText: 'Required',
}
