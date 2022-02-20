import { AlbumType } from "../album";

import cover from "./cover.jpg";
import wallpaper from "./wallpaper.jpg";

export default {
  album: "Livin’",
  date: "2019-12-09T00:00:00.000Z",
  cover: cover,
  wallpaper: wallpaper,
  genre: "Dance",
  upc: "5059366947684",
  tracks: [
    {
      title: "Livin’",
      isrc: "GBSMU7285829",
      duration: 246,
    },
  ],
  services: [
    {
      name: "Spotify",
      url: "https://open.spotify.com/track/1ZlERMFeFN8BUSgsmg0Jas",
    },
    {
      name: "Apple Music",
      url: "https://music.apple.com/album/livin/1491180645",
    },
  ],
} as AlbumType;
