import React from "react";
import Headerbar from "../header/Headerbar";
import "./home.css";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import VerifyLogo from "./assets/Group.svg";
import MichaleImg from "./assets/Michael.png";
import Song1Icon from "./assets/1 (1).png";
import Song2Icon from "./assets/2 (1).png";
import Song3Icon from "./assets/3 (1).png";
import Song4Icon from "./assets/4 (1).png";
import Song5Icon from "./assets/5 (1).png";
import { useUser } from "../../context/UserContextProvider";

const Home = () => {


  const { filteredSongs } = useUser();

  return (
    <div className="home-main">
      <Headerbar />
      <Box className="img-relative-div">
        <Box className="home-background">
          <Box className="bg-childe-div">
            <div className="text-group">
              <span className="verified-text-1">
                <img src={VerifyLogo} alt="" />
                <Typography variant="p" className="verified-text">
                  Verified Artist
                </Typography>
              </span>
              <span>
                <Typography variant="p" className="verified-hading-text">
                  Michael Jackson
                </Typography>
              </span>
              <span className="verified-text-2">
                <Typography variant="p" className="verified-text">
                  27.852.501 monthly listeners
                </Typography>
              </span>
            </div>
          </Box>
          <img
            src={MichaleImg}
            alt=""
            style={{ maxWidth: "466px", maxHeight: "452px" }}
            className="michel-icon"
          />
        </Box>
      </Box>
      <Box style={{ padding: "40px 70px" }}>
        <Box className="lis-hading">
          <Typography variant="p" className="list-populer-text">
            Popular
          </Typography>
          <Typography variant="p" className="list-see-text">
            See All
          </Typography>
        </Box>
        <TableContainer
          component={Paper}
          style={{ backgroundColor: "transparent" }}
        >
          <Table
            aria-label="song table"
            style={{ backgroundColor: "transparent" }}
          >
            <TableHead>
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell>Title</TableCell>
                <TableCell>Playing</TableCell>
                <TableCell>Time</TableCell>
                <TableCell>Album</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredSongs?.map((song, index) => (
                <TableRow
                  key={song.id}
                  sx={{
                    backgroundColor: song.highlighted ? "#520000" : "inherit",
                    "&:hover": {
                      backgroundColor: song.highlighted ? "#520000" : "#f5f5f5",
                    },
                  }}
                >
                  <TableCell>{index + 1}</TableCell>
                  <TableCell component="th" scope="row">
                    <span className="img-title">
                      {" "}
                      <img
                        src={song.image}
                        alt={song.title}
                        style={{ width: 50, height: 50,marginRight:"20px" }}
                      />
                      {song.title}
                    </span>
                  </TableCell>
                  <TableCell>{song.playing}</TableCell>
                  <TableCell>{song.time}</TableCell>
                  <TableCell>{song.album}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </div>
  );
};

export default Home;
