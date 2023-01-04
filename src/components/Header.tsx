import { x } from '@xstyled/styled-components'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <x.header padding={{ xs: '40px', md: '40px 120px' }}>
      <x.nav maxWidth='1268px' margin='0 auto'>
        <x.ul display='flex' gap='40px'>
          <x.li>
            <x.a
              as={Link}
              to='/'
              color='inherit'
              fontSize='32px'
              fontWeight='500'
              textDecoration='none'
            >
              Kanashiro
            </x.a>
          </x.li>
          <x.li marginLeft='auto'>
            <x.a
              as={Link}
              to='/#works'
              color='inherit'
              fontSize='18px'
              textDecoration='none'
            >
              Works
            </x.a>
          </x.li>
          <x.li>
            <x.a
              as={Link}
              to='/#contact'
              color='inherit'
              fontSize='18px'
              textDecoration='none'
            >
              Contact
            </x.a>
          </x.li>
        </x.ul>
      </x.nav>
    </x.header>
  )
}

export default Header
