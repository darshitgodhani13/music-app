import React, { useEffect, useState } from "react";
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
import { useUser } from "../../context/UserContextProvider";
import musicIcon from "./assets/Vector (5).svg";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const Home = () => {
  const {
    filteredSongs,
    selectSong,
    setPlayInList,
    playInListFlags,
    setPlayInListFlags,
    setFilteredSongs,
  } = useUser();

  const [songs, setSongs] = useState(filteredSongs);

  const moveSong = (dragIndex, hoverIndex) => {
    const draggedSong = songs[dragIndex];
    setSongs((prevSongs) => {
      const updatedSongs = [...prevSongs];
      updatedSongs.splice(dragIndex, 1);
      updatedSongs.splice(hoverIndex, 0, draggedSong);
      return updatedSongs;
    });
  };

  useEffect(() => {
    setFilteredSongs(songs);
  }, [songs]);

  const handleSelectSong = (song) => {
    setPlayInList(song);
    setPlayInListFlags(!playInListFlags);
  };

  const Song = ({ song, index }) => {
    const [{ isDragging }, drag] = useDrag({
      type: "SONG",
      item: { id: song.id, index },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    });

    const [, drop] = useDrop({
      accept: "SONG",
      hover: (item) => {
        if (!drag) {
          return;
        }
        const dragIndex = item.index;
        const hoverIndex = index;

        if (dragIndex === hoverIndex) {
          return;
        }

        moveSong(dragIndex, hoverIndex);
        item.index = hoverIndex;
      },
    });

    const opacity = isDragging ? 0.5 : 1;

    return (
      <TableRow
        ref={(node) => drag(drop(node))}
        key={song.id}
        sx={{
          opacity,
          backgroundColor: song.id === selectSong?.id ? "#520000" : "inherit",
          "&:hover": {
            backgroundColor: song.id === selectSong?.id ? "#520000" : "#f5f5f5",
          },
        }}
        onClick={() => handleSelectSong(song)}
      >
        <TableCell>
          {song.id === selectSong?.id ? (
            <img src={musicIcon} alt="" />
          ) : (
            <span> {index + 1} </span>
          )}
        </TableCell>
        <TableCell component="th" scope="row">
          <span className="img-title">
            {" "}
            <img
              src={song.image}
              alt={song.title}
              style={{
                width: 50,
                height: 50,
                marginRight: "20px",
              }}
            />
            {song.title}
          </span>
        </TableCell>
        <TableCell>{song.playing}</TableCell>
        <TableCell>{song.time}</TableCell>
        <TableCell>{song.album}</TableCell>
      </TableRow>
    );
  };

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
        <DndProvider backend={HTML5Backend}>
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
                {songs.map((song, index) => (
                  <Song key={song.id} song={song} index={index} />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </DndProvider>
      </Box>
    </div>
  );
};

export default Home;
