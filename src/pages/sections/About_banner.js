import React from "react";
import { Container, ThemeProvider } from "theme-ui";
import { Box } from "theme-ui";
import Image from "../../assets/home/about.jpg";
import BlockTitle from '../../@core/components/block-title'

const About_banner = () => {
  return (
    <Box sx = {styles.banner}>
        <Container>
        <BlockTitle
          sx={styles.blockTitle}
          tagline='#1 Schoool in Nepal'
          heading='ABOUT Red Rose'
        />
        </Container>
    </Box>
    )
}

export default About_banner

const styles = {
    banner: {
        height: "100vh",
        width: "100%",
        background: 'rgb(2,0,36)',
        position: 'relative',
        backgroundImage: ['linear-gradient(60deg, rgba(2,0,36,1) 0%, rgba(18,0,4,1) 50%, rgba(109,29,53,0.12226889046634282) 81%, rgba(244,253,255,1) 100%)', `url(${Image.src})`],
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
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
    }