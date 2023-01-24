import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

export default function DeleteTaskConfirmationAlert({
  setDeleteSuccess,
  taskId,
  handleClose,
}) {
  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(`/tasks/${taskId}`, {
      method: "DELETE",
    }).then(setDeleteSuccess("Success! Task has been removed"));

    handleClose();
  };

  const handleGoBack = () => {
    handleClose();
  };
  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{ borderRadius: "5px", backgroundColor: "white" }}
    >
      <Box
        sx={{
          marginTop: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          component="h1"
          variant="h5"
          sx={{ textAlign: "center", color: "primary.dark" }}
        >
          Are you sure you want to delete this task?{" "}
        </Typography>

        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}></Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Yes I'm sure
          </Button>

          <Button
            fullWidth
            variant="contained"
            sx={{ mb: 2 }}
            onClick={handleGoBack}
          >
            Back to tasks
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
