import React from "react";
import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const NavBar = ({ toggleSidebar }: { toggleSidebar: () => void }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        {/* Sidebar Toggle Button on Navbar */}
        <IconButton edge="start" color="inherit" onClick={toggleSidebar} sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>

        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Company Logo
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;













// import React from "react";
// import { AppBar, Toolbar, Typography, Button, IconButton } from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";

// const NavBar = ({ toggleSidebar }: { toggleSidebar: () => void }) => {
//   return (
//     <AppBar position="static">
//       <Toolbar>
//         {/* Sidebar Toggle Button */}
//         <IconButton edge="start" color="inherit" onClick={toggleSidebar} sx={{ mr: 2 }}>
//           <MenuIcon />
//         </IconButton>
//         <Typography variant="h6" sx={{ flexGrow: 1 }}>
//           Company Logo
//         </Typography>
//         <Button color="inherit">Sign In</Button> {/* Sign In/Out Button */}
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default NavBar;



// // import React from "react";
// // import { AppBar, Toolbar, Typography, Button } from "@mui/material";

// // const NavBar = () => {
// //   return (
// //     <AppBar position="static">
// //       <Toolbar>
// //         <Typography variant="h6" sx={{ flexGrow: 1 }}>
// //           Company Logo
// //         </Typography>
// //         <Button color="inherit">Sign In</Button> {/* Change to Sign Out if authenticated */}
// //       </Toolbar>
// //     </AppBar>
// //   );
// // };

// // export default NavBar;
