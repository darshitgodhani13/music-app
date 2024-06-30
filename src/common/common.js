import Song1Icon from "./assets/images/1 (1).png";
import Song2Icon from "./assets/images/2 (1).png";
import Song3Icon from "./assets/images/3 (1).png";
import Song4Icon from "./assets/images/4 (1).png";
import Song5Icon from "./assets/images/5 (1).png";
import Song1 from "./assets/music/Billie Jean.mp3";
import Song2 from "./assets/music/Beat It.mp3";
import Song3 from "./assets/music/Smooth Criminal.mp3";
import Song4 from "./assets/music/Don’t Stop 'Til You.mp3";
import Song5 from "./assets/music/Rock With.mp3";

export const songslist = [
  {
    id: 1,
    title: "Billie Jean",
    playing: "1.040.811.084",
    time: "4:53",
    album: "Thriller 25 Sup...",
    highlighted: false,
    image: Song1Icon,
    song:Song1,
  },
  {
    id: 2,
    title: "Beat It",
    playing: "643.786.045",
    time: "4:18",
    album: "Thriller 25 Sup...",
    highlighted: true,
    image: Song2Icon,
    song:Song2,
  },
  {
    id: 3,
    title: "Smooth Criminal - 2012 Remaster",
    playing: "407.234.004",
    time: "4:17",
    album: "Thriller 25 Sup...",
    highlighted: false,
    image: Song3Icon,
    song:Song3,
  },
  {
    id: 4,
    title: "Don't Stop 'Til You Get Enough",
    playing: "316.391.952",
    time: "6:05",
    album: "Bad 25th Anni...",
    highlighted: false,
    image: Song4Icon,
    song:Song4,
  },
  {
    id: 5,
    title: "Rock With You - Single Version",
    playing: "268.187.218",
    time: "3:40",
    album: "Off The Wall",
    highlighted: false,
    image: Song5Icon,
    song:Song5, 
  },
];
