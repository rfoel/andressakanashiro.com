import { SystemProps, Theme, x } from '@xstyled/styled-components'
import { PropsWithChildren } from 'react'
import { Link } from 'react-router-dom'

import Box from './Box'
import Heading from './Heading'

const createThumbnail =
  ({
    path,
    src,
    title,
  }: PropsWithChildren & { src: string; path: string; title: string }) =>
  (props: PropsWithChildren & SystemProps<Theme>) =>
    (
      <Box
        gap='0'
        position='relative'
        flexDirection='column'
        flexWrap='nowrap'
        w='100%'
        flex='1'
        justifyContent='space-between'
        {...props}
      >
        <x.div>
          <x.a
            as={Link}
            to={path}
            position='absolute'
            top='0'
            left='0'
            bottom='0'
            right='0'
          />
          <x.div
            backgroundImage={`url(${src})`}
            backgroundSize='cover'
            backgroundPosition='center'
            backgroundRepeat='no-repeat'
            h='378px'
            w='100%'
            marginBottom='40px'
          />

          <Heading color='#FFFFFF' fontSize='32px' w='100%' marginBottom='20px'>
            {title}
          </Heading>
        </x.div>
        {props.children}
      </Box>
    )

export default createThumbnail
