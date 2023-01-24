import React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

export default function StudentTasksGrid({ studentId, handleClose }) {
  const [tasks, setTasks] = React.useState([]);

  React.useEffect(() => {
    fetch(`/students/${studentId}`)
      .then((r) => r.json())
      .then((data) => setTasks(data.tasks));
  }, []);

  const columns = [
    { field: "id", headerName: "id", width: 50 },
    { field: "title", headerName: "title", width: 250 },
    { field: "solution", headerName: "solution", width: 200 },
    { field: "comment", headerName: "comment", width: 400 },
  ];

  function handleGoBack() {
    handleClose();
  }

  return (
    <div
      style={{
        height: 400,
        width: "70%",
        backgroundColor: "white",
        borderRadius: "7px",
        padding: "10px",
      }}
    >
      <DataGrid
        rows={tasks}
        columns={columns}
        pageSize={12}
        rowsPerPageOptions={[5]}
        components={{ Toolbar: GridToolbar }}
      />
      <Button fullWidth variant="contained" onClick={handleGoBack}>
        Back to tasks
      </Button>
    </div>
  );
}
