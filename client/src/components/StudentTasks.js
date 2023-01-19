import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';
import Backdrop from '@mui/material/Backdrop';
import StudentEditTaskForm from "./StudentEditTaskForm";





export default function StudentTasks(  {user, tasks} ) {

  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  
console.log(user)

  function handleUpdate(info) { console.log(info) }
  function handleDelete(info) { console.log(info) }
  function handleClick() { console.log("Create Task Here")}


  const renderEditButton = (params) => {
    return (
        <strong>
            <Button
                variant="contained"
                color="primary"
                size="small"
                onClick={ handleToggle}
            >
              Edit
            </Button>
        </strong>
    )
}

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

const columns = user === "student"? [
  { field: 'id', headerName: 'id', width: 50 },
  { field: 'title', headerName: 'title', width: 150 },
  { field: 'solution', headerName: 'solution', width: 150 },
  { field: 'comment', headerName: 'comment', width: 200 },
  {
    field: 'edit',
    headerName: 'Edit',
    width: 100,
    renderCell: renderEditButton,
    disableClickEventBubbling: true,
},
]
:
[
  { field: 'id', headerName: 'id', width: 50 },
{ field: 'title', headerName: 'title', width: 150 },
{ field: 'solution', headerName: 'solution', width: 150 },
{ field: 'comment', headerName: 'comment', width: 200 },

  {
    field: 'edit',
    headerName: 'Edit',
    width: 100,
    renderCell: renderEditButton,
    disableClickEventBubbling: true,
},
{
  field: 'delete',
  headerName: 'Delete',
  width: 100,
  renderCell: renderDeleteButton,
  disableClickEventBubbling: true,
}
]




  return (
  
  <>
  <Grid item sx={{width: 1}} >
    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }} > 
    <Box sx={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
      <Box sx={{px:2}}>
          <Typography component="h3" variant="h6" gutterBottom> My Tasks </Typography>
        </Box>
        <Box  >
          {user==="student"? <></> : <Button onClick={handleClick} sx={{mb:2}} variant="outlined" color="primary" startIcon={ <AddIcon />}  > Create Task </Button> }
        </Box>
    </Box>     
      
      <div style={{ height: 685, width: '100%' }}>
        <DataGrid rows={tasks} columns={columns} pageSize={10} rowsPerPageOptions={[5]}  />
      </div>
    </Paper>
  </Grid>

    <Backdrop
    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
    open={open}

  >
    <StudentEditTaskForm handleClose={handleClose}/>


  </Backdrop>

  </>
    




  );
}