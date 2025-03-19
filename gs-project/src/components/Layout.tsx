import React, { useState } from "react";
import { AppBar, Toolbar, IconButton, Typography, Drawer, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Sidebar from "./Sidebar"; // Import Sidebar component

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(true); // Sidebar state

  return (
    <Box sx={{ display: "flex" }}>
      {/* Navbar */}
      <AppBar position="fixed" sx={{ backgroundColor: "#1976d2", zIndex: 1201 }}>
        <Toolbar>
          {/* Sidebar Toggle Button */}
          <IconButton 
            edge="start" 
            color="inherit" 
            aria-label="menu" 
            onClick={() => setSidebarOpen(!isSidebarOpen)}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>

          {/* Company Logo */}
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Company Logo
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Sidebar Drawer (Responsive) */}
      <Drawer 
        variant="persistent" 
        open={isSidebarOpen} 
        sx={{ 
          width: isSidebarOpen ? 250 : 0, 
          flexShrink: 0, 
          [`& .MuiDrawer-paper`]: { 
            width: 250, 
            top: "64px" // Prevents overlap with navbar 
          } 
        }}
      >
        <Sidebar />
      </Drawer>

      {/* Main Content */}
      <Box component="main" sx={{ flexGrow: 1, p: 3, mt: "64px" }}>
        {children}
      </Box>
    </Box>
  );
};

export default Layout;









// import React, { useState } from "react";
// import NavBar from "./NavBar";
// import Sidebar from "./Sidebar";
// import { Box } from "@mui/material";

// const Layout = ({ children }: { children: React.ReactNode }) => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Sidebar state

//   return (
//     <Box display="flex" flexDirection="column" minWidth="0px">
//       {/* NavBar at the Top */}
//       <NavBar toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

//       <Box display="flex" flexGrow={1}>
//         {isSidebarOpen && <Sidebar />} {/* Sidebar Below Navbar */}
        
//         <Box flexGrow={1} p={2} overflow="auto">
//           {children}
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default Layout;







// // import React, { useState } from "react";
// // import NavBar from "./NavBar";
// // import Sidebar from "./Sidebar";
// // import { Box } from "@mui/material";

// // const Layout = ({ children }: { children: React.ReactNode }) => {
// //   const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Sidebar state

// //   return (
// //     <Box display="flex" minWidth="1080px">
// //       {isSidebarOpen && <Sidebar />} {/* Conditionally render Sidebar */}
// //       <Box flexGrow={1} display="flex" flexDirection="column">
// //         <NavBar toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
// //         <Box p={2} flexGrow={1} overflow="auto">
// //           {children}
// //         </Box>
// //       </Box>
// //     </Box>
// //   );
// // };

// // export default Layout;



// // // import React from "react";
// // // import NavBar from "./NavBar";
// // // import Sidebar from "./Sidebar";
// // // import { Box } from "@mui/material";

// // // const Layout = ({ children }: { children: React.ReactNode }) => {
// // //   return (
// // //     <Box display="flex" minWidth="1080px">
// // //       <Sidebar />
// // //       <Box flexGrow={1} display="flex" flexDirection="column">
// // //         <NavBar />
// // //         <Box p={2} flexGrow={1} overflow="auto">
// // //           {children}
// // //         </Box>
// // //       </Box>
// // //     </Box>
// // //   );
// // // };

// // // export default Layout;
