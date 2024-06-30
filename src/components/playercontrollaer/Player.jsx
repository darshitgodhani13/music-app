import React, { useEffect, useRef, useState } from "react";
import "./player.css";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Slider,
  IconButton,
  Box,
  Drawer,
  List,
} from "@mui/material";
import PlayArrow from "./assets/play.svg";
import SkipPrevious from "./assets/prev.svg";
import SkipNext from "./assets/next.svg";
import Shuffle from "./assets/Random.svg";
import ShuffleSelect from "./assets/Randomselect.svg";
import Repeat from "./assets/Repeat.svg";
import RepeatSelect from "./assets/Repeatselect.svg";
import PauseIcon from "./assets/pause.svg";
import { Howl } from "howler";
import { useUser } from "../../context/UserContextProvider";

const Player = () => {
  const { filteredSongs, setSelectSong, playInList, playInListFlags } =
    useUser();

  let songslist = filteredSongs;

  const [currentSong, setCurrentSong] = useState(songslist[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const soundRef = useRef(null);
  const [isShuffle, setIsShuffle] = useState(false);
  const [isRepeat, setIsRepeat] = useState(false);

  const handleSongEnd = () => {
    if (isRepeat) {
      soundRef.current.play();
    } else {
      handleSkipNext();
    }
  };

  useEffect(() => {
    if (playInList) {
      if (currentSong === playInList && isPlaying) {
        setIsPlaying(false);
      } else {
        setIsPlaying(true);
        setCurrentSong(playInList);
        setSelectSong(playInList);
      }
    }
  }, [playInList, playInListFlags]);

  useEffect(() => {
    if (soundRef.current) {
      soundRef.current.unload();
    }
    soundRef.current = new Howl({
      src: [currentSong.song],
      onend: handleSongEnd,
      onload: () => setDuration(soundRef.current.duration()),
    });
    if (isPlaying) {
      soundRef.current.play();
    }
    return () => {
      if (soundRef.current) {
        soundRef.current.unload();
      }
    };
  }, [currentSong]);

  useEffect(() => {
    if (isPlaying) {
      soundRef.current.play();
    } else {
      soundRef.current.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (soundRef.current && isPlaying) {
        setProgress(soundRef.current.seek());
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isPlaying]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
    setSelectSong(currentSong);
  };

  const handleSkipPrevious = () => {
    const currentIndex = songslist.findIndex(
      (song) => song.id === currentSong.id
    );
    const prevIndex = (currentIndex - 1 + songslist.length) % songslist.length;
    setCurrentSong(songslist[prevIndex]);
    setSelectSong(songslist[prevIndex]);
    setProgress(0);
  };

  const handleSkipNext = () => {
    console.log(songslist, "handleSkipNext");
    let nextIndex;
    const currentIndex = songslist.findIndex(
      (song) => song.id === currentSong.id
    );
    if (isShuffle) {
      nextIndex = Math.floor(Math.random() * songslist.length);
    } else {
      nextIndex = (currentIndex + 1) % songslist.length;
    }
    setCurrentSong(songslist[nextIndex]);
    setSelectSong(songslist[nextIndex]);
    setProgress(0);
  };

  const handleSliderChange = (event, newValue) => {
    setProgress(newValue);
    if (soundRef.current) {
      soundRef.current.seek(newValue);
    }
  };

  const toggleShuffle = () => {
    setIsShuffle(!isShuffle);
    setIsRepeat(false);
  };

  const toggleRepeat = () => {
    setIsRepeat(!isRepeat);
    setIsShuffle(false);
  };
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
        <div className="card-heading">Now Playing</div>
        <CardMedia
          component="img"
          height="140"
          image={currentSong.image}
          alt={currentSong.title}
          sx={{ borderRadius: "10px" }}
        />
        <CardContent>
          <div className="card-text2">{currentSong.title}</div>
          <div className="card-text3">Michael Jackson</div>
          <Box display="flex" alignItems="center">
            <Typography
              variant="body2"
              sx={{
                mr: 2,
                fontSize: "13px",
                fontFamily: "Poppins",
                fontWeight: 500,
              }}
            >
              {Math.floor(progress / 60)}:
              {Math.floor(progress % 60)
                .toString()
                .padStart(2, "0")}
            </Typography>
            <Slider
              aria-label="time-indicator"
              value={progress}
              min={0}
              max={duration}
              onChange={handleSliderChange}
              sx={{ color: "white" }}
            />
            <Typography
              variant="body2"
              sx={{
                ml: 2,
                fontSize: "13px",
                fontFamily: "Poppins",
                fontWeight: 500,
              }}
            >
              {Math.floor(duration / 60)}:
              {Math.floor(duration % 60)
                .toString()
                .padStart(2, "0")}
            </Typography>
          </Box>
          <Box display="flex" justifyContent="space-between">
            <IconButton
              sx={{ color: isRepeat ? "yellow" : "white" }}
              onClick={toggleRepeat}
            >
              <img src={isRepeat ? RepeatSelect : Repeat} alt="Repeat" />
            </IconButton>
            <IconButton sx={{ color: "white" }} onClick={handleSkipPrevious}>
              <img src={SkipPrevious} alt="Previous" />
            </IconButton>
            <IconButton
              sx={{ color: "white", fontSize: "large" }}
              onClick={handlePlayPause}
            >
              {isPlaying ? (
                <img src={PauseIcon} alt="pause" />
              ) : (
                <img src={PlayArrow} alt="Play" />
              )}
            </IconButton>
            <IconButton sx={{ color: "white" }} onClick={handleSkipNext}>
              <img src={SkipNext} alt="Next" />
            </IconButton>
            <IconButton
              sx={{ color: isShuffle ? "yellow" : "white" }}
              onClick={toggleShuffle}
            >
              <img src={isShuffle ? ShuffleSelect : Shuffle} alt="Shuffle" />
            </IconButton>
          </Box>
        </CardContent>
      </Card>
    </div>
  );
};

export default Player;
