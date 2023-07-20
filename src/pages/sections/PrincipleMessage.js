import React from 'react'
import { Box, Flex, Image, Container, Heading, Text, Input, Button } from 'theme-ui'
import image from '../../assets/home/principal.png'
import BlockTitle from '@/@core/components/block-title'
const PrincipleMessage = () => {
  return (
    <Box sx = {styles.box}>
      <Container>
        <BlockTitle sx={styles.blockTitle}
          tagline='Message from principal'
          heading='Our Principal'/>
        <Flex>
            <Container className='message'>
                <p>
                I extend my heartfelt appreciation for your resilience, support, and collaboration. Your unwavering commitment to learning and well-being is commendable. As we navigate these challenging times, know that we remain dedicated to providing a safe and inclusive environment for growth. Let's continue to work hand in hand, fostering a love for learning, and encouraging each other's success. Together, we will overcome any obstacle and emerge stronger. Stay safe, stay inspired, and remember that we are here for you every step of the 
                </p>
            </Container>
    <Container className='Image'>
        <Image src = {image.src}/>
    </Container>
        </Flex>
        </Container>
    </Box>
  )
}

const styles = {
      blockTitle: {
        textAlign: 'center',
        marginBottom: '60px',
        color: 'white',
        '@media(max-width: 575px)': {
          marginBottom: '30px'
        }
      },

      box:{
        backgroundColor:'#8C0010',
        height: '100vh',
        color: 'white',
        display: 'grid',
        paddingBottom: '10px',
        paddingTop: '10px',
        alignItems: 'center',

      }
    }

export default PrincipleMessage
