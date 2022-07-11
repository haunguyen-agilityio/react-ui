import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'

import ProfileDropdown from '@components/ProfileDropdown'

export default {
  title: 'Components/Dropdown',
  component: ProfileDropdown,
} as ComponentMeta<typeof ProfileDropdown>

const Template: ComponentStory<typeof ProfileDropdown> = (args) => <ProfileDropdown {...args} />

export const Primary = Template.bind({})
Primary.args = {
  isDisabled: false,
  isDisableGutters: false,
}

export const Secondary = Template.bind({})
Secondary.args = {
  isDisabled: false,
  isDisableGutters: true,
}

export const Disable = Template.bind({})
Disable.args = {
  isDisabled: true,
  isDisableGutters: true,
}
