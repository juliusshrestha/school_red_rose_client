import React, { useState } from 'react'
import { Box, Grid, Container, Flex, Image, Heading, Text, Badge, Card } from 'theme-ui'
import { IoIosCheckmarkCircle, IoIosCloseCircle } from 'react-icons/io'
import BlockTitle from '../../@core/components/block-title'
import PriceCard from '../../@core/components/price-card'
import Gallery from '../../pages/sections/Gallery'


const Pricing = () => {
  // const [plan, setPlan] = useState(false)
  // const imageUrls = [
  //   'https://cdn.pixabay.com/photo/2015/12/01/20/28/forest-1072828_960_720.jpg',
  //   'https://images.unsplash.com/photo-1684318551812-63d888cce300?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'
  // ];

  const photos = [
    {
      src: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
      width: 4,
      height: 3
    },
    {
      src: 'https://images.unsplash.com/photo-1627556704302-624286467c65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
      width: 1,
      height: 1
    },
    {
      src: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
      width: 16,
      height: 9
    },
    {
      src: 'https://plus.unsplash.com/premium_photo-1661299341775-b732859b9a3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
      width: 4,
      height: 3
    },
    {
      src:'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
      width: 1,
      height: 1
    }
  ];

  return (
<box>
 <BlockTitle sx={styles.pricing.blockTitle} tagline='Activities' heading='Our Gallery' />
<Grid>
    {/* <div className="gallery" style={{display: 'flex'}}>
    {imageUrls.map((imageUrl, index) => (
      // <img key={index} src={imageUrl} height = "30%" width = "50%" alt={`Image ${index + 1}`} />
      <Card sx={{ borderRadius: '3', boxShadow: '0 8px 16px -4px rgba(0,0,0,.1), 0 0 8px -3px rgba(0,0,0,.1)', }}>
  <Image src={imageUrl} sx={{ borderTopLeftRadius: '3', borderTopRightRadius: '3' }} />
  <Box sx={{ p: '3' }}>
    <Heading as='h2' mb={2} >The Beach Front</Heading>
    <Text mb={3}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</Text>
    <Flex>
      <Badge mr={1}>summer</Badge><Badge mr={1}>photography</Badge><Badge mr={1}>travel</Badge>
    </Flex>
  </Box>
</Card>
    ))}
  </div> */}
  <Gallery photo = {photos}/>
  </Grid>
  </box>
    // <Box as='section' id='pricing' sx={styles.pricing}>
    //   <Container>
    //     <BlockTitle sx={styles.pricing.blockTitle} tagline='Pricing Plan' heading='Choose your pricing policy' />
    //     <Box sx={styles.pricing.btnWrap}>
    //       <Box as='ul' sx={styles.pricing.btnUl}>
    //         <Box
    //           as='li'
    //           className={` ${plan === false ? 'active' : ''}`}
    //           variant='buttons.primary'
    //           sx={styles.pricing.btn}
    //           onClick={() => {
    //             setPlan(false)
    //           }}
    //         >
    //           Monthly Plan
    //         </Box>
    //         <Box
    //           as='li'
    //           className={` ${plan === true ? 'active' : ''}`}
    //           variant='buttons.primary'
    //           sx={styles.pricing.btn}
    //           onClick={() => {
    //             setPlan(true)
    //           }}
    //         >
    //           Annual Plan
    //         </Box>
    //       </Box>
    //     </Box>

    //     <Grid sx={styles.pricing.wrapper}>
    //       {plan === true ? pricingYearlyData.map((price, index) => <PriceCard key={index} data={price} />) : null}
    //       {plan === false ? pricingMonthlyData.map((price, index) => <PriceCard key={index} data={price} />) : null}
    //     </Grid>
    //   </Container>
    // </Box>
  )
}

export default Pricing

const styles = {
  pricing: {
    paddingTop: 100,
    paddingBottom: 150,
    '@media(max-width:991px)': {
      paddingTop: 60,
      paddingBottom: 60
    },
    '@keyframes fadeInUp': {
      from: {
        opacity: 0,
        transform: 'translate3d(0, 100%, 0)'
      },
      to: {
        opacity: 1,
        transform: 'translate3d(0, 0%, 0)'
      }
    },
    '.priceFade': {
      animationName: 'fadeInUp',
      animationDuration: '1s'
    },
    blockTitle: {
      textAlign: 'center',
      marginTop: '60px',
      marginBottom: '60px',
      '@media(max-width: 575px)': {
        marginBottom: '30px',
        marginTop: '30px'
      }
    },
    btnWrap: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: '60px',
      marginTop: '25px'
    },
    btnUl: {
      margin: 0,
      listStyle: 'none',
      backgroundColor: '#F7F8FB',
      padding: '6px',
      borderRadius: '5px',
      display: 'inline-block'
    },
    btn: {
      color: 'black',
      padding: '10px 25px',
      fontSize: 16,
      fontWeight: 500,
      cursor: 'pointer',
      backgroundColor: 'transparent',
      '&:hover': {
        color: 'black',
        backgroundColor: 'transparent'
      },
      '&.active': {
        backgroundColor: '#fff',
        color: 'black',
        boxShadow: '0px 3px 3.8px rgba(38, 78, 118, 0.1)'
      },
      '@media(max-width: 375px)': {
        padding: '10px 22px'
      }
    },
    wrapper: {
      display: 'grid',
      gridGap: '30px',
      gridTemplateColumns: ['1fr', null, null, '1fr 1fr'],
      marginLeft: 'auto',
      marginRight: 'auto',
      width: ['100%', null, null, null, '990px']
    }
  }
}
