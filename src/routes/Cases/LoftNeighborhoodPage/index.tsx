import { SystemProps, Theme, x } from '@xstyled/styled-components'

import Box from '../../../components/Box'
import Heading from '../../../components/Heading'
import Text from '../../../components/Text'
import createThumbnail from '../../../components/Thumbnail'
import Title from '../../../components/Title'

import Image1 from './1.jpg'
import Image2 from './2.jpg'
import Image3 from './3.jpg'
import Image4 from './4.jpg'
import Image5 from './5.jpg'
import Image6 from './6.jpg'

export const path = '/loft-neighborhood-page'

export const Thumbnail = (props: SystemProps<Theme>) =>
  createThumbnail({
    path,
    src: Image1,
    title: 'Neighborhood informational pages',
  })(props)

function Element() {
  return (
    <x.div padding={{ xs: '20px', md: '120px' }}>
      <Box maxWidth='1268px' margin='0 auto'>
        <x.img marginBottom='80px' src={Image1} width='100%' />

        <Box marginBottom='40px'>
          <Heading>Neighborhood informational pages</Heading>
        </Box>

        <Box>
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
              <Text>2022</Text>
            </Box>
          </Box>
          <Box flex={{ xs: '1 0 100%', md: '1' }} flexDirection='column'>
            <Title>About Loft</Title>
            <Text>
              Loft is a real state digital platform created in 2018 to simplify
              the process of selling or buying proprieties, using data and
              technology to deliver the best experience to our users. In the
              last year, there was an emerging need to grow our organic traffic
              to cut costs with this goal my squad was born.
            </Text>
          </Box>
        </Box>

        <x.img my='80px' src={Image2} width='100%' />

        <Box>
          <Title>The challenge</Title>
        </Box>
        <Box>
          <Text>
            We know the first step for people to think about moving to another
            neighborhood is the dissatisfaction they have with the place they
            live according to a quantitative survey made in 2021, one of the
            biggest dissatisfactions with the region is the noise, difficulty
            access to public transport and bad locality (far from shopping
            centers to meet day to day needs). So, our user's goal is to find
            another place where they won't face these challenges anymore.
          </Text>
        </Box>
        <Box>
          <Text>
            To understand how the search works, I conducted qualitative research
            with <strong>six people</strong> within our{' '}
            <strong>target audience</strong>. I identified that users start
            looking for information through searches on Google maps, blogs, and
            most commonly, through talking to friends and family who know the
            desired neighborhood and those users who are more advanced in the
            process of searching for a new home, usually visit the place on
            different days and times of the week to find out how the movement
            is, the process they call as "a little ride around the
            neighborhood."
          </Text>
        </Box>
        <Box>
          <Text>
            My main challenge was to develop a product that brought all this
            information without requiring a high cognitive load from the user
            and keeping the SEO needs. Besides that, I also had to design a page
            that is ”resistent” to errors, since we were going to release over
            1.000 pages.
          </Text>
        </Box>

        <x.img my='80px' src={Image3} width='100%' />

        <Box>
          <Title>The solution</Title>
        </Box>
        <Box>
          <Text>
            After usability testing, I created a page with two main blocks, the
            first one bringing information about the neighborhoods based on what
            I've learned from the previous research, for instance, the
            availability of public transportation, leisure, and nearby shopping.
          </Text>
        </Box>
        <Box>
          <Text>
            The second block is our portfolios with properties sorted by the
            most used filter and the model that the data science projected to
            bring the home that was most "likely to sell."
          </Text>
        </Box>

        <x.img src={Image4} width='100%' />

        <Box>
          <Title>The rollout</Title>
        </Box>
        <Box>
          <Text>
            To maintain our agility, I had to create versions along with the
            Product Manager and Engineer manager of the page based on what was
            more critical to the users and what made sense in a development
            vision. We released a "raw" page containing only the Hero, then the
            rest of the sections was launched in the following weeks, so the
            pages would start to index on Google soon after its machine would
            understand that we were evolving the pages.
          </Text>
        </Box>
        <Box>
          <Text>
            The second block is our portfolios with properties sorted by the
            most used filter and the model that the data science projected to
            bring the home that was most "likely to sell."
          </Text>
        </Box>

        <x.img my='80px' src={Image5} width='100%' />

        <Box>
          <Title>The performance</Title>
        </Box>
        <Box>
          <Text>
            Three months after the launch, we grew over 350% of our organic
            traffic and brought a few first visit schedules. Now we are testing
            a few formats of content to understand how they influence users'
            decisions and we have a few versions already mapped to complete our
            pages.
          </Text>
        </Box>

        <Box>
          <Title>The future</Title>
        </Box>
        <Box>
          <Text>
            I prioritized few ideas to be tested on the page and they were
            tested in the Q4/22, so long, the results were excellent bringing
            more visit schedules to the company and a higher financial
            potential.
          </Text>
        </Box>

        <x.img my='80px' src={Image6} width='100%' />
      </Box>
    </x.div>
  )
}

export const element = <Element />
