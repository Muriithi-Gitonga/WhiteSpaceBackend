import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';
import CreateStudentForm  from "./CreateStudentForm";


// This will be placed in its own component such that the table can receive props. These props will be the JSON data from the backend 
export default function MyStudents(props) {



  // React.useEffect(()=>{console.log(props.props.students)},[])


  const students = props.props.students

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
  { field: 'start_date', headerName: 'start_date', width: 100},
  { field: 'end_date', headerName: 'end_date', width:100 },
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
  headerName: 'View profile',
  width: 150,
  renderCell: renderViewProfileButton,
  disableClickEventBubbling: true,
}

];




return(
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
          <DataGrid rows={students} columns={columns} pageSize={10} rowsPerPageOptions={[5]}  />
        </div>
    </Paper>
</Grid>
  

)
    


}