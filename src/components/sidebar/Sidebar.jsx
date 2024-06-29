// Sidebar.js
import React from "react";
import {
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import "./sidebar.css";
import appLogo from "./assets/Logo.svg";
import HomeLogo from "./assets/Vector.svg";
import TrendLogo from "./assets/Vector (1).svg";
import LibraryLogo from "./assets/Vector (2).svg";
import DiscoverLogo from "./assets/Vector (3).svg";
import SettingLogo from "./assets/Settings.svg";
import LogoutLogo from "./assets/Log Out.svg";

const Sidebar = () => {
  const isLargeScreen = useMediaQuery("(min-width:200px)");

  return (
    <Drawer
      variant="permanent"
      // className={`sidebar ${isLargeScreen ? "large" : "small"}`}
      classes={{ paper: `sidebar ${isLargeScreen ? "large" : "small"}` }}
    >
      <List>
        <List className="heading-main-div">
          <img src={appLogo} alt="" />
          {isLargeScreen && (
            <Typography variant="p" className="logo-heading">
              Dream<span className="logo-heading-span">Music</span>
            </Typography>
          )}
        </List>
        <List>
          <ListItem>
            <ListItemIcon>
              {isLargeScreen && <span className="list-heading">MENU</span>}
            </ListItemIcon>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <img src={HomeLogo} alt="" />
            </ListItemIcon>
            {isLargeScreen && <p className="manu-list">Home</p>}
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <img src={TrendLogo} alt="" />
            </ListItemIcon>
            {isLargeScreen && <p className="manu-list">Trends</p>}
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <img src={LibraryLogo} alt="" />
            </ListItemIcon>
            {isLargeScreen && <p className="manu-list">Library</p>}
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <img src={DiscoverLogo} alt="" />
            </ListItemIcon>
            {isLargeScreen && <p className="manu-list">Discover</p>}
          </ListItem>
        </List>
      </List>

      <List>
        <ListItem>
          <ListItemIcon>
            {isLargeScreen && <span className="list-heading">General</span>}
          </ListItemIcon>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <img src={SettingLogo} alt="" />
          </ListItemIcon>
          {isLargeScreen && <p className="manu-list">Settings</p>}
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <img src={LogoutLogo} alt="" />
          </ListItemIcon>
          {isLargeScreen && <p className="manu-list">Log Out</p>}
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
