import { Box, List, ListItem } from "@mui/material";
import "./header.css";
import SearchIcon from "./Vector (4).svg";
import { useUser } from "../../context/UserContextProvider";

const Headerbar = () => {
  const { setSearch } = useUser();

  const onHandleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <Box className="custom-header-div">
      <List className="custom-header">
        <ListItem className="header-list">Music</ListItem>
        <ListItem className="header-list">Podcast</ListItem>
        <ListItem className="header-list">Live</ListItem>
        <ListItem className="header-list">Radio</ListItem>
      </List>
      <List className="search-list-item">
        <ListItem className="search-input-main">
          <input
            type="text"
            placeholder="Search"
            className="search-input-field"
            onChange={onHandleChange}
          />
          <img
            src={SearchIcon}
            // src="your-image-url.png"
            alt="Search Icon"
            className="search-icon"
          />
        </ListItem>
      </List>
    </Box>
  );
};

export default Headerbar;
