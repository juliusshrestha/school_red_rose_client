/* eslint-disable react/jsx-no-comment-textnodes */
// ** React Imports
import React from 'react'
import { useCallback, useEffect, useState, useMemo } from 'react'
import { useDropzone } from 'react-dropzone'
import { useContext } from 'react'
import { useRouter } from 'next/router'

import TabContext from '@mui/lab/TabContext'

// ** MUI Imports

import Grid from '@mui/material/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Select from '@mui/material/Select'
import { styled, useTheme } from '@mui/material/styles'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import { useForm } from 'react-hook-form'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

// ** Icons Imports
import InputAdornment from '@mui/material/InputAdornment'

import Phone from 'mdi-material-ui/Phone'
import EmailOutline from 'mdi-material-ui/EmailOutline'
import AccountOutline from 'mdi-material-ui/AccountOutline'
import MessageOutline from 'mdi-material-ui/MessageOutline'
import { CardActionArea } from '@mui/material'
import Card from '@mui/material/Card'
import Link from '@mui/material/Link'
import CardMedia from '@mui/material/CardMedia'
import CardActions from '@mui/material/CardActions'
import axiosInstance from '../../axios/axiosInstance'
import { getAlbumDetails } from 'src/axios/context/getAlbumDetails'
import checkToken from 'src/pages/checkToken'

// ** Icons Imports
import Close from 'mdi-material-ui/Close'
import { route } from 'next/dist/server/router'
import { valueToPercent } from '@mui/base'
import { width } from '@mui/system'
import { array } from 'prop-types'

const ImgStyled = styled('img')(({ theme }) => ({
  width: 120,
  height: 120,
  marginRight: theme.spacing(6.25),
  borderRadius: theme.shape.borderRadius
}))

const ButtonStyled = styled(Button)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    textAlign: 'center'
  }
}))

const ResetButtonStyled = styled(Button)(({ theme }) => ({
  marginLeft: theme.spacing(4.5),
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    marginLeft: 0,
    textAlign: 'center',
    marginTop: theme.spacing(4)
  }
}))

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },

  close: {
    margin: 5,
    position: 'absolute',
    top: 0,
    left: 0,
    width: 25,
    height: 25,
    color: 'white'
  }
}))

const TabGallery = ({ onTabChange }) => {
  checkToken()

  // ** Hook
  const theme = useTheme()
  const router = useRouter()

  const classes = useStyles()

  // ** State
  const [values, setValues] = useState({ albumName: '', desc: '' })
  const [album, setAlbum] = useState([])
  const [reset, setreset] = useState('')
  const [saveChanges, setsaveChanges] = useState('')
  const value = useContext(TabContext)

  const message = ''
  useEffect(() => {
    getAlbumDetails()
      .then(data => {
        // console.log('blog data received ->', data)
        setAlbum(data.data)

        // console.log('Type of data', typeof rows)
      })
      .catch(error => {
        //   console.log('error ->', error);
        return error
      })
  }, [])

  const handleSubmit = async event => {
    event.preventDefault()

    try {
      const { albumName, desc } = values

      const response = await axiosInstance.post('album', {
        albumName: albumName,
        desc: desc
      })
      const message = response.data
      toast.success(`${message}`, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000,
        hideProgressBar: true
      })

      // router.push('/gallery', null, (shallow = true))
      handleResetAll()
    } catch (error) {
      // Sends error to the client side
      if (error) {
        const message = error.response.data
        toast.warn(`${message}`, {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 2000,
          hideProgressBar: true
        })
      }
    }
  }

  const handleChange = event => {
    setValues({ ...values, [event.target.name]: event.target.value })
  }

  const handleResetAll = event => {
    setValues({ ...values, albumName: '', desc: '' })
  }

  const handleAdd = album => {
    onTabChange('photo', album)
  }

  return (
    <CardContent>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              type='text'
              onChange={handleChange}
              // eslint-disable-next-line react/jsx-no-duplicate-props
              value={values.albumName}
              label='Album Name'
              name='albumName'
              placeholder='Faculty Picnic'
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label='Description'
              name='desc'
              onChange={handleChange}
              value={values.desc}
              placeholder='Photos of Picnic Day 2022. On oscassion...'
            />
          </Grid>

          <Grid item xs={12}>
            <Button type='submit' style={{ marginTop: '15px' }} variant='contained' size='large'>
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
      <h2>Albums</h2>
      <Grid container spacing={2} sx={{ paddingTop: '16px' }}>
        {album.map(eachAlbum => (
          <Grid item xs={12} sm={3} key={eachAlbum.albumId}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component='img'
                  height='140'
                  image={`http://localhost:3000/${eachAlbum?.tblPhoto[0]?.fileNames}`}
                  alt={album.title}
                />
                <CardContent>
                  <Typography gutterBottom variant='h5' component='div'>
                    {eachAlbum.albumName}
                  </Typography>

                  <Typography variant='body2' color='text.secondary'>
                    Photos: {eachAlbum?.tblPhoto.length}
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    {eachAlbum.desc}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <Button onClick={() => handleAdd(eachAlbum)} size='small'>
                Add +
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>
    </CardContent>
  )
}

export default TabGallery
