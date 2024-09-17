/** @jsxImportSource theme-ui */

import {  Container, Flex, Button, Box } from 'theme-ui'
import { keyframes } from '@emotion/react'
import { IoIosUnlock } from 'react-icons/io'
import { NavLink, Link } from '../../../@core/components/link'
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll'
import Logo from '../../../@core/components/logo'
import Bg_header from '../../../assets/home/banner-bg-1-1.png'

import { DrawerProvider } from '../../../@core/context/drawer/drawer.provider'
import MobileDrawer from './mobileDrawer'
import menuItems from './header.data'

export default function Header({ className }) {
  return (
    <DrawerProvider>
      <header sx={styles.header} className={className}>
        <Container sx={styles.container}>
          <Logo />

          <Flex as='nav' sx={styles.nav}>
            {menuItems.map(({ path, label }, i) => (
              <ScrollLink
                activeClass='active'
                sx={styles.nav.navLink}
                to={path}
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                key={i}
              >
                {label}
              </ScrollLink>
            ))}
          </Flex>

          {/* <Link path='/pages/login' ml={2} label='Login' sx={styles.headerBtn} variant='buttons.primary' /> */}

          <MobileDrawer />
        </Container>
      </header>
    </DrawerProvider>
  )
}

const styles = {
  headerBtn: {
    fontSize: '16px',
    fontWeight: 700,
    backgroundColor: '#FCF2E8',
    display: ['none', null, null, null, 'inline-block']
  },
  header: {
    color: 'text_white',
    fontWeight: 'normal',
    py: '25px',
    width: '100%',
    position: 'fixed',
    top: 0,
    left: 0,
    backgroundColor: 'transparent',
    transition: 'all 0.4s ease',
    '&.sticky': {
      backgroundImage: `url(${Bg_header.src})`,
      color: 'text',
      py: '15px',
      boxShadow: '0 1px 2px rgba(0, 0, 0, 0.06)'
    }
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    maxWidth: '1430px',
    '@media(max-width:1440px)': {
      maxWidth: '1230px'
    },
    '@media screen and (max-width: 991px)': {
      justifyContent: 'space-between'
    }
  },
  nav: {
    mx: 'auto',
    display: 'flex',
    justifyContent: 'space-around',
    '@media screen and (max-width: 991px)': {
      display: 'none'
    },
    navLink: {
      fontSize: '16px',
      textDecoration: 'none',
      color: '#fff',
      mx : '10px',
      fontWeight: '400',
      cursor: 'pointer',
      lineHeight: '1.2',
      // mr: '48px',
      transition: '500ms',
      ':last-child': {
        mr: '0'
      },
      '&:hover, &.active': {
        color: 'primary'
      }
    }
  }
}
