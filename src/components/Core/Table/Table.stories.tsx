/* eslint-disable @typescript-eslint/consistent-type-assertions */
import React from 'react'
import { type ComponentStory, type ComponentMeta } from '@storybook/react'

import { Table } from './Table'

export default {
  title: 'Components/Core/Table',
  component: Table,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Table>

const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />

export const DefaultTable = Template.bind({})
DefaultTable.args = {
  data: [
    {
      name: 'Microsoft',
      type: 'software company',
      owner: 'Bill Gates'
    }, {
      name: 'Tesla',
      type: 'automative company',
      owner: 'Elon Musk'
    }, {
      name: 'Amazon',
      type: 'software company',
      owner: 'Jeff Bezos'
    }, {
      name: 'Apple',
      type: 'technology company',
      owner: 'Steve Jobs'
    }],
  columns: [{
    key: 'name',
    label: 'Company name'
  }, {
    key: 'type',
    label: 'Type of Company'
  }, {
    key: 'owner',
    label: 'Iconic Owner'
  }]
}
