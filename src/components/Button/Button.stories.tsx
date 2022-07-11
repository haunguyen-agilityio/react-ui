// libraries
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { ThemeProvider } from '@mui/material/styles'

// components
import Button from '@components/Button'

// theme
import theme from '@themes'

export default {
  component: Button,
  title: 'Components/Button',
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => (
  <ThemeProvider theme={theme}>
    <Button {...args} />
  </ThemeProvider>
)

export const Primary = Template.bind({})
Primary.args = {
  text: 'Button',
  color: 'primary',
}

export const DisabledPrimary = Template.bind({})
DisabledPrimary.args = {
  text: 'Button',
  color: 'primary',
  disable: true,
}

export const Secondary = Template.bind({})
Secondary.args = {
  text: 'Button',
  color: 'secondary',
}

export const DisabledSecondary = Template.bind({})
DisabledSecondary.args = {
  text: 'Button',
  color: 'secondary',
  disable: true,
}
