import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

export default function DeleteConfirmationAlert({handleClose}) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      title: data.get("title")
    })
    handleClose()
    
  };
  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{ border: 2, borderRadius: "5px", backgroundColor: "white" }}
    >
      <Box
        sx={{
          marginTop: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5" sx={{ color: "primary.dark" }}>
          Are you sure you want to delete this task?
        </Typography>

        {/* <Typography  variant="h6" sx={{ color: "black" }}>
        Title: 
        </Typography> */}
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            
          >
            Yes, I'm sure
          </Button>

          <Button
            fullWidth
            variant="contained"
            sx={{ mb: 2 }}
            onClick={handleClose}
            
          >
            Back to tasks
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
