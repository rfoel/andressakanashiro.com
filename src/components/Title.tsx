import { x } from '@xstyled/styled-components'
import { PropsWithChildren } from 'react'

function Title({ children }: PropsWithChildren) {
  return (
    <x.h2 color='#171616' fontSize='24px' fontWeight='900'>
      {children}
    </x.h2>
  )
}

export default Title
