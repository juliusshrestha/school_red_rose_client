// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Chip from '@mui/material/Chip'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import Typography from '@mui/material/Typography'
import TableContainer from '@mui/material/TableContainer'
import TrendingUp from 'mdi-material-ui/TrendingUp'
import axiosInstance from '../../axios/axiosInstance'
import { useState, useEffect } from 'react'
import { getCompData } from '../../axios/context/getCompDetails'

// const rows = [
//   {
//     age: 27,
//     status: 'current',
//     date: '09/27/2018',
//     name: 'Sally Quinn',
//     salary: '$19586.23',
//     email: 'eebsworth2m@sbwire.com',
//     designation: 'Human Resources Assistant'
//   },
//   {
//     age: 61,
//     date: '09/23/2016',
//     salary: '$23896.35',
//     status: 'professional',
//     name: 'Margaret Bowers',
//     email: 'kocrevy0@thetimes.co.uk',
//     designation: 'Nuclear Power Engineer'
//   },
//   {
//     age: 59,
//     date: '10/15/2017',
//     name: 'Minnie Roy',
//     status: 'rejected',
//     salary: '$18991.67',
//     email: 'ediehn6@163.com',
//     designation: 'Environmental Specialist'
//   },
//   {
//     age: 30,
//     date: '06/12/2018',
//     status: 'resigned',
//     salary: '$19252.12',
//     name: 'Ralph Leonard',
//     email: 'dfalloona@ifeng.com',
//     designation: 'Sales Representative'
//   },
//   {
//     age: 66,
//     status: 'applied',
//     date: '03/24/2018',
//     salary: '$13076.28',
//     name: 'Annie Martin',
//     designation: 'Operator',
//     email: 'sganderton2@tuttocitta.it'
//   },
//   {
//     age: 33,
//     date: '08/25/2017',
//     salary: '$10909.52',
//     name: 'Adeline Day',
//     status: 'professional',
//     email: 'hnisius4@gnu.org',
//     designation: 'Senior Cost Accountant'
//   },
//   {
//     age: 61,
//     status: 'current',
//     date: '06/01/2017',
//     salary: '$17803.80',
//     name: 'Lora Jackson',
//     designation: 'Geologist',
//     email: 'ghoneywood5@narod.ru'
//   },
//   {
//     age: 22,
//     date: '12/03/2017',
//     salary: '$12336.17',
//     name: 'Rodney Sharp',
//     status: 'professional',
//     designation: 'Cost Accountant',
//     email: 'dcrossman3@google.co.jp'
//   }
// ]

const statusObj = {
  true: { color: 'info' },
  false: { color: 'error' }
}

const DashboardTable = () => {
  const [rows, setRows] = useState([])

  useEffect(() => {
    getCompData()
      .then(data => {
        // console.log('blog data received ->', data)
        setRows(data.data)

        // console.log('Type of data', typeof rows)
      })
      .catch(error => {
        //   console.log('error ->', error);
        return error
      })
  }, [])

  return (
    <Card>
      <TableContainer>
        <Table sx={{ minWidth: 800 }} aria-label='table in dashboard'>
          <TableHead>
            <TableRow>
              <TableCell>Post Title</TableCell>
              <TableCell>Desc</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Options</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Array.from(rows).map((element ,index)=> (
              <TableRow hover key={element.title+index} sx={{ '&:last-of-type td, &:last-of-type th': { border: 0 } }}>
                <TableCell sx={{ py: theme => `${theme.spacing(0.5)} !important` }}>
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography sx={{ fontWeight: 500, fontSize: '0.875rem !important' }}>{element.title}</Typography>
                    <Typography variant='caption'>{rows.designation}</Typography>
                  </Box>
                </TableCell>
                <TableCell>{element.desc}</TableCell>
                <TableCell>{element.compCategory}</TableCell>
                <TableCell>{element.createdAt}</TableCell>

                <TableCell>
                  <Chip
                    label={rows.status}
                    color={statusObj[element.popUp].color}
                    sx={{
                      height: 24,
                      fontSize: '0.75rem',
                      textTransform: 'capitalize',
                      '& .MuiChip-label': { fontWeight: 500 }
                    }}
                  />
                </TableCell>
                <TableCell>
                  <a href='./post-update/'>
                    <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
                      <path
                        fill='none'
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M6 11V6.2c0-1.12 0-1.68.218-2.108c.192-.377.497-.682.874-.874C7.52 3 8.08 3 9.2 3H14m6 6v8.804c0 1.118 0 1.677-.218 2.104a2.002 2.002 0 0 1-.874.874C18.48 21 17.92 21 16.803 21H13m7-12c-.004-.285-.014-.466-.056-.639a1.993 1.993 0 0 0-.24-.578c-.123-.202-.295-.374-.641-.72l-3.125-3.125c-.346-.346-.52-.52-.721-.643a1.999 1.999 0 0 0-.578-.24c-.173-.041-.353-.052-.639-.054M20 9h0m0 0h-2.803c-1.118 0-1.678 0-2.105-.218a2 2 0 0 1-.874-.874C14 7.48 14 6.92 14 5.8V3M9 14l2 2m-7 5v-2.5l7.5-7.5l2.5 2.5L6.5 21H4Z'
                      />
                    </svg>
                  </a>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  )
}

export default DashboardTable
