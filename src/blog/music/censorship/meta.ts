import { AlbumType } from "../album";

import cover from "./cover.jpg";
import wallpaper from "./wallpaper.jpg";

export default {
  album: "Cencorship",
  date: "2017-05-05T00:00:00.000Z",
  cover: cover,
  wallpaper: wallpaper,
  genre: "Dance",
  tracks: [
    {
      title: "Censorship",
      duration: 178,
    },
  ],
  services: [
    {
      name: "YouTube",
      url: "https://youtu.be/UELp8TU1LI8",
    },
    {
      name: "SoundCloud",
      url: "https://soundcloud.com/mikeheddes/censorship",
    },
  ],
} as AlbumType;
