import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import Box from "@mui/material/Box";
import Backdrop from "@mui/material/Backdrop";
import SupervisorEditTaskForm from "./SupervisorEditTaskForm";
import DeleteTaskConfirmationAlert from "./DeleteTaskConfirmationAlert";
import CreateTaskForm from "./CreateTaskForm";
import Alert from "@mui/material/Alert";

export default function SupervisorTasks({ tasks }) {
  const [displayedItem, setDisplayedItem] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [success, setSuccess] = React.useState(null);
  const [editSuccess, setEditSuccess] = React.useState(null);
  const [deleteSuccess, setDeleteSuccess] = React.useState(null)

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCreate = () => {
    handleOpen();
    displayedItem === ""
      ? setDisplayedItem(
          <CreateTaskForm setSuccess={setSuccess} handleClose={handleClose} />
        )
      : setDisplayedItem(<CreateTaskForm setSuccess={setSuccess} handleClose={handleClose} />);
  };

  const handleEdit = (taskId) => {
    console.log(taskId);

    handleOpen();
    displayedItem === ""
      ? setDisplayedItem(
          <SupervisorEditTaskForm
            setEditSuccess={setEditSuccess}
            taskId={taskId}
            handleClose={handleClose}
          />
        )
      : setDisplayedItem(
          <SupervisorEditTaskForm
            setEditSuccess={setEditSuccess}
            taskId={taskId}
            handleClose={handleClose}
          />
        );
  };

  const handleDelete = (taskId) => {
    console.log(taskId)
    handleOpen();
    displayedItem === ""
      ? setDisplayedItem(
          <DeleteTaskConfirmationAlert setDeleteSuccess={setDeleteSuccess} taskId={taskId} handleClose={handleClose} />
        )
      : setDisplayedItem(
          <DeleteTaskConfirmationAlert setDeleteSuccess={setDeleteSuccess} taskId={taskId} handleClose={handleClose} />
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

  const renderDeleteButton = (params) => {
    return (
      <strong>
        <Button
          variant="contained"
          color="primary"
          size="small"
          onClick={(e) => {handleDelete(params.row.id)}}
        >
          Delete
        </Button>
      </strong>
    );
  };

  const columns = [
    { field: "id", headerName: "id", width: 50 },
    { field: "title", headerName: "title", width: 250 },
    // { field: "student", headerName: "student", width: 150 },
    { field: "solution", headerName: "solution", width: 200 },
    { field: "comment", headerName: "comment", width: 200 },

    {
      field: "edit",
      headerName: "Edit",
      width: 100,
      renderCell: renderEditButton,
      disableClickEventBubbling: true,
    },
    {
      field: "delete",
      headerName: "Delete",
      width: 100,
      renderCell: renderDeleteButton,
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
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ px: 2 }}>
              <Typography component="h3" variant="h6" gutterBottom>
                My Tasks
              </Typography>
            </Box>
            {success ? (
              <Alert
                onClose={() => {
                  setSuccess(null);
                }}
                sx={{ my: 2 }}
                severity="success"
              >
                {success}
              </Alert>
            ) : (
              <></>
            )}
            {editSuccess ? (
              <Alert
                onClose={() => {
                  setEditSuccess(null);
                }}
                sx={{ my: 2 }}
                severity="success"
              >
                {editSuccess}
              </Alert>
            ) : (
              <></>
            )}
            {deleteSuccess ? (
              <Alert
                onClose={() => {
                  setDeleteSuccess(null);
                }}
                sx={{ my: 2 }}
                severity="success"
              >
                {deleteSuccess}
              </Alert>
            ) : (
              <></>
            )}

            <Box>
              <Button
                onClick={handleCreate}
                sx={{ mb: 2 }}
                variant="outlined"
                color="primary"
                startIcon={<AddIcon />}
              >
                Create Task
              </Button>
            </Box>
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
