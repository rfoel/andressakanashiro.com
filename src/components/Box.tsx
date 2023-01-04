import { SystemProps, Theme, x } from '@xstyled/styled-components'
import { PropsWithChildren } from 'react'

function Box({ children, ...props }: PropsWithChildren & SystemProps<Theme>) {
  return (
    <x.div display='flex' flexWrap='wrap' gap='24px 32px' {...props}>
      {children}
    </x.div>
  )
}

export default Box
