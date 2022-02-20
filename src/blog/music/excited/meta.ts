import { AlbumType } from "../album";

import cover from "./cover.jpg";
import wallpaper from "./wallpaper.jpg";

export default {
  album: "Excited",
  date: "2016-03-14T00:00:00.000Z",
  cover: cover,
  wallpaper: wallpaper,
  genre: "Dance",
  upc: "5063011896104",
  tracks: [
    {
      title: "Excited",
      isrc: "GX38U2290377",
      duration: 264,
    },
  ],
  services: [
    {
      name: "Spotify",
      url: "https://open.spotify.com/track/251FaYD7a39s6iIFiZT90X",
    },
    {
      name: "Apple Music",
      url: "https://music.apple.com/album/excited/1609665764",
    },
    {
      name: "YouTube",
      url: "https://youtu.be/MxqFutVj8O4",
    },
    {
      name: "SoundCloud",
      url: "https://soundcloud.com/mikeheddes/excited",
    },
  ],
} as AlbumType;
