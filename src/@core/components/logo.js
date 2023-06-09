/** @jsxImportSource theme-ui */

import { jsx, Image } from 'theme-ui'
import { Link } from './link'

import LogoDark from '../../assets/home/logowhite.png'

export default function Logo() {
  return (
    <Link
      path='/'
      sx={{
        variant: 'links.logo',
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
      }}
    >
      <Image src={LogoDark.src} alt='redrose landing logo' width = "100px" height = "100px" />
    </Link>
  )
}
