import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import Box from "@mui/material/Box";
import CreateStudentForm from "./CreateStudentForm";
import DeleteStudentConfirmationAlert from "./DeleteStudentConfirmationAlert";
import Backdrop from "@mui/material/Backdrop";
import Alert from "@mui/material/Alert";


export default function SupervisorStudents({ students }) {
  const [displayedItem, setDisplayedItem] = React.useState("")
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
          <CreateStudentForm setSuccess={setSuccess} handleClose={handleClose} />
        )
      : setDisplayedItem(<CreateStudentForm setSuccess={setSuccess} handleClose={handleClose} />);
  };


  const handleDelete = (studentId) => {
    console.log(studentId)
    handleOpen();
    displayedItem === ""
      ? setDisplayedItem(
          <DeleteStudentConfirmationAlert setDeleteSuccess={setDeleteSuccess} studentId={studentId} handleClose={handleClose} />
        )
      : setDisplayedItem(
          <DeleteStudentConfirmationAlert setDeleteSuccess={setDeleteSuccess} studentId={studentId} handleClose={handleClose} />
        );
  };

  const renderDeleteButton = (params) => {
    return (
      <strong>
        <Button
          variant="contained"
          color="primary"
          size="small"
          onClick={(e) =>{handleDelete(params.row.id) }}
        >
          Delete
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
              My Students
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
              Enroll New Student
            </Button>
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



    </>
  );
}
