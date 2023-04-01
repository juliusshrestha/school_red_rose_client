// ** React Imports
import React from 'react'
import { useState } from 'react'

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

// ** Icons Imports
import InputAdornment from '@mui/material/InputAdornment'

import Phone from 'mdi-material-ui/Phone'
import EmailOutline from 'mdi-material-ui/EmailOutline'
import AccountOutline from 'mdi-material-ui/AccountOutline'
import MessageOutline from 'mdi-material-ui/MessageOutline'

import Editor from '../../@core/layouts/components/editor/editor'

import axiosInstance from '../../axios/axiosInstance'
import checkToken from 'src/pages/checkToken'

// ** Icons Imports
import Close from 'mdi-material-ui/Close'

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

const useStyles = makeStyles({
  checkboxContainer: {
    display: 'flex',
    alignItems: 'center',

    margin: '10px 0'
  }
})

const ResetButtonStyled = styled(Button)(({ theme }) => ({
  marginLeft: theme.spacing(4.5),
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    marginLeft: 0,
    textAlign: 'center',
    marginTop: theme.spacing(4)
  }
}))

const TabPost = () => {
  checkToken()

  const { handleSubmit } = useForm({
    mode: 'onBlur'
  })

  // ** State
  const [isChecked, setIsChecked] = useState(false)
  const classes = useStyles()

  const addAccount = async data => {
    try {
      const response = await axiosInstance.post('/comp', data)
      console.log(response.data)
      reset()
    } catch (error) {
      // Sends error to the client side
      response.status(error.response.status).send(error.response.data)
    }
  }

  const handleChange = event => {
    setIsChecked(event.target.checked)
  }

  return (
    <CardContent>
      <form onSubmit={handleSubmit(addAccount)}>
        <Grid container spacing={7}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label='Title'
              placeholder='Leonard Carter'
              name='title'
              InputProps={{
                startAdornment: <InputAdornment position='start'></InputAdornment>
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel>Content Type</InputLabel>
              <Select name='compCategory' label='compCategory' defaultValue='notice'>
                <MenuItem value='notice'>Notice</MenuItem>
                <MenuItem value='news'>News</MenuItem>
                <MenuItem value='download'>Download</MenuItem>
                <MenuItem value='gallery'>Gallery</MenuItem>
                <MenuItem value='events'>Events</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Editor />
          </Grid>
          <Grid item xs={12} marginTop='30px'>
            <FormControlLabel
              control={<Checkbox checked={isChecked} onChange={handleChange} color='primary' />}
              label='Pop Up'
              name='popUp'
            />
          </Grid>
          <Grid item xs={12}>
            <Button type='submit' variant='contained' size='large'>
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </CardContent>
  )
}

export default TabPost
