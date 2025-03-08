import React, { useState } from "react";
import NavBar from "./NavBar";
import Sidebar from "./Sidebar";
import { Box } from "@mui/material";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Sidebar state

  return (
    <Box display="flex" flexDirection="column" minWidth="0px">
      {/* NavBar at the Top */}
      <NavBar toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

      <Box display="flex" flexGrow={1}>
        {isSidebarOpen && <Sidebar />} {/* Sidebar Below Navbar */}
        
        <Box flexGrow={1} p={2} overflow="auto">
          {children}
        </Box>
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
//     <Box display="flex" minWidth="1080px">
//       {isSidebarOpen && <Sidebar />} {/* Conditionally render Sidebar */}
//       <Box flexGrow={1} display="flex" flexDirection="column">
//         <NavBar toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
//         <Box p={2} flexGrow={1} overflow="auto">
//           {children}
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default Layout;



// // import React from "react";
// // import NavBar from "./NavBar";
// // import Sidebar from "./Sidebar";
// // import { Box } from "@mui/material";

// // const Layout = ({ children }: { children: React.ReactNode }) => {
// //   return (
// //     <Box display="flex" minWidth="1080px">
// //       <Sidebar />
// //       <Box flexGrow={1} display="flex" flexDirection="column">
// //         <NavBar />
// //         <Box p={2} flexGrow={1} overflow="auto">
// //           {children}
// //         </Box>
// //       </Box>
// //     </Box>
// //   );
// // };

// // export default Layout;
