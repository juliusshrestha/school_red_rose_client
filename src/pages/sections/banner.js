import { Box, Flex, Image, Container, Heading, Text, Input, Button } from 'theme-ui'

import React from 'react'
import VideoBtn from '../../@core/components/video-btn'
import { FaStar } from 'react-icons/fa'
import { IoIosSearch } from 'react-icons/io'
import HeroSlider from '../sections/HeroSlider'
import BannerBG from '@/assets/home/banner-bg-1-1.png'
import BannerTextLine from '@/assets/home/banner-text-line.png'
import BannerPattern from '@/assets/home/banner-pattern.png'
import BannerImage from '@/assets/home/banner-image-1.png'

const Banner = () => {

return(
  
    <Box as='section' id='banner' sx={styles.banner}>
      <Container sx={styles.banner.container}>
        <Flex sx={styles.banner.row}>
          <Box sx={styles.banner.col}>
            <Box sx={styles.banner.content}>
              <Heading as='h3'>
                "Empowering<br />
                tomorrow's Leaders"<br />
                with Quality Education
              </Heading>
              <Text as='p'>
                Get your blood tests delivered at let home collect sample <br />
                from the victory of the managments that supplies best <br />
                design system guidelines ever.
              </Text>
            </Box>
          </Box>
          <Box sx={styles.banner.col}>
            <Box sx={styles.banner.imageBox}>
              <Box sx={styles.banner.imageInner}>
                {/* <Image src={BannerImage.src} alt='banner image' /> */}
                <HeroSlider sx = {styles.HeroSlider}/>
              </Box>
            </Box>
          </Box>
        </Flex>
      </Container>
    </Box>
  
  )













  // return (
  //   <Box as='section' id='banner' sx={styles.banner}>
  //     <Container sx={styles.banner.container}>
  //       <Flex sx={styles.banner.row}>
  //         <Box sx={styles.banner.col}>
  //           <Box sx={styles.banner.content}>
  //             <Heading as='h3'>
  //               Learn Design <br />
  //               with Nia Matos
  //             </Heading>
  //             <Text as='p'>
  //               Get your blood tests delivered at let home collect sample <br />
  //               from the victory of the managments that supplies best <br />
  //               design system guidelines ever.
  //             </Text>
  //           </Box>
  //         </Box>
  //         <Box sx={styles.banner.col}>
  //           <Box sx={styles.banner.imageBox}>
  //             <Box sx={styles.banner.imageInner}>
  //               <Image src={BannerImage.src} alt='banner image' />
  //             </Box>
  //           </Box>
  //         </Box>
  //       </Flex>
  //     </Container>
  //   </Box>
  // )
}

export default Banner

