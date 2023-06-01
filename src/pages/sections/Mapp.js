import React from 'react'
import BlockTitle from '@/@core/components/block-title'

const Mapp = () => {
  return (
    <div>
        <BlockTitle sx = {styles.blockTitle}
        heading = "Find Us at"/>
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d113347.23356209781!2d84.9982926!3d27.4037768!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb48cf3ad13d91%3A0x7905f4bf995fafde!2sRed%20Rose%20English%20Boarding%20School!5e0!3m2!1sen!2snp!4v1685607581157!5m2!1sen!2snp" width="100%" height="450px" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  )
}

const styles = {
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

export default Mapp
