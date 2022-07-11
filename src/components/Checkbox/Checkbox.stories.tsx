// libraries
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { ThemeProvider } from '@mui/material/styles'

// components
import Checkbox from '@components/Checkbox'

// themes
import theme from '@themes'

export default {
  component: Checkbox,
  title: 'Components/Checkbox',
} as ComponentMeta<typeof Checkbox>

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <ThemeProvider theme={theme}>
    <Checkbox {...args} />
  </ThemeProvider>
)

export const Default = Template.bind({})
Default.args = {
  label: 'Default',
  onChange: () => {},
}

export const Checked = Template.bind({})
Checked.args = {
  label: 'Default',
  isChecked: true,
  onChange: () => {},
}

export const Disabled = Template.bind({})
Disabled.args = {
  label: 'Disabled',
  onChange: () => {},
  disable: true,
}

export const Error = Template.bind({})
Error.args = {
  label: 'Error',
  onChange: () => {},
  isError: true,
}
