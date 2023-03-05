/* eslint-disable @typescript-eslint/consistent-type-assertions */
import React from 'react'
import { type ComponentStory, type ComponentMeta } from '@storybook/react'

import { Accordion } from './Accordion'

export default {
  title: 'Components/Core/Accordion',
  component: Accordion,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Accordion>

const Template: ComponentStory<typeof Accordion> = (args) => <Accordion {...args} />

export const DefaultStory = Template.bind({})
DefaultStory.args = {
  header: 'Click to toggle: Lorem ipsum',
  children: <div>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt dui ut ornare lectus sit amet est. At tellus at urna condimentum mattis pellentesque id nibh tortor. Fames ac turpis egestas maecenas pharetra convallis posuere morbi leo. Quam pellentesque nec nam aliquam sem et tortor. Commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae. Dui nunc mattis enim ut tellus elementum sagittis vitae. Enim eu turpis egestas pretium aenean. Semper auctor neque vitae tempus quam. Justo laoreet sit amet cursus sit amet dictum sit amet. Porta non pulvinar neque laoreet suspendisse. Neque sodales ut etiam sit amet nisl purus in. Pellentesque elit eget gravida cum sociis. Sed nisi lacus sed viverra tellus.</p>
    <p>Congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque. Aliquam faucibus purus in massa tempor nec feugiat nisl. Sit amet risus nullam eget felis eget. Nec dui nunc mattis enim ut tellus elementum. In fermentum posuere urna nec tincidunt praesent semper. Volutpat diam ut venenatis tellus in. In est ante in nibh mauris cursus mattis. Venenatis a condimentum vitae sapien pellentesque. Amet nisl suscipit adipiscing bibendum est ultricies integer quis. Purus in mollis nunc sed id semper. Ut aliquam purus sit amet luctus venenatis lectus magna fringilla.</p>
    <p>Sit amet porttitor eget dolor. Dictum sit amet justo donec enim. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant. Nunc id cursus metus aliquam eleifend mi in nulla. Mattis pellentesque id nibh tortor id aliquet lectus. Mi quis hendrerit dolor magna eget est lorem ipsum dolor. Eget egestas purus viverra accumsan in nisl nisi. Sit amet mauris commodo quis imperdiet massa tincidunt nunc. Amet nulla facilisi morbi tempus iaculis urna id volutpat lacus. Fermentum posuere urna nec tincidunt praesent semper feugiat. Enim sit amet venenatis urna cursus eget nunc scelerisque. Eros donec ac odio tempor. Vel pharetra vel turpis nunc eget lorem dolor sed. Nulla malesuada pellentesque elit eget gravida cum. Pellentesque pulvinar pellentesque habitant morbi. Lorem donec massa sapien faucibus et molestie ac feugiat.</p>
    <p>Vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa. Nullam eget felis eget nunc lobortis mattis. Nisl vel pretium lectus quam id leo in. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus. Varius sit amet mattis vulputate enim nulla aliquet. Dolor morbi non arcu risus quis varius quam quisque id. Neque volutpat ac tincidunt vitae semper quis. Elit sed vulputate mi sit amet mauris commodo quis. Nulla pharetra diam sit amet. Mi sit amet mauris commodo quis. Hac habitasse platea dictumst quisque sagittis purus sit amet volutpat. Pretium quam vulputate dignissim suspendisse in. Ac tortor dignissim convallis aenean et tortor at risus.</p>
    <p>Dignissim sodales ut eu sem integer vitae. Nullam eget felis eget nunc lobortis mattis aliquam faucibus. Aliquam ultrices sagittis orci a scelerisque purus semper eget. Et malesuada fames ac turpis egestas integer eget aliquet nibh. Aliquam sem fringilla ut morbi tincidunt augue interdum velit. Nullam eget felis eget nunc lobortis mattis aliquam faucibus purus. Eget felis eget nunc lobortis. Dui id ornare arcu odio. Ac tincidunt vitae semper quis. Lacus viverra vitae congue eu consequat ac felis donec. Viverra aliquet eget sit amet tellus cras adipiscing enim eu. Mi eget mauris pharetra et. Volutpat ac tincidunt vitae semper quis lectus nulla at. Tortor id aliquet lectus proin nibh nisl condimentum.</p>
  </div>
}

export const MultipleAccordions = (): React.ReactElement => {
  return (
    <>
      <Accordion header={'7 deadly sins'}>
        <ul>
          <li><strong>Lust:</strong> Excessive desire or craving for something, often of a sexual nature.</li>
          <li><strong>Gluttony:</strong> Overindulgence and overconsumption of food, drink, or other substances.</li>
          <li><strong>Greed:</strong> The excessive desire for material possessions or wealth.</li>
          <li><strong>Sloth:</strong> Laziness, apathy, or unwillingness to put forth effort.</li>
          <li><strong>Wrath:</strong> Anger or rage that results in violent or destructive behavior.</li>
          <li><strong>Envy:</strong> Jealousy or coveting what someone else has or has achieved.</li>
          <li><strong>Pride:</strong> An excessive sense of self-importance or arrogance.</li>
        </ul>

      </Accordion>
      <Accordion header='7 wonders of the world'>
        <ul>
          <li><strong>The Great Pyramid of Giza:</strong> The oldest and largest of the pyramids in Giza, Egypt, built as a tomb for Pharaoh Khufu.</li>
          <li><strong>The Hanging Gardens of Babylon:</strong> A terraced garden with exotic plants and trees, built by King Nebuchadnezzar II for his wife in Mesopotamia (present-day Iraq).</li>
          <li><strong>The Statue of Zeus at Olympia:</strong> A giant statue of the Greek god Zeus, created by the sculptor Phidias and located in the temple of Olympia, Greece.</li>
          <li><strong>The Temple of Artemis at Ephesus:</strong> An enormous temple dedicated to the Greek goddess Artemis, located in Ephesus, Turkey.</li>
          <li><strong>The Mausoleum at Halicarnassus:</strong> A tomb built for Mausolus, the ruler of Caria, in present-day Bodrum, Turkey.</li>
          <li><strong>The Colossus of Rhodes:</strong> A bronze statue of the Greek god Helios, erected at the entrance of the harbor in Rhodes, Greece.</li>
          <li><strong>The Lighthouse of Alexandria:</strong> A tall lighthouse that stood on the island of Pharos in Alexandria, Egypt, and was considered one of the tallest structures in the ancient world.</li>
        </ul>
      </Accordion>
      <Accordion header='7 most popular types of cuisine'>
        <ul>
          <li><strong>Italian:</strong> Known for its hearty pasta dishes, delicious pizza, and flavorful sauces.</li>
          <li><strong>Chinese:</strong> Famous for its diverse flavors and use of ingredients like soy sauce, ginger, and garlic.</li>
          <li><strong>Indian:</strong> Features a wide range of spices and herbs, such as curry, cumin, and coriander, in dishes like chicken tikka masala and butter chicken.</li>
          <li><strong>Mexican:</strong> Known for its vibrant colors, bold flavors, and popular dishes like tacos, burritos, and guacamole.</li>
          <li><strong>Japanese:</strong> Features fresh ingredients, clean flavors, and a focus on presentation, with dishes like sushi and ramen being popular.</li>
          <li><strong>French:</strong> Known for its rich sauces, buttery pastries, and classic dishes like coq au vin and ratatouille.</li>
          <li><strong>Thai:</strong> Features a blend of spicy, sour, and sweet flavors, often with the use of ingredients like coconut milk, lemongrass, and fish sauce, in dishes like pad thai and green curry.</li>
        </ul>

      </Accordion>
    </>
  )
}