const styles = {
  banner: {
    overflowX: 'hidden',
    paddingTop: ['100px', '120px'],
    paddingBottom: ['0px', null, '80px'],
    backgroundImage: ['linear-gradient(-180deg, #E0F5FA 0%, #FFFDE6 100%)', `url(${BannerBG.src})`],
    backgroundPosition: 'left top',
    backgroundRepeat: 'no-repeat',
    container: {
      maxWidth: ['100%', null, null, null, null, '1240px', '1440px']
    },
    HeroSlider: {
      z_index: 1
    },

    row: {
      flexWrap: 'wrap',
      display: 'flex',
      marginLeft: '-15px',
      marginRight: '-15px'
    },
    col: {
      pl: '15px',
      pr: '15px',
      flex: ['1 1 100%', null, '0 0 50%']
    },
    content: {
      paddingRight: [0, 0, 0, 0, '40px', 0, 0],
      h3: {
        lineHeight: 1.18,
        color: 'black',
        fontWeight: 'bold',
        position: 'relative',
        width: '100%',
        fontSize: ['28px', '35px', null, '45px', null, '50px', '85px'],
        maxWidth: ['500px', null, null, null, null, null, '100%'],
        '&:before': {
          content: '""',
          width: ['290px', null, null, null, null, '260px', '381px'],
          height: '15px',
          backgroundImage: `url(${BannerTextLine.src})`,
          backgroundPosition: 'center center',
          backgroundSize: '100% 100%',
          backgroundRepeat: 'no-repeat',
          position: 'absolute',
          bottom: '-15px',
          right: ['15px', null, null, null, null, '140px', '100px'],
          display: ['none', null, null, null, null, 'block']
        }
      },
      p: {
        lineHeight: 2.33,
        color: '#02073E',
        marginTop: ['10px', null, null, '35px'],
        fontSize: ['15px', '18px'],
        pr: ['15px', 0],
        br: {
          display: ['none', null, null, null, null, 'block']
        }
      }
    },
    stars: {
      marginTop: ['0', null, null, null, null, '40px'],
      marginBottom: '20px',
      display: 'flex',
      color: '#02073E',
      fontSize: ['15px'],
      alignItems: 'center',
      lineHeight: 1,
      svg: {
        color: 'primary',
        '+svg': {
          marginLeft: ['3px', null, '5px']
        },
        '&:last-of-type': {
          color: 'rgba(2, 7, 62, 0.2)',
          marginRight: '10px'
        }
      }
    },
    form: {
      position: 'relative',
      width: '100%',
      maxWidth: ['480px', null, null, '520px'],
      boxShadow: '0px 10px 50px rgba(48, 98, 145, 0.08)',
      marginTop: ['15px', '40px'],
      height: ['45px', null, null, '55px', null, null, '70px'],
      marginBottom: ['20px', '30px', null, null, '40px'],

      input: {
        backgroundColor: '#fff',
        position: 'absolute',
        top: 0,
        left: 0,
        paddingLeft: '25px',
        width: '100%',
        height: '100%',
        color: 'rgba(2, 7, 62, .4)',
        boxShadow: 'none !important',
        outline: 'none !important',
        borderRadius: '8px',
        fontSize: ['15px', '16px']
      },
      button: {
        position: 'absolute',
        top: '50%',
        right: '25px',
        padding: 0,
        transform: 'translateY(-50%)',
        fontSize: ['16px', '22px'],
        color: '#02073E',
        backgroundColor: '#fff',
        display: 'flex',
        alignItems: 'center',
        '&:hover': {
          color: '#02073E',
          backgroundColor: '#fff'
        }
      }
    },
    partner: {
      display: 'flex',
      flexDirection: ['column', null, null, null, null, 'row'],
      alignItems: ['flex-start', null, null, null, null, 'center'],
      color: 'rgba(2, 7, 62,.6)',
      fontSize: ['15px', null, '16px'],
      span: {
        display: ['block', null, 'inline-block']
      },
      img: {
        marginLeft: ['0', '0px', null, null, null, '20px'],
        mt: ['20px', null, null, null, null, '0']
      }
    },
    imageBox: {
      display: 'flex',
      justifyContent: ['flex-start', null, null, 'flex-end'],
      marginTop: ['60px', null, null, '0'],
      zIndex: -1

    },
    imageInner: {
      position: 'relative',
      '&:before': {
        content: '""',
        width: '100%',
        height: '100%',
        border: '2px solid #FFDC6B',
        borderRadius: '5px',
        top: '30px',
        left: '30px',
        position: 'absolute',
        zIndex: 0,
        display: ['none', null, 'block'],
        '@media(max-width: 991px)': {
          left: '10px',
          top: '15px',
          height: 'calc(100% - 15px)'
        }
      },
      '&:after': {
        content: '""',
        width: '302px',
        height: '347px',
        backgroundImage: `url(${BannerPattern.src})`,
        backgroundPosition: 'center',
        top: '-30px',
        right: '-73px',
        position: 'absolute',
        zIndex: 0,
        '@media(max-width: 991px)': {
          right: '-10px'
        }
      },
      img: {
        position: 'relative',
        zIndex: 9,
        maxWidth: '100%'
      },
      '.videoBtn': {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
        zIndex: 10
      }
    }
  }
}

// const Banner = () => {
//   return (
//     <Box as='section' id='banner' sx={styles.banner}>
//       <Container sx={styles.banner.container}>
//         <Flex sx={styles.banner.row}>
//           <Box sx={styles.banner.col}>
//             <Box sx={styles.banner.content}>
//               <Heading as='h3'>
//                 "Empowering Tomorrow's Leaders" <br />
//                 with Quality Education
//               </Heading>
//               <Text as='p'>
//                 Red Rose English Boarding School is committed to providing students with a holistic learning experience
//                 that prepares them for success in their future endeavors.
//               </Text>
//             </Box>
//             <Button type='submit' aria-label='search btn' sx={(styles.banner.form.button, { color: '#02073E' })}>
//               Know More..
//             </Button>
//           </Box>
//           <Box sx={styles.banner.col}>
//             <Box sx={styles.banner.imageBox}>
//               <Box sx={styles.banner.imageInner}>
//                 <Image src={`${BannerBG}`} alt='banner image' />
//               </Box>
//             </Box>
//           </Box>
//         </Flex>
//       </Container>
//     </Box>
//   )
// }

// export default Banner

