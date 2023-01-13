import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Divider } from '@mui/material';





export const avatar2 = (
    <React.Fragment>
        <ListItemButton>
            <ListItemIcon>
                <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText>
                Student 1
            </ListItemText>
        </ListItemButton>

    </React.Fragment>

)

// export const avatar = (
//   <React.Fragment>
//       <ListItemButton>
//           <ListItemIcon>
//               <AccountCircleIcon />
//           </ListItemIcon>
//           <ListItemText>
//               Supervisor 1
//           </ListItemText>
//       </ListItemButton>

//   </React.Fragment>
// )

// export const mainListItems = (
//   <React.Fragment>
//     <ListItemButton onClick={(event)=>console.log(event.target.textContent)}>
//       <ListItemIcon>
//         <DashboardIcon />
//       </ListItemIcon>
//       <ListItemText primary="My Tasks" />
//     </ListItemButton>

//     <Divider sx={{ my: 1 }} />

//     <ListItemButton>
//       <ListItemIcon>
//         <AssignmentIcon />
//       </ListItemIcon>
//       <ListItemText primary="My Students" />
//     </ListItemButton>

//     <Divider sx={{ my: 1 }} />
    
//     <ListItemButton>
//       <ListItemIcon>
//         <AssignmentIcon />
//       </ListItemIcon>
//       <ListItemText primary="Lecturers" />
//     </ListItemButton>

//   </React.Fragment>
// );

export const mainListItems2 = (
    <React.Fragment>

      <ListItemButton>
        <ListItemIcon> <DashboardIcon /></ListItemIcon>
        <ListItemText primary="My Tasks" />
      </ListItemButton>

      <Divider sx={{ my: 1 }} />

      <ListItemButton>
        <ListItemIcon> <AssignmentIcon /></ListItemIcon>
        <ListItemText primary="My Supervisors" />
      </ListItemButton>

      <Divider sx={{ my: 1 }} />

      <ListItemButton>
        <ListItemIcon> <AssignmentIcon /></ListItemIcon>
        <ListItemText primary="My Lecturers" />
      </ListItemButton>
    </React.Fragment>
  );

