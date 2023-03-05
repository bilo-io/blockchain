/* eslint-disable @typescript-eslint/consistent-type-assertions */
import React from 'react'
import { type ComponentMeta } from '@storybook/react'
import { Progress } from './Progress'

export default {
  title: 'Components/Core/Progress',
  component: Progress,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Progress>

export const DefaultStory = (): React.ReactElement => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' }}>
      <Progress type='circular' ratio={50} />

      <Progress type='linear' ratio={50} size={100} />
    </div>
  )
}

export const Circular = (): React.ReactElement => {
  return (
    <Progress type='circular' ratio={50} />
  )
}

export const Linear = (): React.ReactElement => {
  return (
    <Progress type='linear' ratio={50} />
  )
}
