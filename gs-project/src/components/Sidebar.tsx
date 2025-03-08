import React from "react";
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import StoreIcon from "@mui/icons-material/Store";
import InventoryIcon from "@mui/icons-material/Inventory";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <Drawer variant="permanent" anchor="left">
            <List>
                {/* <ListItem button component={Link} to="/">
          <ListItemIcon><StoreIcon /></ListItemIcon>
          <ListItemText primary="Stores" />
        </ListItem> */}
                <ListItem component={Link} to="/stores" sx={{ textDecoration: "none", color: "inherit" }}>
                    <ListItemIcon><StoreIcon /></ListItemIcon>
                    <ListItemText primary="Stores" />
                </ListItem>

                <ListItem component={Link} to="/skus" sx={{ textDecoration: "none", color: "inherit" }}>
                    <ListItemIcon><InventoryIcon /></ListItemIcon>
                    <ListItemText primary="SKUs" />
                </ListItem>
                <ListItem component={Link} to="/planning" sx={{ textDecoration: "none", color: "inherit" }}>
                    <ListItemIcon><CalendarTodayIcon /></ListItemIcon>
                    <ListItemText primary="Planning" />
                </ListItem>
            </List>
        </Drawer>
    );
};

export default Sidebar;
