import { jsx, Image } from 'theme-ui'
import { Link } from './link'

import LogoDark from '../../assets/home/logo.jpg'

export default function Logo() {
  return (
    <Link
      path='/'
      sx={{
        variant: 'links.logo',
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer'
      }}
    >
      <Image src={LogoDark.src} alt='redrose landing logo' />
    </Link>
  )
}
