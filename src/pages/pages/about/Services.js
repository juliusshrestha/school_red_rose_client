import BlockTitle from '@/@core/components/block-title'
import React from 'react'
import { Span } from 'slate'
import { Box, Container, Grid, Image, Heading, Text } from 'theme-ui'
import line from "../../../assets/home/banner-text-line.png"
import BannerPattern from "../../../assets/home/banner-pattern.png"
function Services(props) {
  if (props.grid == "true"){
    return (
    <Box sx = {styles.layout}> 
        <Grid gap={2} columns={[2, '1fr 1fr']} sx = {{width: '90%',justifyContent: "center", alignItems: "center", paddingTop: "30px", paddingBottom:"50px"}}>
            <Box>
                <Container>
                    <Box>
                        <Heading as = "h3" style={styles.titles.h2}>{props.title}</Heading>
                        <Image src={line.src}/>
                    </Box>
                    <Box sx = {{width: '70%', justifyContent: 'center', alignItems: 'center' }}>
                        <p style={styles.services.p}>{props.text}</p>
                    </Box>
                </Container>
            </Box>
            <Box>
                <Container>
                    <Box sx={styles.bg}>
                        <Image src={props.image} sx = {{position: 'relative', zIndex: 100}}/>
                    </Box>
                </Container>
            </Box>
        </Grid>
    </Box>
  )
}
else{
    return (
    <Box sx = {styles.layout}>        
        <Grid gap={2} columns={[2, '1fr 1fr']} sx = {styles.gridlayout}>
            <Box>
                <Container>
                    <Box>
                        <Heading as = "h3" style={styles.titles.h2}>{props.title}</Heading>
                        <Image src={line.src}/>

                    </Box>
                    <Box sx = {{width: '70%', justifyContent: 'center', alignItems: 'center' }}>
                        <p style={styles.services.p}>{props.text}</p>
                    </Box>
                </Container>
            </Box>
            <Box>
                <Container>
                    <Box sx={styles.bg}>
                        <Image src={props.image} sx = {{position: 'relative', zIndex: 100}}/>
                    </Box>
                </Container>
            </Box>
            </Grid>
    </Box>
    )
}
}
export default Services;

const styles = {
    blockTitle : {
        textAlign: 'center',
        marginTop: '60px',
        marginBottom: '60px',
        '@media(max-width: 575px)': {
          marginBottom: '30px',
          marginTop: '30px'
        }
    },
    services: {
        p: {
            fontSize: '14px',
            textAlign: 'justify',
            textJustify: 'inter-word',
        },
    },
    titles: {
        h2: {
            fontSize: '3em',
            fontWeight: 'bold',
            color: '#8C30F5',
            paddingTop: '20px',
            paddingBottom: '20px',
            "&:after":{
                content: '""',
                width: ['290px', null, null, null, null, '260px', '381px'],
                height: '50px',
                backgroundColor: '#000000',
            }
        },
    },
    gridlayout: {
        direction : 'rtl', 
        width: '90%', 
        paddingTop: "30px", 
        paddingBottom:"50px"
    },
    layout: {
        height: "100vh",
        justifyContent: 'center',
        alignItems: 'center',

    },
    bg: {
        position: 'relative',
        zIndex: 100,
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
        // display: ['none', null, 'block'],
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
    }
    } ,
}