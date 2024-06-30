import React from "react";
import "./player.css";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Slider,
  IconButton,
  Box,
} from "@mui/material";
import PlayArrow from "./assets/play.svg";
import SkipPrevious from "./assets/prev.svg";
import SkipNext from "./assets/next.svg";
import Shuffle from "./assets/Random.svg";
import Repeat from "./assets/Repeat.svg";
import Michel from "./assets/Pic.png";

const Player = () => {
  return (
    <div className="player-main-div">
      <Card
        sx={{
          maxWidth: 345,
          bgcolor: "#6B0000",
          color: "white",
          borderRadius: "15px",
          padding: "20px",
        }}
      >
        <Typography variant="h6" component="div">
          Now Playing
        </Typography>
        <CardMedia
          component="img"
          height="140"
          image={Michel}
          alt="Michael Jackson"
        />
        <CardContent>
          <Typography variant="h5" component="div">
            Beat It
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            Michael Jackson
          </Typography>
          <Box display="flex" alignItems="center">
            <Typography variant="body2" sx={{ mr: 2 }}>
              2:15
            </Typography>
            <Slider
              aria-label="time-indicator"
              value={30}
              max={100}
              sx={{ color: "white" }}
            />
            <Typography variant="body2" sx={{ ml: 2 }}>
              4:18
            </Typography>
          </Box>
          <Box display="flex" justifyContent="space-between">
            <IconButton sx={{ color: "white" }}>
              <img src={Repeat} alt="" />
            </IconButton>
            <IconButton sx={{ color: "white" }}>
              <img src={SkipPrevious} alt="" />
            </IconButton>
            <IconButton sx={{ color: "white", fontSize: "large" }}>
              <img src={PlayArrow} alt="" />
            </IconButton>
            <IconButton sx={{ color: "white" }}>
              <img src={SkipNext} alt="" />
            </IconButton>
            <IconButton sx={{ color: "white" }}>
              <img src={Shuffle} alt="" />
            </IconButton>
          </Box>
        </CardContent>
      </Card>
    </div>
  );
};

export default Player;
