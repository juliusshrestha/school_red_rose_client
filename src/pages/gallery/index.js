// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'
import { styled } from '@mui/material/styles'
import MuiTab from '@mui/material/Tab'

// ** Icons Imports
import Post from 'mdi-material-ui/post'
import LockOpenOutline from 'mdi-material-ui/LockOpenOutline'
import InformationOutline from 'mdi-material-ui/InformationOutline'

// ** Demo Tabs Imports
import TabAlbum from 'src/views/image-upload/TabAlbum'
import TabGallery from 'src/views/image-upload/TabGallery'

// ** Third Party Styles Imports
import 'react-datepicker/dist/react-datepicker.css'

const Tab = styled(MuiTab)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    minWidth: 100
  },
  [theme.breakpoints.down('sm')]: {
    minWidth: 67
  }
}))

const TabName = styled('span')(({ theme }) => ({
  lineHeight: 1.71,
  fontSize: '0.875rem',
  marginLeft: theme.spacing(2.4),
  [theme.breakpoints.down('md')]: {
    display: 'none'
  }
}))

const Gallery = () => {
  // ** State
  const [value, setValue] = useState('album')
  const message = ''

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Card>
      <TabContext value={value}>
        <TabList
          onChange={handleChange}
          aria-label='post-upload tabs'
          sx={{ borderBottom: theme => `1px solid ${theme.palette.divider}` }}
        >
          {' '}
          <Tab
            value='album'
            label={
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Post />
                <TabName>Creat your ALbums</TabName>
              </Box>
            }
          />
          <Tab
            value='photo'
            label={
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Post />
                <TabName>Post your Photos</TabName>
              </Box>
            }
          />
        </TabList>
        <TabPanel sx={{ p: 0 }} value='album'>
          <TabAlbum />
        </TabPanel>
        <TabPanel sx={{ p: 0 }} value='photo'>
          <TabGallery />
        </TabPanel>
      </TabContext>
    </Card>
  )
}

export default Gallery
