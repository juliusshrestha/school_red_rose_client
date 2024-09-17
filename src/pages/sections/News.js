import BlockTitle from '@/@core/components/block-title'
import React from 'react'
import { Box, Container, Heading, Image, Text } from 'theme-ui'
import Image1 from "../../../src/assets/home/photo.jpg"

const News = () => {
  return (
      <Box sx = {{height : "100vh", display : 'block'}}>
        <Container sx = {{pt:'40px', pb : '40px'}}>
            <center>
            <BlockTitle tagline='Latest News' heading="What's Going on on Red Rose" />
            </center>
        </Container>
        <Container> 
            <Box sx = {styles.news}>
                <Box sx = {styles.news.card}>
                    <Box sx = {styles.news.card.image}>
                        <Image src={Image1.src} width="inherit" height="inherit"/>
                    </Box>
                    <Box sx = {styles.news.card.content}>
                        <Box sx = {styles.news.card.content.title}>
                            <Heading as = "h3" style={styles.news.card.content.title.h2}>Red Rose is the best school in Nepal</Heading>
                        </Box>
                        <Box sx = {styles.news.card.content.text}>
                            <p style={styles.news.card.content.text.p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam id tincidunt dapibus, velit diam tincidunt diam, vitae aliquam nunc nisl vitae libero. Sed euismod, diam id tincidunt dapibus, velit diam tincidunt diam, vitae aliquam nunc nisl vitae libero....</p>
                        </Box>
                        <Box>
                            <Text sx = {{textAlign: 'center',  fontSize: '0.8em', color: '#8C0010', fontWeight: 'bold',lineHeight: 1.5, letterSpacing: 'heading',}}>Posted On:<br/> 2023-02-02</Text>
                        </Box>
                    </Box>
                </Box>
               
            </Box>
        </Container>
      </Box>
  )
}

export default News
const styles = {
    news: {
        width: '90%',
        margin: 'auto',
        padding: '20px',
        borderRadius: '5px',
        BorderTop: '10px solid #db3b19',
        boxShadow: '11px 11px 50px -11px rgba(0,0,0,0.52)',
        cursor: 'pointer',
        card: {
            display: 'grid',
            gridTemplateColumns: '1fr 2fr',
            gap: '2em',
            width: '100%',
            height: 'auto',
            image: {
                width: 'auto',
                height: 'auto',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            },
            content: {
                width: '100%',
                height: '100%',

                title: {
                    width: '100%',
                    height: '20%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    h2: {
                        fontSize: '1.5em',
                        fontWeight: 'bold',
                        color: '#8C0010',
                        lineHeight: 1.5,
                        letterSpacing: 'heading',
                        textAlign: 'center',
                        width: '100%',
                        height: '100%',
                    }   
                },
                text: {
                    width: '100%',

                    p: {
                        fontSize: '0.8em',
                        fontWeight: '400',
                        color: '#000',
                        lineHeight: 2,
                        letterSpacing: 'heading',

                    },
                },
            },
        },
    },
}
// Compare this snippet from src/pages/sections/News.js:
// import React from 'react'
