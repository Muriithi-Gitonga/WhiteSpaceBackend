import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';



const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'title', headerName: 'Title', width: 130 },
  { field: 'solution', headerName: 'Solution', width: 130 },
  { field: 'comment', headerName: 'Comment', width: 200 },
  {
    field: 'lecturer',
    headerName: 'Lecturer',
    width: 160,
    },
    {
      field: 'edit',
      headerName: 'Edit',
      width:70
    }
];

const rows = [
  { id: 2, title: 'Lannister', description: 'Cersei', solution: "This is the solution", comment: "This is the comment", lecturer: "Nyongesa"},
  { id: 3, title: 'Lannister', description: 'Cersei', solution: "This is the solution", comment: "This is the comment", lecturer: "Nyongesa"},
  { id: 2, title: 'Lannister', description: 'Cersei', solution: "This is the solution", comment: "This is the comment", lecturer: "Nyongesa"},
  { id: 2, title: 'Lannister', description: 'Cersei', solution: "This is the solution", comment: "This is the comment", lecturer: "Nyongesa"},
  { id: 2, title: 'Lannister', description: 'Cersei', solution: "This is the solution", comment: "This is the comment", lecturer: "Nyongesa"},
  { id: 2, title: 'Lannister', description: 'Cersei', solution: "This is the solution", comment: "This is the comment", lecturer: "Nyongesa"},
  { id: 2, title: 'Lannister', description: 'Cersei', solution: "This is the solution", comment: "This is the comment", lecturer: "Nyongesa"},
  { id: 2, title: 'Lannister', description: 'Cersei', solution: "This is the solution", comment: "This is the comment", lecturer: "Nyongesa"},
  { id: 2, title: 'Lannister', description: 'Cersei', solution: "This is the solution", comment: "This is the comment", lecturer: "Nyongesa"},
  { id: 2, title: 'Lannister', description: 'Cersei', solution: "This is the solution", comment: "This is the comment", lecturer: "Nyongesa"},
  { id: 2, title: 'Lannister', description: 'Cersei', solution: "This is the solution", comment: "This is the comment", lecturer: "Nyongesa"},
  { id: 2, title: 'Lannister', description: 'Cersei', solution: "This is the solution", comment: "This is the comment", lecturer: "Nyongesa"},
  { id: 2, title: 'Lannister', description: 'Cersei', solution: "This is the solution", comment: "This is the comment", lecturer: "Nyongesa"},
  { id: 2, title: 'Lannister', description: 'Cersei', solution: "This is the solution", comment: "This is the comment", lecturer: "Nyongesa"},
  { id: 2, title: 'Lannister', description: 'Cersei', solution: "This is the solution", comment: "This is the comment", lecturer: "Nyongesa"},
  { id: 2, title: 'Lannister', description: 'Cersei', solution: "This is the solution", comment: "This is the comment", lecturer: "Nyongesa"},
  { id: 2, title: 'Lannister', description: 'Cersei', solution: "This is the solution", comment: "This is the comment", lecturer: "Nyongesa"},
];

export default function Lecturers() {
  return (

    <Grid item xs={12} >
    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }} > 
    <Typography component="h2" variant="h6" gutterBottom>
      My Tasks
    </Typography>
        <div style={{ height: 685, width: '100%' }}>
        <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[5]}
            checkboxSelection
        />
        </div>
    </Paper>
  </Grid>

  );
}