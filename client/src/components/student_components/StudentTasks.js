import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import StudentEditTaskForm from "../student_components/StudentEditTaskForm";
import Alert from "@mui/material/Alert";
import Backdrop from "@mui/material/Backdrop";



export default function StudentTasks({ tasks }) {
  const [displayedItem, setDisplayedItem] = React.useState("")
  const [open, setOpen] = React.useState(false);
  const [editSuccess, setEditSuccess] = React.useState(null);


  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleEdit = (taskId) => {
    handleOpen();
    displayedItem === ""
      ? setDisplayedItem(
          <StudentEditTaskForm
            setEditSuccess={setEditSuccess}
            taskId={taskId}
            handleClose={handleClose}
          />
        )
      : setDisplayedItem(
          <StudentEditTaskForm
            setEditSuccess={setEditSuccess}
            taskId={taskId}
            handleClose={handleClose}
          />
        );
  };

  const renderEditButton = (params) => {
    return (
      <strong>
        <Button
          variant="contained"
          color="primary"
          size="small"
          onClick={(e) => {
            handleEdit(params.row.id);
          }}
        >
          Edit
        </Button>
      </strong>
    );
  };


  const columns = [
    { field: "id", headerName: "id", width: 50 },
    { field: "title", headerName: "title", width: 150 },
    { field: "solution", headerName: "solution", width: 150 },
    { field: "comment", headerName: "comment", width: 200 },
    {
      field: "edit",
      headerName: "Edit",
      width: 100,
      renderCell: renderEditButton,
      disableClickEventBubbling: true,
    },

  ];

  return (
    <>
      <Grid item sx={{ width: 1 }}>
        <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ px: 2 }}>
              <Typography component="h3" variant="h6" gutterBottom>
                My Tasks
              </Typography>
            </Box>
            {editSuccess ? (
              <Alert
                onClose={() => {
                  setEditSuccess(null);
                }}
                sx={{ my: 2}}
                severity="success"
              >
                {editSuccess}
              </Alert>
            ) : (
              <></>
            )}
            
          </Box>

          <div style={{ height: 685, width: "100%" }}>
            <DataGrid
              rows={tasks}
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

    </>
  );
}
