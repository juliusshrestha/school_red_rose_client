
import BlockTitle from '@/@core/components/block-title';
import React, { useState } from 'react';
// import Form from 'react-bootstrap/Form';
import { Box, Container } from 'theme-ui';
import {
  Flex,
  Button,
  Label,
  Input,
  Select,
  Textarea,
  Radio,
  Checkbox,
  Slider,
} from 'theme-ui'

function Contact() {
  return (
    <Box sx = {styles.box}>
      <Container>
        <BlockTitle sx={styles.blockTitle}
          tagline='Tell your queries or complaints'
          heading='Contact US'/>
      <Box as="form" onSubmit={(e) => e.preventDefault()}>
  <Label htmlFor="email">Email</Label>
  <Input name="email" id="Email" mb={3} />
  
  <Label htmlFor="Messsage">Write Your Message</Label>
  <Textarea name="Write your message" id="comment" rows={6} mb={3} />

  <Button>Submit</Button>
</Box>
    </Container>
    </Box>
  );
}

const styles = {
  box:{
    height: '100vh',
    display: 'grid',
    // justifyContent: 'center',
    alignItems: 'center',
  },
  blockTitle: {
    textAlign: 'center',
    marginBottom: '60px',
    '@media(max-width: 575px)': {
      marginBottom: '30px'
    }
}
}
export default Contact;