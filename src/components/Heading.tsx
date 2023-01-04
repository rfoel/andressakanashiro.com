import { SystemProps, Theme, x } from '@xstyled/styled-components'
import { PropsWithChildren } from 'react'

function Heading({
  children,
  ...props
}: PropsWithChildren & SystemProps<Theme>) {
  return (
    <x.h1 color='#171616' fontSize='56px' fontWeight='900' {...props}>
      {children}
    </x.h1>
  )
}

export default Heading
