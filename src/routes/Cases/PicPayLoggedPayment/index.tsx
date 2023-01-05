import { SystemProps, Theme, x } from '@xstyled/styled-components'

import Box from '../../../components/Box'
import Heading from '../../../components/Heading'
import Text from '../../../components/Text'
import createThumbnail from '../../../components/Thumbnail'
import Title from '../../../components/Title'

import Image1 from './1.jpg'
import Image2 from './2.jpg'

export const path = '/picpay-logged-payment'

export const Thumbnail = (props: SystemProps<Theme>) =>
  createThumbnail({
    path,
    src: Image1,
    title: 'Logged payment',
  })(props)

function Element() {
  return (
    <x.div padding={{ xs: '80px', md: '120px' }}>
      <Box maxWidth='1268px' margin='0 auto'>
        <x.img marginBottom='80px' src={Image1} width='100%' />

        <Box marginBottom='40px'>
          <Heading>Logged payment</Heading>
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
            <Title>About PicPay</Title>
            <Text>
              The company purpose is to transform the way users handle money in
              order to make every day of our clients' lives easier. PicPay is a
              Payment Institution founded in 2012.
            </Text>
          </Box>
        </Box>

        <Box>
          <Title>The challenge</Title>
        </Box>
        <Box>
          <Text>
            We needed to expand our business across more e-commerce. So in order
            to understand our clients ”health”, I've conducted a Opinion
            research, using the Likert Scale with our sellers. The results
            showed that the one of their biggest dissatisfaction was with their
            clients who did not understand how to pay using PicPay, accordingly
            to them.
          </Text>
          <Text>
            In order to validate this hypothesis, I've tested our product with
            real costumers and mapped few usabilities flaws, such as, the
            clarity on how to make the payment and we had one major problem,
            that was our users did not know where to find one key information
            which was their own user's name.
          </Text>
        </Box>

        <Box>
          <Title>Crafting this experience</Title>
        </Box>
        <Box>
          <Text>
            I started to explore possibles paths with few parameters in mind:
            clarity, educational and direct. These parameters guided me to
            create a smooth experience where the possibility of losing our
            client due to the doubt was little.
          </Text>
          <Text>
            To create this amazing experience a content designer helped to
            create a communication that both respected the brand guidelines and
            was useful to the user.
          </Text>
          <Text>
            After having my final prototype, I've tested with 5 final clients
            the experience, where I gave them a few tasks, in instance, I asked
            them what would they do if they did not know their user name on the
            app, and the results were positive, all users understood on how to
            navigate through the experience I crafted.
          </Text>
        </Box>

        <Box>
          <Title>The Release </Title>
        </Box>
        <Box>
          <Text>
            The team released this feature one year after I departed, so this
            experience was made possible due to the new squad and new designer,
            who guided them but kept the design I made.
          </Text>
          <Text>
            You can checkout more about the logged payment in Tecnoblog (news
            release and is in portuguese).
          </Text>
        </Box>

        <x.img my='80px' src={Image2} width='100%' />
      </Box>
    </x.div>
  )
}

export const element = <Element />
