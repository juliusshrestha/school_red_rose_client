import { Box, Container } from 'theme-ui'
import React from 'react'
import BlockTitle from '../../@core/components/block-title'
import PopularCard from '../../@core/components/popular-card'

// const popularCourseData = [
//   {
//     title: 'Professional graphic design tutorial full course with exercise file',
//     reviewCount: '5.0 (392 reviews)',
//     watchCount: '2,538 students watched',
//     videoLink: 'L9jU-IIN0ng',
//     starCount: 5,
//     expanded: true,
//     list: [
//       {
//         content: 'How to reduce file pixel dimentions without loosing quality'
//       },
//       {
//         content: 'How to make logo pixel perfects with different extension'
//       },
//       {
//         content: 'Create vector file from restarize layer styles'
//       },
//       {
//         content: 'Make color gradient with photoshop build-in tools'
//       }
//     ]
//   },
//   {
//     title: 'Become ultimate photoshop expert within 30 days',
//     reviewCount: '4.5 (524 reviews)',
//     watchCount: '3,532 students watched',
//     videoLink: 'L9jU-IIN0ng',
//     starCount: 4,
//     expanded: false,
//     list: [
//       {
//         content: 'How to reduce file pixel dimentions without loosing quality'
//       },
//       {
//         content: 'How to make logo pixel perfects with different extension'
//       },
//       {
//         content: 'Create vector file from restarize layer styles'
//       },
//       {
//         content: 'Make color gradient with photoshop build-in tools'
//       }
//     ]
//   },
//   {
//     title: 'After effects animation tutorial with photoshop documents',
//     reviewCount: '5.0 (392 reviews)',
//     watchCount: '1,037 students watched',
//     videoLink: 'L9jU-IIN0ng',
//     starCount: 5,
//     expanded: false,
//     list: [
//       {
//         content: 'How to reduce file pixel dimentions without loosing quality'
//       },
//       {
//         content: 'How to make logo pixel perfects with different extension'
//       },
//       {
//         content: 'Create vector file from restarize layer styles'
//       },
//       {
//         content: 'Make color gradient with photoshop build-in tools'
//       }
//     ]
//   },
//   {
//     title: 'Adobe illustrator vector art design mockup',
//     reviewCount: '5.0 (392 reviews)',
//     watchCount: '1,037 students watched',
//     videoLink: 'L9jU-IIN0ng',
//     starCount: 5,
//     expanded: false,
//     list: [
//       {
//         content: 'How to reduce file pixel dimentions without loosing quality'
//       },
//       {
//         content: 'How to make logo pixel perfects with different extension'
//       },
//       {
//         content: 'Create vector file from restarize layer styles'
//       },
//       {
//         content: 'Make color gradient with photoshop build-in tools'
//       }
//     ]
//   }
// ]

const PopularCourse = () => {
  return (
    <Box as='section' id='courses' sx={styles.popularCourse}>
      <Container>
        <BlockTitle
          sx={styles.popularCourse.blockTitle}
          tagline='#1 Schoool in Nepal'
          heading='ABOUT US'
        />
        {/* {popularCourseData.map((course, index) => (
          <Box sx={styles.popularCourse.col} key={index}>
            <PopularCard
              key={index}
              listData={course.list}
              expanded={course.expanded}
              starCount={course.starCount}
              title={course.title}
              reviewCount={course.reviewCount}
              watchCount={course.watchCount}
              videoLink={course.videoLink}
            />
          </Box>
        ))} */}
        <Box>
          <p>Welcome to our school! We are dedicated to providing quality education and creating a nurturing environment for our students. With experienced teachers and a comprehensive curriculum, we strive to foster academic excellence and personal growth.
        </p>
        <p>
          Our school offers a wide range of educational programs and extracurricular activities to cater to the diverse interests and talents of our students. We believe in the holistic development of each individual, focusing not only on academics but also on character building, creativity, and critical thinking skills.
        </p>
        <p>
          At our school, we prioritize creating a supportive community where students feel valued and encouraged to explore their full potential. We promote a culture of inclusivity, respect, and collaboration, fostering strong relationships among students, teachers, and parents.
        </p>
        <p>
          We are proud of our achievements and the success of our students. If you're looking for an educational institution that promotes excellence, growth, and a passion for learning, we invite you to join our school community.
        </p>
        </Box>
      </Container>
    </Box>
  )
}

export default PopularCourse

const styles = {
  popularCourse: {
    paddingBottom: ['100px'],
    '@media(max-width: 575px)': {
      paddingBottom: '60px'
    },
    blockTitle: {
      textAlign: 'center',
      marginBottom: '60px',
      '@media(max-width: 575px)': {
        marginBottom: '30px'
      }
    },
    col: {}
  }
}
