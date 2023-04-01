/* eslint-disable react/jsx-no-comment-textnodes */
// ** React Imports
import React from 'react'
import { useCallback, useEffect, useState, useMemo } from 'react'
import { useDropzone } from 'react-dropzone'
import router from 'next/router'

// ** MUI Imports

import Grid from '@mui/material/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Select from '@mui/material/Select'
import { styled } from '@mui/material/styles'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel'

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

import axiosInstance from '../../axios/axiosInstance'
import { getAlbumCategories } from 'src/axios/context/getAlbumCategories'
import checkToken from 'src/pages/checkToken'

// ** Icons Imports
import Close from 'mdi-material-ui/Close'
import { route } from 'next/dist/server/router'
import { valueToPercent } from '@mui/base'
import { width } from '@mui/system'

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
  checkboxContainer: {
    display: 'flex',
    alignItems: 'center',

    margin: '10px 0'
  },
  dropzone: {
    padding: theme.spacing(2),
    borderWidth: 3,
    borderRadius: 2,

    borderColor: theme.palette.grey[500],
    borderStyle: 'dashed',
    backgroundColor: theme.palette.grey[200],
    color: theme.palette.text.secondary
  },

  thumbsContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 16,
    padding: 2
  },
  thumb: {
    display: 'flex',
    direction: 'column',
    borderRadius: 2,
    border: '1px solid #eaeaea',
    marginBottom: 8,
    marginRight: 8,
    marginLeft: 30,
    width: 200,
    height: 200,
    padding: 4,
    boxSizing: 'border-box'
  },
  thumbInner: {
    display: 'flex',
    minWidth: 0,
    overflow: 'hidden'
  },
  img: {
    display: 'block',
    width: 'auto',
    height: '100%'
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

const TabGallery = () => {
  checkToken()

  const classes = useStyles()

  // ** State
  const [dropzoneStyle, setDropzoneStyle] = useState({})
  const [isDragging, setIsDragging] = useState(false)
  const [files, setFiles] = useState([])
  const [selectedAlbum, setSelectedAlbum] = useState('')
  const [albumCategories, setAlbumCategories] = useState([])
  const message = ''

  const isDisabled = useMemo(() => {
    if (!files) return true
    if (!selectedAlbum) return true

    return false
  }, [files, selectedAlbum])
  useEffect(() => {
    // Apply the styling to the Dropzone component
    setDropzoneStyle({
      border: '2px dashed grey',
      backgroundColor: '#f9f9f9',
      minHeight: '100px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '16px',
      color: 'grey',
      cursor: 'pointer'
    })
  }, [])

  const handleSubmit = async event => {
    event.preventDefault()

    try {
      let formData = new FormData()
      formData.append('albumId', selectedAlbum)
      for (let i = 0; i < files.length; i++) {
        console.log(files[i])
        formData.append('fileNames', files[i])
      }

      const response = await axiosInstance.post('/photo', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      })
      const message = response.data
      toast.success(`${message}`, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000,
        hideProgressBar: true
      })
      formData = undefined

      router.push('gallery/')

      console.log(response)
    } catch (error) {
      // Sends error to the client side
      console.log(error)
      const message = error.response
      toast.warn(`${message}`, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000,
        hideProgressBar: true
      })
    }
  }

  const onDrop = useCallback(acceptedFiles => {
    setFiles(prevFiles => [...prevFiles, ...acceptedFiles])
  }, [])

  const { getRootProps, getInputProps } = useDropzone({
    onDragEnter: () => setIsDragging(true),
    onDragLeave: () => setIsDragging(false),
    onDrop
  })

  const fetchAlbumCategories = async () => {
    const response = await getAlbumCategories()
    setAlbumCategories(Object.values(response)) // Convert the object to an array
  }

  const handleAlbumChange = event => {
    setSelectedAlbum(event.target.value)
  }

  const handleResetAll = event => {
    setSelectedAlbum('')
    setFiles('')
  }

  const handleReset = index => {
    setFiles(oldValues => {
      return oldValues.filter((_, i) => i !== index)
    })
  }

  return (
    <CardContent>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <div {...getRootProps()} style={dropzoneStyle} onChange={fetchAlbumCategories}>
              <input {...getInputProps()} />
              <p>Drag and drop some files here, or click to select files</p>
            </div>
          </Grid>

          <Grid display={'flex'} item xs={12}>
            {files.length > 0
              ? files.map((file, index) => (
                  <Grid item key={index}>
                    <Button onClick={() => handleReset(index)}>
                      <Close />
                    </Button>
                    <div className={classes.thumb}>
                      <div className={classes.thumbInner}>
                        <img src={URL.createObjectURL(file)} alt={`File ${index}`} className={classes.img} />
                      </div>
                    </div>
                  </Grid>
                ))
              : undefined}
          </Grid>

          <Grid item xs={12}>
            <FormControl variant='outlined' fullWidth>
              <InputLabel id='demo-simple-select-label'>Album Name</InputLabel>
              <Select
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                style={{ width: '100%' }}
                label='Album Name'
                value={selectedAlbum}
                onChange={handleAlbumChange}
              >
                {albumCategories.map(album => (
                  <MenuItem key={album.albumId} value={album.albumId}>
                    {album.albumName}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Button
              type='submit'
              onClick={handleResetAll}
              style={{ marginTop: '15px' }}
              disabled={isDisabled}
              variant='contained'
              size='large'
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </CardContent>
  )
}

export default TabGallery
