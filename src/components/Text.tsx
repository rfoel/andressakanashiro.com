import { SystemProps, Theme, x } from '@xstyled/styled-components'
import { PropsWithChildren } from 'react'

function Text({ children, ...props }: PropsWithChildren & SystemProps<Theme>) {
  return (
    <x.h1
      color='#676666'
      fontSize='18px'
      fontWeight='300'
      lineHeight='36px'
      {...props}
    >
      {children}
    </x.h1>
  )
}

export default Text
