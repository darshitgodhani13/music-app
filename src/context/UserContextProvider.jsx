import React, { createContext, useState, useContext, useEffect } from "react";
import { songslist } from "../common/common";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const songList = songslist;
  const [search, setSearch] = useState("");
  const [filteredSongs, setFilteredSongs] = useState(songList);

  useEffect(() => {
    const filtered = songList.filter(song =>
      song.title.toLowerCase().includes(search)
    );
    setFilteredSongs(filtered);
  }, [search])
  

  return (
    <UserContext.Provider value={{ setSearch,filteredSongs }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
