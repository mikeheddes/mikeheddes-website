import { AlbumType } from "../album";

import cover from "./cover.jpg";
import wallpaper from "./wallpaper.jpg";

export default {
  album: "Fusion",
  date: "2016-01-04T00:00:00.000Z",
  cover: cover,
  wallpaper: wallpaper,
  genre: "Dance",
  upc: "5063011785767",
  tracks: [
    {
      title: "Fusion",
      isrc: "GX38U2290391",
      duration: 245,
    },
  ],
  services: [
    {
      name: "YouTube",
      url: "https://youtu.be/ld4swScNrKk",
    },
    {
      name: "SoundCloud",
      url: "https://soundcloud.com/mikeheddes/mike-heddes-fusion-free",
    },
  ],
} as AlbumType;
