import React from 'react'
import theme from '../../../theme'
import { ThemeProvider } from 'theme-ui'
import { StickyProvider } from '@/@core/context/app/app.provider'
import { VideoProvider } from '../../../@core/context/video/video.provider'
import Layout from '../../../@core/components/layout'
import {Flex} from 'theme-ui'
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll'
import menuItems from '../../../layouts/components/header/header.data'
import Banner from 'src/pages/sections/banner'
import About_banner from 'src/pages/sections/About_banner'
import PopularCourse from 'src/pages/sections/popular-course'
import Services from './Services'
import Image from 'src/assets/home/about.jpg'

function index() {
  return (
    <ThemeProvider theme={theme}>
      <VideoProvider>
        <Layout>
          {/* <Flex as='nav' sx={styles.nav}>
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
          </Flex> */}
          <About_banner/>
          <PopularCourse subtitle = "" title = "Introduction"/>
          <Services subtitle = "Our Services" grid = 'f' title = "What we offer" text = "Enim irure exercitation commodo magna in labore deserunt esse anim elit nulla culpa. Fugiat dolore pariatur consectetur dolor irure proident Lorem fugiat enim laborum. Cillum exercitation aliquip labore ullamco eu ad sit sunt irure ea. Veniam dolore occaecat do excepteur nostrud ullamco est velit officia exercitation tempor." image = {Image.src}/>
          <Services subtitle = "Our Services" grid = 'true' title = "Quality Education" text = "Enim irure exercitation commodo magna in labore deserunt esse anim elit nulla culpa. Fugiat dolore pariatur consectetur dolor irure proident Lorem fugiat enim laborum. Cillum exercitation aliquip labore ullamco eu ad sit sunt irure ea. Veniam dolore occaecat do excepteur nostrud ullamco est velit officia exercitation tempor." image = {Image.src}/>
        </Layout>
            </VideoProvider>
    </ThemeProvider>
  )
}


index.getLayout = page => page

export default index;

const styles = {
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
    },
  
}