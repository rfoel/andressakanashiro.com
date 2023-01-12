import { x } from '@xstyled/styled-components'
import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

import ScrollDown from '../../components/ScrollDown'

import Contact from './contact.jpg'
import GeekieStudyPlan from './geekie-study-plan.jpg'
import LoftNeighborhoodPage from './loft-neighborhood-page.jpg'
import PicPayEcommerceCheckout from './picpay-ecommerce-checkout.jpg'
import PicPayLoggedPayment from './picpay-logged-payment.jpg'

export const path = '/'

export const index = true

function Element() {
  const { pathname, hash, key } = useLocation()

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const id = hash.replace('#', '')
        const element = document.getElementById(id)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 0)
    }
  }, [pathname, hash, key])

  return (
    <x.div>
      <x.div
        alignItems='center'
        backgroundColor='#171616'
        color='#FFFFFF'
        display='flex'
        minHeight='100vh'
        padding={{ xs: '20px', md: '120px' }}
        position='relative'
      >
        <x.div
          display='flex'
          flexDirection='column'
          gap='40px'
          maxWidth='1268px'
          margin='0 auto'
        >
          <x.h1 fontSize='24px' fontWeight='900'>
            Andressa Kanashiro
          </x.h1>
          <x.p fontSize='32px' fontWeight='300'>
            Product designer based on São Paulo, Brasil. Focused on crafting
            user experiences based on data, research and lots of design
            fundamentals.
          </x.p>
          <x.p fontSize='32px' fontWeight='300'>
            Come check my work!
          </x.p>
        </x.div>
        <ScrollDown />
      </x.div>
      <x.div id='works' padding={{ xs: '20px', md: '120px' }}>
        <x.div
          display='flex'
          flexWrap='wrap'
          gap='80px 24px'
          maxWidth='1268px'
          margin='0 auto'
        >
          <x.div
            display='flex'
            flex={{ xs: '1 0 100%', md: '0 1 calc(50% - 12px)' }}
            flexDirection='column'
            position='relative'
          >
            <x.a
              as={Link}
              to='/loft-neighborhood-page'
              position='absolute'
              top='0'
              left='0'
              bottom='0'
              right='0'
            />
            <x.img
              marginBottom='40px'
              src={LoftNeighborhoodPage}
              width='100%'
            />
            <x.h1
              color='#171616'
              fontSize='32px'
              fontWeight='900'
              marginBottom='8px'
            >
              Neighborhood Page
            </x.h1>
            <x.p color='#676666'>
              Loft is a real state digital platform created in 2018 to simplify
              the process of selling and buying proprieties
            </x.p>
          </x.div>
          <x.div
            display='flex'
            flex={{ xs: '1 0 100%', md: '0 1 calc(50% - 12px)' }}
            flexDirection='column'
            position='relative'
          >
            <x.a
              as={Link}
              to='/geekie-study-plan'
              position='absolute'
              top='0'
              left='0'
              bottom='0'
              right='0'
            />
            <x.img marginBottom='40px' src={GeekieStudyPlan} width='100%' />
            <x.h1
              color='#171616'
              fontSize='32px'
              fontWeight='900'
              marginBottom='8px'
            >
              Study Plan
            </x.h1>
            <x.p color='#676666'>
              Geekie One represents the evolution of didactic material and
              technology to bring together everything needed to evolve
              pedagogical needs
            </x.p>
          </x.div>
          <x.div display='flex' flexDirection='column' position='relative'>
            <x.a
              as={Link}
              to='/picpay-logged-payment'
              position='absolute'
              top='0'
              left='0'
              bottom='0'
              right='0'
            />
            <x.img marginBottom='40px' src={PicPayLoggedPayment} width='100%' />
            <x.h1
              color='#171616'
              fontSize='32px'
              fontWeight='900'
              marginBottom='8px'
            >
              Logged Payment
            </x.h1>
            <x.p color='#676666'>
              PicPay is a financial company that allows users to pay digitally
              for products and services
            </x.p>
          </x.div>
          <x.div
            display='flex'
            flex={{ xs: '1 0 100%', md: '0 1 calc(50% - 12px)' }}
            flexDirection='column'
            position='relative'
          >
            <x.a
              as={Link}
              to='/picpay-ecommerce-checkout'
              position='absolute'
              top='0'
              left='0'
              bottom='0'
              right='0'
            />
            <x.img
              marginBottom='40px'
              src={PicPayEcommerceCheckout}
              width='100%'
            />
            <x.h1
              color='#171616'
              fontSize='32px'
              fontWeight='900'
              marginBottom='8px'
            >
              E-commerce Checkout
            </x.h1>
            <x.p color='#676666'>PicPay Case</x.p>
          </x.div>
          <x.div
            id='contact'
            display='flex'
            flex={{ xs: '1 0 100%', md: '0 1 calc(50% - 12px)' }}
            flexDirection='column'
          >
            <x.img marginBottom='40px' src={Contact} width='100%' />
            <x.h1
              color='#171616'
              fontSize='32px'
              fontWeight='900'
              marginBottom='8px'
            >
              Let's grab a coffee!
            </x.h1>
            <x.p color='#676666'>
              E-mail me on{' '}
              <x.a
                color='inherit'
                fontWeight='bold'
                href='mailto:and.kanashiro@gmail.com'
                target='_blank'
                textDecoration='none'
              >
                and.kanashiro@gmail.com
              </x.a>{' '}
              or get in touch with me on{' '}
              <x.a
                color='inherit'
                fontWeight='bold'
                href='https://www.linkedin.com/in/andressa-kanashiro'
                target='_blank'
                textDecoration='none'
              >
                LinkedIn
              </x.a>
            </x.p>
          </x.div>
        </x.div>
      </x.div>
      <x.div
        backgroundColor='#171616'
        color='#FFFFFF'
        padding={{ xs: '20px', md: '120px' }}
      >
        <x.div maxWidth='1268px' margin='0 auto'>
          <x.h1 fontSize='32px' fontWeight='900' marginBottom='48px'>
            Get to know my <br /> work further
          </x.h1>
          <x.div display='flex' flexWrap='wrap' gap='24px'>
            <x.div
              backgroundColor='#189559'
              display='flex'
              flex={{ xs: '1 0 100%', lg: '1' }}
              flexDirection='column'
              padding='100px 32px 32px'
              justifyContent='flex-end'
              position='relative'
              overflow='hidden'
            >
              <x.a
                href='https://medium.com/design-bootcamp/how-organising-my-figma-documents-helped-me-to-be-a-better-designer-f1b830cdbd60'
                target='_blank'
                position='absolute'
                top='0'
                left='0'
                bottom='0'
                right='0'
              />
              <x.span
                boxShadow='0px 0px 24px 0px rgba(0,0,0,0.15)'
                borderRadius='265px'
                position='absolute'
                h='265px'
                w='265px'
                top='-40%'
                right='0'
              />
              <x.p fontSize='16px' marginBottom='16px'>
                Medium
              </x.p>
              <x.h1 fontSize='24px' fontWeight='900' marginBottom='26px'>
                This is how I design to cover the good and bad scenarios
              </x.h1>
              <x.hr
                borderColor='#676666'
                borderStyle='dashed'
                borderWidth='1px'
                marginBottom='35px'
                maxWidth='50%'
              />
              <x.p fontSize='14px' marginBottom='52px' minHeight='83px'>
                This and many more articles released on my Medium. Note that
                many may be in Portuguese only.
              </x.p>
              <x.p fontSize='14px'>Read</x.p>
            </x.div>
            <x.div
              backgroundColor='#2178C9'
              display='flex'
              flex={{ xs: '1 0 100%', lg: '1' }}
              flexDirection='column'
              padding='100px 32px 32px'
              justifyContent='flex-end'
              position='relative'
              overflow='hidden'
            >
              <x.a
                href='https://dribbble.com/AndKanashiro'
                target='_blank'
                position='absolute'
                top='0'
                left='0'
                bottom='0'
                right='0'
              />
              <x.span
                boxShadow='0px 56px 80px rgba(0,0,0,0.15)'
                borderRadius='265px'
                position='absolute'
                h='265px'
                w='265px'
                bottom='-10%'
                right='-40%'
              />
              <x.p fontSize='16px' marginBottom='16px'>
                Dribbble
              </x.p>
              <x.h1 fontSize='24px' fontWeight='900' marginBottom='26px'>
                Illustrations, 3D modeling and more
              </x.h1>
              <x.hr
                borderColor='#FFFFFF'
                borderStyle='dashed'
                borderWidth='1px'
                marginBottom='35px'
                maxWidth='50%'
              />
              <x.p fontSize='14px' marginBottom='52px' minHeight='83px'>
                Get to know my work with graphic design, 3D design and much more
              </x.p>
              <x.p fontSize='14px'>Check out</x.p>
            </x.div>
            <x.div
              backgroundColor='#C97221'
              display='flex'
              flex={{ xs: '1 0 100%', lg: '1' }}
              flexDirection='column'
              padding='100px 32px 32px'
              justifyContent='flex-end'
              position='relative'
              overflow='hidden'
            >
              <x.a
                href='https://www.behance.net/andkanashiro'
                target='_blank'
                position='absolute'
                top='0'
                left='0'
                bottom='0'
                right='0'
              />
              <x.span
                boxShadow='0px 56px 80px rgba(0,0,0,0.15)'
                borderRadius='265px'
                position='absolute'
                h='265px'
                w='265px'
                top='-30%'
                right='-20%'
              />
              <x.p fontSize='16px' marginBottom='16px'>
                Behance
              </x.p>
              <x.h1 fontSize='24px' fontWeight='900' marginBottom='26px'>
                Preview works and more about me
              </x.h1>
              <x.hr
                borderColor='#FFFFFF'
                borderStyle='dashed'
                borderWidth='1px'
                marginBottom='35px'
                maxWidth='50%'
              />
              <x.p fontSize='14px' marginBottom='52px' minHeight='83px'>
                For me, UX means to transform everyone's dreams into something
                tangible based on real data.
              </x.p>
              <x.p fontSize='14px'>Check out</x.p>
            </x.div>
          </x.div>
        </x.div>
      </x.div>
    </x.div>
  )
}

export const element = <Element />
