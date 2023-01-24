import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import CreateLecturerForm from "./CreateLecturerForm";
import DeleteLecturerConfirmationAlert from "./DeleteLecturerConfirmationAlert";
import Alert from "@mui/material/Alert";


export default function SupervisorLecturers({ lecturers }) {
  const [displayedItem, setDisplayedItem] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [success, setSuccess] = React.useState(null);
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
          <CreateLecturerForm setSuccess={setSuccess} handleClose={handleClose} />
        )
      : setDisplayedItem(<CreateLecturerForm setSuccess={setSuccess} handleClose={handleClose} />);
  };

  const handleDelete = (lecturerId) => {
    console.log(lecturerId)
    handleOpen();
    displayedItem === ""
      ? setDisplayedItem(
          <DeleteLecturerConfirmationAlert setDeleteSuccess={setDeleteSuccess} lecturerId={lecturerId} handleClose={handleClose} />
        )
      : setDisplayedItem(
          <DeleteLecturerConfirmationAlert setDeleteSuccess={setDeleteSuccess} lecturerId={lecturerId} handleClose={handleClose} />
        );
  };

  const renderDeleteButton = (params) => {
    return (
      <strong>
        <Button
          variant="contained"
          color="primary"
          size="small"
          onClick={()=>{handleDelete(params.row.id)}}
        >
          Delete
        </Button>
      </strong>
    );
  };

  const columns = [
    { field: "id", headerName: "ID", width: 50 },
    { field: "name", headerName: "Name", width: 150 },
    { field: "email", headerName: "Email", width: 150 },
    { field: "institution", headerName: "Institution", width: 150 },
    {
      field: "delete",
      headerName: "Delete",
      width: 150,
      renderCell: renderDeleteButton,
      disableClickEventBubbling: true,
    },
  ];




  return (
    <>
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
                All Lecturers
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
                sx={{ mb: 2 }}
                variant="outlined"
                color="primary"
                startIcon={<AddIcon />}
                onClick={handleCreate}
              >
                Enroll New Lecturer
              </Button>
            </Box>
          </Box>

          <div style={{ height: 685, width: "100%" }}>
            <DataGrid
              rows={lecturers}
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
