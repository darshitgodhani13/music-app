import React, { createContext, useState, useContext, useEffect } from "react";
import { songslist } from "../common/common";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const songList = songslist;
  const [search, setSearch] = useState("");
  const [filteredSongs, setFilteredSongs] = useState(songList);
  const [selectSong, setSelectSong] = useState(null);
  const [playInList, setPlayInList] = useState(null);
  const [playInListFlags, setPlayInListFlags] = useState(false);

  useEffect(() => {
    const filtered = songList.filter((song) =>
      song.title.toLowerCase().includes(search)
    );
    setFilteredSongs(filtered);
  }, [search]);

  const contextValue = {
    setSearch,
    filteredSongs,
    setSelectSong,
    selectSong,
    setPlayInList,
    playInList,
    setPlayInListFlags,
    playInListFlags,
    setFilteredSongs
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
