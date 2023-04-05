/* eslint-disable react/jsx-no-duplicate-props */
// ** React Imports
import { useState, useEffect, useMemo } from 'react'
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

  // ** Hook
  const theme = useTheme()
  const router = useRouter()

  // ** State

  const [reset, setreset] = useState('')
  const [saveChanges, setsaveChanges] = useState('')

  const [values, setValues] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    userStatus: 'ACTIVE',
    countryCode: '',
    phone: ''
  })

  const handleSubmit = async event => {
    event.preventDefault()

    const message = ''
    const userId = localStorage.getItem('userId')
    try {
      const { firstName, middleName, lastName, userStatus, countryCode, phone } = values

      const response = await axiosInstance.patch(`user/${userId}/`, {
        firstName: firstName,
        middleName: middleName,
        lastName: lastName,
        userStatus: userStatus,
        countryCode: countryCode,
        phone: phone
      })

      // handle successful response
      //console.log(response.data)

      const message = response.data
      toast.success(`${message}`, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000,
        hideProgressBar: true
      })
      handleReset()
    } catch (error) {
      // handle error response
      console.log(error)
      const message = error.response.data
      toast.warn(`${message}`, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000,
        hideProgressBar: true
      })
    }
  }

  const handleChange = event => {
    console.log(event)
    setValues({ ...values, [event.target.name]: event.target.value })
  }

  const handleReset = event => {
    {
      setValues({ ...values, firstName: '', middleName: '', lastName: '', phone: '', countryCode: '', userStatus: '' })
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
              value={values.firstName}
              onChange={handleChange}
              placeholder='John'
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label='Middle Name'
              name='middleName'
              value={values.middleName}
              onChange={handleChange}
              placeholder='William'
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label='Last Name'
              name='lastName'
              value={values.lastName}
              onChange={handleChange}
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
                onChange={handleChange}
                value={values.userStatus}
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
              // eslint-disable-next-line react/jsx-no-duplicate-props
              value={values.countryCode}
              name='countryCode'
              onChange={handleChange}
              placeholder='Country Code(977)'
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              type='text'
              value={values.phone}
              onChange={handleChange}
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
