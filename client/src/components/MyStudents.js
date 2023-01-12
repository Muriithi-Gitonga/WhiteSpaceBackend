import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';






// This will be placed in its own component such that the table can receive props. These props will be the JSON data from the backend 
export default function MyStudents() {

  function handleDelete(info) { console.log(info) }
  function handleViewProfile(info) { console.log(info) }


  const renderDeleteButton = (params) => {
    return (
        <strong>
            <Button
                variant="contained"
                color="primary"
                size="small"
                onClick={(e) => {
                    handleDelete(params.row)
                }}
            >
              Delete
            </Button>
        </strong>
        )
    }

  const renderViewProfileButton = (params) => {
    return (
        <strong>
            <Button
                variant="contained"
                color="primary"
                size="small"
                onClick={(e) => {
                    handleViewProfile(params.row)
                }}
            >
              View Profile
            </Button>
        </strong>
        )
    }



const columns = [
  { field: 'id', headerName: 'ID', width: 50 },
  { field: 'name', headerName: 'Name', width: 150 },
  { field: 'course', headerName: 'Course', width: 200 },
  { field: 'startDate', headerName: 'Start Date', width: 100},
  { field: 'endDate', headerName: 'End Date', width:100 },
  { field: 'department', headerName: 'Department', width: 150 },
  { field: 'email', headerName: 'Email', width:150},
  { field: 'institution', headerName: 'Institution', width:80 },
  {
    field: 'delete',
    headerName: 'Delete',
    width: 150,
    renderCell: renderDeleteButton,
    disableClickEventBubbling: true,
},
{
  field: 'viewProfile',
  headerName: 'View rofile',
  width: 150,
  renderCell: renderViewProfileButton,
  disableClickEventBubbling: true,
}



];

const rows = [
  { id: 1, name: 'Peter Maina',course:"Software Engineering",  startDate: "10/01/2024", endDate: "10/01/2024", department:"I.T", email:"kk21@gmail.com", institution:"JKUAT"},
  { id: 2, name: 'Angela Kimathi',course:"Software Engineering",  startDate: "10/01/2024", endDate: "10/01/2024", department:"I.T", email:"kk21@gmail.com", institution:"JKUAT"},
  { id: 3, name: 'Andrew Kamande',course:"Software Engineering",  startDate: "10/01/2024", endDate: "10/01/2024", department:"I.T", email:"kk21@gmail.com", institution:"JKUAT"},
  { id: 4, name: 'Njeri Muguna',course:"Software Engineering",  startDate: "10/01/2024", endDate: "10/01/2024", department:"I.T", email:"kk21@gmail.com", institution:"JKUAT"},
  { id: 5, name: 'Kalonzo Kyalo',course:"Software Engineering",  startDate: "10/01/2024", endDate: "10/01/2024", department:"I.T", email:"kk21@gmail.com", institution:"JKUAT"},
  { id: 6, name: 'Musau Mwende',course:"Software Engineering",  startDate: "10/01/2024", endDate: "10/01/2024", department:"I.T", email:"kk21@gmail.com", institution:"JKUAT"},
  { id: 7, name: 'Leslie Njora',course:"Software Engineering",  startDate: "10/01/2024", endDate: "10/01/2024", department:"I.T", email:"kk21@gmail.com", institution:"JKUAT"},
  { id: 8, name: 'Princeton Mwenda',course:"Software Engineering",  startDate: "10/01/2024", endDate: "10/01/2024", department:"I.T", email:"kk21@gmail.com", institution:"JKUAT"},
  { id: 9, name: 'Larry Madowo',course:"Software Engineering",  startDate: "10/01/2024", endDate: "10/01/2024", department:"I.T", email:"kk21@gmail.com", institution:"JKUAT"},
  { id: 10, name: 'Karani Kiarie',course:"Software Engineering",  startDate: "10/01/2024", endDate: "10/01/2024", department:"I.T", email:"kk21@gmail.com", institution:"JKUAT"},
  { id: 11, name: 'Derek Peterson',course:"Software Engineering",  startDate: "10/01/2024", endDate: "10/01/2024", department:"I.T", email:"kk21@gmail.com", institution:"JKUAT"},
  { id: 12, name: 'Abdul Moha',course:"Software Engineering",  startDate: "10/01/2024", endDate: "10/01/2024", department:"I.T", email:"kk21@gmail.com", institution:"JKUAT"},
  { id: 13, name: 'Chrispus Otieno',course:"Software Engineering",  startDate: "10/01/2024", endDate: "10/01/2024", department:"I.T", email:"kk21@gmail.com", institution:"JKUAT"},
  { id: 14, name: 'Hannington Omwanza',course:"Software Engineering",  startDate: "10/01/2024", endDate: "10/01/2024", department:"I.T", email:"kk21@gmail.com", institution:"JKUAT"},
  { id: 15, name: 'Eliud Ngendo',course:"Software Engineering",  startDate: "10/01/2024", endDate: "10/01/2024", department:"I.T", email:"kk21@gmail.com", institution:"JKUAT"},
  { id: 16, name: 'James Lannnister',course:"Software Engineering",  startDate: "10/01/2024", endDate: "10/01/2024", department:"I.T", email:"kk21@gmail.com", institution:"JKUAT"},
];







  
  return (
    <Grid item xs={12} >
        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }} > 

            <Box sx={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
            <Box sx={{px:2}}>
                <Typography component="h3" variant="h6" gutterBottom> My Students </Typography>
              </Box>
              <Box >
                <Button sx={{mb:2}} variant="outlined" color="primary" startIcon={ <AddIcon />} >  Enroll New Student </Button>
 
              </Box>
          </Box>


            <div style={{ height: 685, width: '100%' }}> 
              <DataGrid rows={rows} columns={columns} pageSize={10} rowsPerPageOptions={[5]}  />
            </div>
        </Paper>
  </Grid>

  );
}