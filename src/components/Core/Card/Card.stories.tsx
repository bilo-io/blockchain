/* eslint-disable @typescript-eslint/consistent-type-assertions */
import React from 'react'
import { type ComponentStory, type ComponentMeta } from '@storybook/react'

import { Card } from './Card'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Core/Card',
  component: Card,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Card>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />

export const DefaultStory = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
DefaultStory.args = {
  children: <div>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt dui ut ornare lectus sit amet est. At tellus at urna condimentum mattis pellentesque id nibh tortor. Fames ac turpis egestas maecenas pharetra convallis posuere morbi leo. Quam pellentesque nec nam aliquam sem et tortor. Commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae. Dui nunc mattis enim ut tellus elementum sagittis vitae. Enim eu turpis egestas pretium aenean. Semper auctor neque vitae tempus quam. Justo laoreet sit amet cursus sit amet dictum sit amet. Porta non pulvinar neque laoreet suspendisse. Neque sodales ut etiam sit amet nisl purus in. Pellentesque elit eget gravida cum sociis. Sed nisi lacus sed viverra tellus.</p>
  </div>
}

export const MultipleCards = (): React.ReactElement => {
  return (
    <>
      <Card depth="0">
        Depth: 0
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt dui ut ornare lectus sit amet est. At tellus at urna condimentum mattis pellentesque id nibh tortor. Fames ac turpis egestas maecenas pharetra convallis posuere morbi leo. Quam pellentesque nec nam aliquam sem et tortor. Commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae. Dui nunc mattis enim ut tellus elementum sagittis vitae. Enim eu turpis egestas pretium aenean. Semper auctor neque vitae tempus quam. Justo laoreet sit amet cursus sit amet dictum sit amet. Porta non pulvinar neque laoreet suspendisse. Neque sodales ut etiam sit amet nisl purus in. Pellentesque elit eget gravida cum sociis. Sed nisi lacus sed viverra tellus.</p>
      </Card>

      <Card depth="1">
        Depth: 1
        <p>Congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque. Aliquam faucibus purus in massa tempor nec feugiat nisl. Sit amet risus nullam eget felis eget. Nec dui nunc mattis enim ut tellus elementum. In fermentum posuere urna nec tincidunt praesent semper. Volutpat diam ut venenatis tellus in. In est ante in nibh mauris cursus mattis. Venenatis a condimentum vitae sapien pellentesque. Amet nisl suscipit adipiscing bibendum est ultricies integer quis. Purus in mollis nunc sed id semper. Ut aliquam purus sit amet luctus venenatis lectus magna fringilla.</p>
      </Card>

      <Card depth="2">
        Depth: 2
        <p>Sit amet porttitor eget dolor. Dictum sit amet justo donec enim. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant. Nunc id cursus metus aliquam eleifend mi in nulla. Mattis pellentesque id nibh tortor id aliquet lectus. Mi quis hendrerit dolor magna eget est lorem ipsum dolor. Eget egestas purus viverra accumsan in nisl nisi. Sit amet mauris commodo quis imperdiet massa tincidunt nunc. Amet nulla facilisi morbi tempus iaculis urna id volutpat lacus. Fermentum posuere urna nec tincidunt praesent semper feugiat. Enim sit amet venenatis urna cursus eget nunc scelerisque. Eros donec ac odio tempor. Vel pharetra vel turpis nunc eget lorem dolor sed. Nulla malesuada pellentesque elit eget gravida cum. Pellentesque pulvinar pellentesque habitant morbi. Lorem donec massa sapien faucibus et molestie ac feugiat.</p>
      </Card>

      <Card depth="3">
        Depth: 3
        <p>Vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa. Nullam eget felis eget nunc lobortis mattis. Nisl vel pretium lectus quam id leo in. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus. Varius sit amet mattis vulputate enim nulla aliquet. Dolor morbi non arcu risus quis varius quam quisque id. Neque volutpat ac tincidunt vitae semper quis. Elit sed vulputate mi sit amet mauris commodo quis. Nulla pharetra diam sit amet. Mi sit amet mauris commodo quis. Hac habitasse platea dictumst quisque sagittis purus sit amet volutpat. Pretium quam vulputate dignissim suspendisse in. Ac tortor dignissim convallis aenean et tortor at risus.</p>
      </Card>

      <Card depth="4">
        Depth: 4
        <p>Dignissim sodales ut eu sem integer vitae. Nullam eget felis eget nunc lobortis mattis aliquam faucibus. Aliquam ultrices sagittis orci a scelerisque purus semper eget. Et malesuada fames ac turpis egestas integer eget aliquet nibh. Aliquam sem fringilla ut morbi tincidunt augue interdum velit. Nullam eget felis eget nunc lobortis mattis aliquam faucibus purus. Eget felis eget nunc lobortis. Dui id ornare arcu odio. Ac tincidunt vitae semper quis. Lacus viverra vitae congue eu consequat ac felis donec. Viverra aliquet eget sit amet tellus cras adipiscing enim eu. Mi eget mauris pharetra et. Volutpat ac tincidunt vitae semper quis lectus nulla at. Tortor id aliquet lectus proin nibh nisl condimentum.</p>
      </Card>

      <Card depth="5">
        Depth: 5
        <p>Dignissim sodales ut eu sem integer vitae. Nullam eget felis eget nunc lobortis mattis aliquam faucibus. Aliquam ultrices sagittis orci a scelerisque purus semper eget. Et malesuada fames ac turpis egestas integer eget aliquet nibh. Aliquam sem fringilla ut morbi tincidunt augue interdum velit. Nullam eget felis eget nunc lobortis mattis aliquam faucibus purus. Eget felis eget nunc lobortis. Dui id ornare arcu odio. Ac tincidunt vitae semper quis. Lacus viverra vitae congue eu consequat ac felis donec. Viverra aliquet eget sit amet tellus cras adipiscing enim eu. Mi eget mauris pharetra et. Volutpat ac tincidunt vitae semper quis lectus nulla at. Tortor id aliquet lectus proin nibh nisl condimentum.</p>
      </Card>
    </>
  )
}
