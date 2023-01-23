import { x } from '@xstyled/styled-components'
import { useLocation } from 'react-router-dom'

import * as GeekieStudyPlan from '../routes/Cases/GeekieStudyPlan'
import * as LoftNeighborhoodPage from '../routes/Cases/LoftNeighborhoodPage'
import * as PicPayEcommerceCheckout from '../routes/Cases/PicPayEcommerceCheckout'
import * as PicPayLoggedPayment from '../routes/Cases/PicPayLoggedPayment'

import Box from './Box'
import Heading from './Heading'
import Text from './Text'

const cases = [
  GeekieStudyPlan,
  LoftNeighborhoodPage,
  PicPayEcommerceCheckout,
  PicPayLoggedPayment,
]

function Footer() {
  const location = useLocation()

  const currentIndex = cases.findIndex((c) => c.path === location.pathname)
  const Prev = cases[currentIndex - 1]?.Thumbnail
  const Next =
    cases[currentIndex + 1 >= cases.length ? 0 : currentIndex + 1]?.Thumbnail

  return (
    <x.footer
      backgroundColor='#353434'
      padding={{ xs: '40px', md: '40px 120px' }}
    >
      <x.div maxWidth='1268px' margin='0 auto'>
        <Heading color='#FFFFFF' fontSize='48px' marginBottom='56px'>
          Keep reading
        </Heading>
        <Box>
          <Box
            flexDirection='column'
            gap='0'
            flex={{ xs: '1 0 100%', md: '0 1 calc(50% - 20px)' }}
          >
            {Prev && (
              <Prev>
                <Text color='#FFFFFF' fontSize='16px'>
                  PREV
                </Text>
              </Prev>
            )}
          </Box>
          <Box
            alignItems='flex-end'
            flexDirection='column'
            gap='0'
            flex={{ xs: '1 0 100%', md: '0 1 calc(50% - 20px)' }}
          >
            {Next && (
              <Next textAlign='right'>
                <Text
                  color='#FFFFFF'
                  fontSize='16px'
                  textAlign='right'
                  w='100%'
                >
                  NEXT
                </Text>
              </Next>
            )}
          </Box>
        </Box>
      </x.div>
    </x.footer>
  )
}

export default Footer