// const styles = {
//   banner: {
//     overflowX: 'hidden',
//     paddingTop: ['100px', '150px'],
//     paddingBottom: ['0px', null, '80px'],
//     backgroundImage: [`url('/images/home/banner-bg-1-1.png')`],
//     backgroundPosition: 'left top',
//     backgroundRepeat: 'no-repeat',
//     container: {
//       maxWidth: ['100%', null, null, null, null, '1240px', '1440px']
//     },
//     row: {
//       flexWrap: 'wrap',
//       display: 'flex',
//       marginLeft: '-15px',
//       marginRight: '-15px'
//     },
//     col: {
//       pl: '15px',
//       pr: '15px',
//       flex: ['1 1 100%', null, '0 0 50%']
//     },
//     content: {
//       paddingRight: [0, 0, 0, 0, '40px', 0, 0],
//       h3: {
//         lineHeight: 1.18,
//         color: '#fff',
//         fontWeight: 'bold',
//         position: 'relative',
//         width: '100%',
//         fontSize: ['28px', '35px', null, '45px', null, '50px', '85px'],
//         maxWidth: ['500px', null, null, null, null, null, '100%'],
//         '&:before': {
//           content: '""',
//           width: ['290px', null, null, null, null, '260px', '381px'],
//           height: '15px',
//           backgroundImage: `url(banner-text-line'`,
//           backgroundPosition: 'center center',
//           backgroundSize: '100% 100%',
//           backgroundRepeat: 'no-repeat',
//           position: 'absolute',
//           bottom: '-15px',
//           right: ['15px', null, null, null, null, '140px', '100px'],
//           display: ['none', null, null, null, null, 'block']
//         }
//       },
//       p: {
//         lineHeight: 2.33,
//         color: '#fff',
//         marginTop: ['10px', null, null, '35px'],
//         fontSize: ['15px', '18px'],
//         pr: ['15px', 0],
//         br: {
//           display: ['none', null, null, null, null, 'block']
//         }
//       }
//     },
//     stars: {
//       marginTop: ['0', null, null, null, null, '40px'],
//       marginBottom: '20px',
//       display: 'flex',
//       color: '#fff',
//       fontSize: ['15px'],
//       alignItems: 'center',
//       lineHeight: 1,
//       svg: {
//         color: 'primary',
//         '+svg': {
//           marginLeft: ['3px', null, '5px']
//         },
//         '&:last-of-type': {
//           color: 'rgba(2, 7, 62, 0.2)',
//           marginRight: '10px'
//         }
//       }
//     },
//     form: {
//       position: 'relative',
//       width: '100%',
//       maxWidth: ['480px', null, null, '520px'],
//       boxShadow: '0px 10px 50px rgba(48, 98, 145, 0.08)',
//       marginTop: ['15px', '40px'],
//       height: ['45px', null, null, '55px', null, null, '70px'],
//       marginBottom: ['20px', '30px', null, null, '40px'],

//       input: {
//         backgroundColor: '#fff',
//         position: 'absolute',
//         top: 0,
//         left: 0,
//         paddingLeft: '25px',
//         width: '100%',
//         height: '100%',
//         color: 'rgba(2, 7, 62, .4)',
//         boxShadow: 'none !important',
//         outline: 'none !important',
//         borderRadius: '8px',
//         fontSize: ['15px', '16px']
//       },
//       button: {
//         position: 'absolute',
//         top: '50%',
//         right: '25px',
//         padding: 0,
//         transform: 'translateY(-50%)',
//         fontSize: ['16px', '22px'],
//         color: '#02073E',
//         backgroundColor: '#fff',
//         display: 'flex',
//         alignItems: 'center',
//         '&:hover': {
//           color: '#02073E',
//           backgroundColor: '#fff'
//         }
//       }
//     },
//     partner: {
//       display: 'flex',
//       flexDirection: ['column', null, null, null, null, 'row'],
//       alignItems: ['flex-start', null, null, null, null, 'center'],
//       color: 'rgba(2, 7, 62,.6)',
//       fontSize: ['15px', null, '16px'],
//       span: {
//         display: ['block', null, 'inline-block']
//       },
//       img: {
//         marginLeft: ['0', '0px', null, null, null, '20px'],
//         mt: ['20px', null, null, null, null, '0']
//       }
//     },
//     imageBox: {
//       display: 'flex',
//       justifyContent: ['flex-start', null, null, 'flex-end'],
//       marginTop: ['60px', null, null, '0']
//     },
//     imageInner: {
//       position: 'relative',
//       '&:before': {
//         content: '""',
//         width: '100%',
//         height: '100%',
//         border: '2px solid #FFDC6B',
//         borderRadius: '5px',
//         top: '30px',
//         left: '30px',
//         position: 'absolute',
//         zIndex: 2,
//         display: ['none', null, 'block'],
//         '@media(max-width: 991px)': {
//           left: '10px',
//           top: '15px',
//           height: 'calc(100% - 15px)'
//         }
//       },
//       '&:after': {
//         content: '""',
//         width: '302px',
//         height: '347px',
//         backgroundImage: `url('/images/home/banner-pattern')`,
//         backgroundPosition: 'center',
//         top: '-30px',
//         right: '-73px',
//         position: 'absolute',
//         zIndex: 1,
//         '@media(max-width: 991px)': {
//           right: '-10px'
//         }
//       },
//       img: {
//         position: 'relative',
//         zIndex: 9,
//         maxWidth: '100%'
//       },
//       '.videoBtn': {
//         position: 'absolute',
//         top: '50%',
//         left: '50%',
//         transform: 'translate(-50%,-50%)',
//         zIndex: 10
//       }
//     }
//   }
// }
