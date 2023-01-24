import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import {  GridToolbar } from '@mui/x-data-grid';
import StudentTasksGrid from "./StudentTasksGrid";
import Backdrop from "@mui/material/Backdrop";




export default function LecturerStudents({ students }) {

  const [displayedItem, setDisplayedItem] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  
  function handleView(studentId) {
    handleOpen();

    displayedItem === ""
    ? setDisplayedItem(
        <StudentTasksGrid studentId={studentId} handleClose={handleClose} />
      )
    : setDisplayedItem(<StudentTasksGrid studentId={studentId} handleClose={handleClose} />);
  }
 

  const renderViewButton = (params) => {
    return (
      <strong>
        <Button
          variant="contained"
          color="primary"
          size="small"
          onClick={(e) => {
            handleView(params.row.id);
          }}
        >
          View
        </Button>
      </strong>
    );
  };

 

  const columns = [
    { field: "id", headerName: "ID", width: 50 },
    { field: "name", headerName: "Name", width: 150 },
    { field: "course", headerName: "Course", width: 200 },
    { field: "start_date", headerName: "start_date", width: 100 },
    { field: "end_date", headerName: "end_date", width: 100 },
    { field: "department", headerName: "Department", width: 150 },
    { field: "email", headerName: "Email", width: 150 },
    { field: "institution", headerName: "Institution", width: 80 },
    {
      field: "tasksReport",
      headerName: "Tasks Report",
      width: 200,
      renderCell: renderViewButton,
      disableClickEventBubbling: true,
    }
  ];

  return (
    <Grid item xs={12}>
      <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ px: 2 }}>
            <Typography component="h3" variant="h6" gutterBottom>
              {" "}
              My Students{" "}
            </Typography>
          </Box>
          
        </Box>

        <div style={{ height: 685, width: "100%" }}>
          <DataGrid
            rows={students}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[5]}
            
          />
        </div>
        <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={open}
          >
            {displayedItem}
          </Backdrop>
      </Paper>
    </Grid>
  );
}
