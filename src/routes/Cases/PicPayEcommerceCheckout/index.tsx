import { SystemProps, Theme, x } from '@xstyled/styled-components'

import Box from '../../../components/Box'
import Heading from '../../../components/Heading'
import Text from '../../../components/Text'
import createThumbnail from '../../../components/Thumbnail'
import Title from '../../../components/Title'

import Image1 from './1.jpg'
import Image2 from './2.jpg'
import Image3 from './3.jpg'

export const path = '/picpay-ecommerce-checkout'

export const Thumbnail = (props: SystemProps<Theme>) =>
  createThumbnail({
    path,
    src: Image1,
    title: 'E-commerce Checkout',
  })(props)

function Element() {
  return (
    <x.div padding={{ xs: '20px', md: '120px' }}>
      <Box maxWidth='1268px' margin='0 auto'>
        <x.img marginBottom='80px' src={Image1} width='100%' />

        <Box marginBottom='40px'>
          <Heading>E-commerce Checkout</Heading>
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
          <Title>The problem</Title>
        </Box>
        <Box>
          <Text>
            As an e-commerce team, we had few products that connected to online
            shops. One of them was the checkout experience.
          </Text>
          <Text>
            As seemed on this PicPay Logged Payment case, I used the same
            research to have insights about our sellers. One of the insights was
            that their final clientes did not quite understand on how to use and
            pay with PicPay.
          </Text>
          <Text>
            In order to validate this hypothesis, I've tested our product with
            real costumers and mapped few things to improve, being them:
            <x.ul listStyleType='disc' marginLeft='24px'>
              <li>
                Our payment screen was not reliable, since there was no
                indication that the screen was related to the e-commerce (at the
                time, Brazil had many problem of financial frauds which led the
                people to have trust issues with internet services);
              </li>
              <li>
                Since in 2020 the app was downloaded by millions of users, due
                to the government financial assistance, there were a lot o users
                who did not quite understood on how to use properly the app to
                make payments and our checkout experience did not help them
                well;
              </li>
              <li>The UX didn't contained the purchase value;</li>
            </x.ul>
          </Text>
          <Text>You can see the old experience below.</Text>
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
      </Box>
    </x.div>
  )
}

export const element = <Element />
