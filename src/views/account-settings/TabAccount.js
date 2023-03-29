// ** React Imports
import { useState, useEffect } from 'react'
import React from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'

import Select from '@mui/material/Select'
import { styled, useTheme } from '@mui/material/styles'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import InputLabel from '@mui/material/InputLabel'
import AlertTitle from '@mui/material/AlertTitle'
import IconButton from '@mui/material/IconButton'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import Button from '@mui/material/Button'
import axiosInstance from '../../axios/axiosInstance'
import checkToken from 'src/pages/checkToken'

// ** Icons Imports
import Close from 'mdi-material-ui/Close'
import { useRouter } from 'next/router'

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

const TabAccount = () => {
  checkToken()

  // ** State
  const [values, setValues] = useState({})
  const [firstName, setfirstName] = useState('')
  const [middleName, setmiddleName] = useState('')
  const [lastName, setlastName] = useState('')
  const [userStatus, setuserStatus] = useState('ACTIVE')
  const [countryCode, setcountryCode] = useState('')
  const [phone, setphone] = useState('')
  const [reset, setreset] = useState('')
  const [saveChanges, setsaveChanges] = useState('')

  // ** Hook
  const theme = useTheme()
  const router = useRouter()

  const handleSubmit = async event => {
    event.preventDefault()

    const dataError = ''
    const userId = localStorage.getItem('userId')
    try {
      const response = await axiosInstance.patch(`user/${userId}/`, {
        firstName,
        middleName,
        lastName,
        userStatus,
        countryCode,
        phone
      })

      // handle successful response
      //console.log(response.data)

      const message = response.data
      toast.success(`${message}`, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000,
        hideProgressBar: true
      })
      router.push('/account-settings/', null, { shallow: true })
    } catch (error) {
      // handle error response
      if (error.response.status === 401) {
        router.push('/pages/login')
      }
      const message = error.response.data
      toast.warn(`${message}`, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000,
        hideProgressBar: true
      })
    }
  }

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const handleReset = prop => event => {
    {
      event.preventDefault()
      event.target.reset()
    }
  }

  const handleMouseDownPassword = event => {
    event.preventDefault()
  }

  return (
    <CardContent>
      <form noValidate autoComplete='off' onSubmit={handleSubmit}>
        <Grid container spacing={7}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label='First Name'
              name='firstName'
              onChange={e => setfirstName(e.target.value)}
              placeholder='John'
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label='Middle Name'
              name='middleName'
              onChange={e => setmiddleName(e.target.value)}
              placeholder='William'
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label='Last Name'
              name='lastName'
              onChange={e => setlastName(e.target.value)}
              placeholder='Doe'
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Status</InputLabel>
              <Select
                label='User Status'
                name='userStatus'
                defaultValue='ACTIVE'
                onChange={e => setuserStatus(e.target.value)}
              >
                <MenuItem value='ACTIVE'>Active</MenuItem>
                <MenuItem value='INACTIVE'>Inactive</MenuItem>
                <MenuItem value='PENDING'>Closed</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              type='number'
              onChange={e => setcountryCode(e.target.value)}
              name='countryCode'
              placeholder='Country Code(977)'
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              type='text'
              onChange={e => setphone(e.target.value)}
              label='Phone'
              name='phone'
              placeholder='(123) 456-7890'
            />
          </Grid>

          <Grid item xs={12}>
            <Button variant='contained' type='submit' sx={{ marginRight: 3.5 }}>
              Save Changes
            </Button>

            <Button type='reset' variant='outlined' onClick={handleReset} color='secondary'>
              Reset
            </Button>
          </Grid>
        </Grid>
      </form>
    </CardContent>
  )
}

export default TabAccount
