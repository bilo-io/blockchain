/* eslint-disable @typescript-eslint/consistent-type-assertions */
import React from 'react'
import { type ComponentStory, type ComponentMeta } from '@storybook/react'

import Button from './Button'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Core/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Button>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  color: 'primary',
  children: 'Button (Primary)'
}

export const LargeButtons = (): React.ReactNode => {
  return (
    <>

      <h2>size: <strong>xs</strong></h2>
      <Button size="xs" color="primary">primary</Button>
      <Button size="xs" color="secondary">secondary</Button>
      <Button size="xs" color="success">success</Button>
      <Button size="xs" color="warning">warning</Button>
      <Button size="xs" color="error">error</Button>

      <h2>size: <strong>sm</strong></h2>
      <Button size="sm" color="primary">primary</Button>
      <Button size="sm" color="secondary">secondary</Button>
      <Button size="sm" color="success">success</Button>
      <Button size="sm" color="warning">warning</Button>
      <Button size="sm" color="error">error</Button>

      <h2>size: <strong>md</strong></h2>
      <Button size="md" color="primary">primary</Button>
      <Button size="md" color="secondary">secondary</Button>
      <Button size="md" color="success">success</Button>
      <Button size="md" color="warning">warning</Button>
      <Button size="md" color="error">error</Button>

      <h2>size: <strong>lg</strong></h2>
      <Button size="lg" color="primary">primary</Button>
      <Button size="lg" color="secondary">secondary</Button>
      <Button size="lg" color="success">success</Button>
      <Button size="lg" color="warning">warning</Button>
      <Button size="lg" color="error">error</Button>

      <h2>size: <strong>xl</strong></h2>
      <Button size="xl" color="primary">primary</Button>
      <Button size="xl" color="secondary">secondary</Button>
      <Button size="xl" color="success">success</Button>
      <Button size="xl" color="warning">warning</Button>
      <Button size="xl" color="error">error</Button>
    </>

  )
}
