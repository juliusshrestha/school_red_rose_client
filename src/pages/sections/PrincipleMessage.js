import React from 'react'
import { Box, Flex, Image, Container, Heading, Text, Input, Button, Grid } from 'theme-ui'
import image from '../../assets/home/principal.jpg'
import BlockTitle from '@/@core/components/block-title'
import signature from '../../assets/home/picasso.svg'
const PrincipleMessage = () => {
  return (
    <Box sx = {styles.box}>
      <Container>
        <BlockTitle sx={styles.blockTitle}
          tagline='Message from principal'
          heading='Our Principal'/>
        <Grid gap = {2} columns = {[2, "2fr 1fr"]}>
            <Container className='message'>
            <p style = {styles.text}>
        Dear Students, Parents, and Faculty Members,
      </p>
      <p style = {styles.text}>
        Welcome to our school division! I am thrilled to begin this academic year with enthusiasm and optimism. As the principal of this esteemed institution, I am committed to fostering an inclusive and nurturing environment where each student can grow, learn, and achieve their full potential.
      </p>
      <p style = {styles.text}>
        Our dedicated team of educators is passionate about providing quality education and creating a positive impact on our students' lives. We believe that education is not just about academic excellence but also about character development and building essential life skills.
      </p>
      <p style = {styles.text}>
        At our school, we encourage curiosity, critical thinking, and creativity. We strive to create a well-rounded educational experience that goes beyond the classroom, encompassing sports, arts, and extracurricular activities to foster holistic development.
      </p>
      <p style = {styles.text}>
        Collaboration between parents, teachers, and students is essential for the success of our students. We value the partnership between the school and our parents, and we encourage open communication to ensure the best possible support for our students' growth and progress.
      </p>
      <p style = {styles.text}>
        Thank you for entrusting us with your children's education. Together, we will create a bright and promising future for our students.
      </p>
      <p style = {styles.text}>
        Wishing you all a fantastic year ahead!
      </p>
            </Container>
          <Container className='Image'>
              <Image src = {image.src} sx = {styles.principal}/>
          </Container>
        </Grid>
        <Image src = {signature.src} sx = {styles.signature}/>
        <hr style={{width: 200}}/>
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
        height: 'auto',
        paddingTop: '50px',
        paddingBottom: '50px',
        color: 'white',
        display: 'grid',
        alignItems: 'center',

      },
    text: {textAlign: 'justify', textJustify: 'inter-word', fontSize: 14},
    signature: {
      position: 'relative',
      bottom: '-20px',
      right: '0',
      width: '200px',
      height: '50px',
    },
    principal: {
      width: '300px',
      height: '400px',
    }

    }

export default PrincipleMessage
