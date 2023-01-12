import { SystemProps, Theme, x } from '@xstyled/styled-components'
import { PropsWithChildren } from 'react'

import Box from '../../../components/Box'
import Heading from '../../../components/Heading'
import Text from '../../../components/Text'
import createThumbnail from '../../../components/Thumbnail'
import Title from '../../../components/Title'

import Image1 from './1.jpg'
import Image2 from './2.jpg'
import Image3 from './3.jpg'
import Image4 from './4.jpg'

export const path = '/geekie-study-plan'

export const Thumbnail = (props: PropsWithChildren & SystemProps<Theme>) =>
  createThumbnail({ path, src: Image1, title: 'Study Plan' })(props)

function Element() {
  return (
    <x.div padding={{ xs: '20px', md: '120px' }}>
      <Box maxWidth='1268px' margin='0 auto'>
        <x.img marginBottom='80px' src={Image1} width='100%' />

        <Box marginBottom='40px'>
          <Heading>Study Plan</Heading>
        </Box>

        <Box marginBottom='80px'>
          <Box flex={{ xs: '1 0 100%', md: '1' }} flexDirection='column'>
            <Box flexDirection='column'>
              <Title>Role</Title>
              <Text>
                User Researching and Testing, Prototyping, Experience Design,
                Interface Design
              </Text>
            </Box>
            <Box flexDirection='column'>
              <Title>Year</Title>
              <Text>2020</Text>
            </Box>
          </Box>
          <Box flex={{ xs: '1 0 100%', md: '1' }} flexDirection='column'>
            <Title>About Geekie</Title>
            <Text>
              About Geekie One represents the evolution of didactic material and
              brings together everything needed to evolve pedagogical needs to
              make students interested in studying.
            </Text>
          </Box>
        </Box>

        <Box>
          <Title>The challenge</Title>
        </Box>
        <Box>
          <Text>
            The year was 2020, as known as the Pandemic year, all schools began
            to have remote classes and the parents started to be anxious about
            their kids' education since the teacher was not around anymore to
            support each student individually as they used to do in the
            classroom. So at that moment, we saw a huge opportunity that created
            a called Study Plan, a plan personalized accordingly to each
            student's need. This Study plan needed to be fun, light, and a
            little bit different from what we have in the rest of the product to
            stand out from the rest. And we had a small window to release it
            since we thought the lockdown would last for only a few months.
          </Text>
        </Box>

        <x.img my='80px' src={Image2} width='100%' />

        <Box>
          <Title>The process of creating this product</Title>
        </Box>
        <Box>
          <Text>
            There was one squad created to release the Study plan, which
            contained the SEO, Head of Technology, a product designer (me), a
            senior PM, and a few developers. So, I started to understand the
            users' needs through knowledge we already had in-house (remember we
            had only a few weeks) and I conducted a few flash interviews with
            students, parents, and teachers to understand the challenges they
            started to face with the pandemic.
          </Text>
          <Text>
            After briefing the interviews and discussing with the stakeholders a
            few possibilities, I started to create mockups to bring to design
            critique day after day until I had one that was good enough to be
            tested by a few students. With the test insights, I rounded up the
            final prototype and handed it off to the developers teams.
          </Text>
        </Box>

        <x.img my='80px' src={Image3} width='100%' />

        <Box>
          <Title>The Release (with capital R)</Title>
        </Box>
        <Box>
          <Text>
            We made an event for multiple schools to release a new way of
            studying, that would make our students learn faster and better.
            Schools director were thrilled by the news and parents were excited,
            because they no longer have to fear the "gap" in knowledge.
          </Text>
        </Box>

        <x.img src={Image4} width='100%' />
      </Box>
    </x.div>
  )
}

export const element = <Element />
