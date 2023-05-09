import { Box, Grid, Container } from 'theme-ui'
import React from 'react'
import BlockTitle from '../../@core/components/block-title'
import FavoriteCard from '../../@core/components/favorite-card'

// import fevCardImageOne from "assets/fev-course-1-1.png";
// import fevCardImageTwo from "assets/fev-course-1-2.png";
// import fevCardImageThree from "assets/fev-course-1-3.png";

import { Swiper, SwiperSlide } from 'swiper/react'

const favoriteCourseData = [
  {
    title: 'How to work with prototype design with adobe xd featuring tools',
    image: 'fev-course-1-1'
  },
  {
    title: 'Create multiple artboard by using figma prototyping tools development',
    image: 'fev-course-1-2'
  },
  {
    title: 'Convert your web layout theming easily with sketch zeplin extension',
    image: 'fev-course-1-3'
  }
]

const FavoriteCourse = () => {
  const FavoriteCarousel = {
    spaceBetween: 30,
    slidesPerView: 3,
    breakpoints: {
      0: {
        spaceBetween: 0,
        slidesPerView: 1
      },
      376: {
        spaceBetween: 0,
        slidesPerView: 1
      },
      576: {
        spaceBetween: 0,
        slidesPerView: 1
      },
      768: {
        spaceBetween: 30,
        slidesPerView: 2
      },
      992: {
        spaceBetween: 30,
        slidesPerView: 2
      },
      1200: {
        spaceBetween: 30,
        slidesPerView: 3
      }
    }
  }

  return (
    <Box as='section' sx={styles.fevCourse}>
      <Container sx={styles.fevCourse.container}>
        <BlockTitle
          sx={styles.fevCourse.blockTitle}
          tagline='Quality features'
          heading='Tutorials that people love most'
        />
        <Swiper {...FavoriteCarousel} sx={styles.carousel}>
          {favoriteCourseData.map((course, index) => (
            <SwiperSlide key={index}>
              <FavoriteCard title={course.title} image={course.image} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Box>
  )
}

export default FavoriteCourse

const styles = {
  fevCourse: {
    paddingTop: ['60px', null, null, '80px', '110px'],
    pb: [null, null, null, '30px', '50px', '0'],
    container: {
      maxWidth: 1440,
      '@media(max-width:1440px)': {
        maxWidth: 1240
      },
      '.swiper-container': {
        pb: '30px',
        overflow: [null, null, null, null, null, 'visible']
      }
    },
    blockTitle: {
      textAlign: 'center',
      marginBottom: '30px'
    },
    row: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gridGap: 30,
      '@media(max-width: 991px)': {
        gridTemplateColumns: '1fr 1fr'
      },
      '@media(max-width: 575px)': {
        gridTemplateColumns: '1fr'
      }
    },
    col: {
      display: 'flex'
    }
  }
}
