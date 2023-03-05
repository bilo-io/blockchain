/* eslint-disable @typescript-eslint/consistent-type-assertions */
import React from 'react'
import { type ComponentStory, type ComponentMeta } from '@storybook/react'

import { AssetIcon } from './AssetIcon'

export default {
  title: 'Components/Core/AssetIcon',
  component: AssetIcon,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof AssetIcon>

const Template: ComponentStory<typeof AssetIcon> = (args) => <AssetIcon {...args} />

export const BTCIcon = Template.bind({})
BTCIcon.args = {
  code: 'BTC'
}

export const ETHIcon = Template.bind({})
ETHIcon.args = {
  code: 'ETH'
}

export const BCHIcon = Template.bind({})
BCHIcon.args = {
  code: 'BCH'
}

export const FallBackIconWithUSDC = Template.bind({})
FallBackIconWithUSDC.args = {
  code: 'USDC'
}
