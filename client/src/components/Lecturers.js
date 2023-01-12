import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';



export default function Lecturers() {
    function handleDelete(info) { console.log(info) }


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







    const columns = [
        { field: 'id', headerName: 'ID', width: 50},
        { field: 'name', headerName: 'Name', width: 150 },
        { field: 'email', headerName: 'Email', width: 150 },
        { field: 'institution', headerName: 'Institution', width: 150 },
        {
            field: 'delete',
            headerName: 'Delete',
            width: 150,
            renderCell: renderDeleteButton,
            disableClickEventBubbling: true,
        },
      ];
      
      const rows = [
        { id: 2, name: 'Lannister', email: 'Cersei', institution: "This is the solution", edit: "This is the comment" },
        { id: 3, name: 'Lannister', email: 'Cersei', institution: "This is the solution", edit: "This is the comment" },
        { id: 2, name: 'Lannister', email: 'Cersei', institution: "This is the solution", edit: "This is the comment" },
        { id: 2, name: 'Lannister', email: 'Cersei', institution: "This is the solution", edit: "This is the comment" },
        { id: 2, name: 'Lannister', email: 'Cersei', institution: "This is the solution", edit: "This is the comment" },
        { id: 2, name: 'Lannister', email: 'Cersei', institution: "This is the solution", edit: "This is the comment" },
        { id: 2, name: 'Lannister', email: 'Cersei', institution: "This is the solution", edit: "This is the comment" },
        { id: 2, name: 'Lannister', email: 'Cersei', institution: "This is the solution", edit: "This is the comment" },
        { id: 2, name: 'Lannister', email: 'Cersei', institution: "This is the solution", edit: "This is the comment" },
        { id: 2, name: 'Lannister', email: 'Cersei', institution: "This is the solution", edit: "This is the comment" },
        { id: 2, name: 'Lannister', email: 'Cersei', institution: "This is the solution", edit: "This is the comment" },
        { id: 2, name: 'Lannister', email: 'Cersei', institution: "This is the solution", edit: "This is the comment" },
        { id: 2, name: 'Lannister', email: 'Cersei', institution: "This is the solution", edit: "This is the comment" },
        { id: 2, name: 'Lannister', email: 'Cersei', institution: "This is the solution", edit: "This is the comment" },
        { id: 2, name: 'Lannister', email: 'Cersei', institution: "This is the solution", edit: "This is the comment" },
        { id: 2, name: 'Lannister', email: 'Cersei', institution: "This is the solution", edit: "This is the comment" },
        { id: 2, name: 'Lannister', email: 'Cersei', institution: "This is the solution", edit: "This is the comment" },
      ];


  return (
    <Grid item xs={12} >
        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }} > 
        <Box sx={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
            <Box sx={{px:2}}>
                <Typography component="h3" variant="h6" gutterBottom> Lecturers </Typography>
              </Box>
              <Box >
                <Button sx={{mb:2}} variant="outlined" color="primary" startIcon={ <AddIcon />} >  Enroll New Lecturer </Button>
              </Box>
          </Box>
            <div style={{ height: 685, width: '100%' }}>
                <DataGrid rows={rows} columns={columns} pageSize={10} rowsPerPageOptions={[5]}  />
            </div>
        </Paper>
  </Grid>
  );
}