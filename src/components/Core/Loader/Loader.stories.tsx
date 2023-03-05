/* eslint-disable @typescript-eslint/consistent-type-assertions */
import React from 'react'
import { type ComponentStory, type ComponentMeta } from '@storybook/react'

import { Loader } from './Loader'

export default {
  title: 'Components/Core/Loader',
  component: Loader,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Loader>

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />

export const Ripple = Template.bind({})
Ripple.args = {
  type: 'ripple'
}

export const Spinner = Template.bind({})
Spinner.args = {
  type: 'spinner'

}
