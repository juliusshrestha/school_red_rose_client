import { jsx, Heading, Box, Divider, Text, Container, Flex } from 'theme-ui'
import { Link } from '../../../@core/components/link'
import Logo from '../../../@core/components/logo'
import menuItems from '../footer/footer.data'

export default function Footer() {
  return (
 
    <footer sx={styles.footer}>
      <Divider sx={styles.footer.divider} />
      <Flex>
      <Container sx={styles.footer.container}>
        {menuItems.map(({ header, items }, i) => (
          <Box key={i} sx={styles.footer.widget}>
            <Heading sx={styles.footer.title}>{header}</Heading>
            {items.map(({ path, label }, i) => (
              <div><Link sx={styles.footer.text} path={path} key={i} label={label} variant='footer' /></div>
            ))}
          </Box>
        ))}
      </Container>
      <Container>
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d113347.23356209781!2d84.9982926!3d27.4037768!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb48cf3ad13d91%3A0x7905f4bf995fafde!2sRed%20Rose%20English%20Boarding%20School!5e0!3m2!1sen!2snp!4v1685607581157!5m2!1sen!2snp" width="100%" height="150px" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </Container>
      </Flex>
    </footer>
  )
}

const styles = {
  footer: {
    paddingBottom: '60px',
    '@media(max-width: 1024px)': {
      paddingBottom: '70px'
    },
    '@media(max-width: 991px)': {
      paddingBottom: '30px'
    },
    divider: {
      borderColor: '#E5ECF4',
      margin: 0,
      borderWidth: '1px',
      width: '100%',
      maxWidth: '900px',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginBottom: '55px'
    },
    container: {
      maxWidth: '930px',
      paddingLeft: '15px',
      paddingRight: '15px',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr 1fr',
      '@media(max-width: 991px)': {
        gridTemplateColumns: '1fr 1fr'
      }
    },
    widget: {
      '@media(max-width: 991px)': {
        marginBottom: '30px'
      },
      'a:hover': {
        color: 'primary',
        cursor: 'pointer'
      },
      'a+a': {
        marginTop: '6px'
      }
    },
    title: {
      fontSize: '18px',
      fontWeight: 500,
      lineHeight: 1.67,
      margin: 0,
      marginBottom: '14px'
    },
    text: {
      fontSize: '14px',
      cursor: 'pointer'
    }
  }
}
