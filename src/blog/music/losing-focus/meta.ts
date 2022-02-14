import { AlbumType } from "../album";

import cover from "./cover.jpg";
import wallpaper from "./wallpaper.jpg";

export default {
  album: "Losing Focus",
  date: "2016-08-21T00:00:00.000Z",
  cover: cover,
  wallpaper: wallpaper,
  genre: "Dance",
  upc: "5057302984120",
  tracks: [
    {
      title: "Losing Focus",
      isrc: "GBSMU3224615",
      duration: 278,
    },
  ],
  services: [
    {
      name: "Spotify",
      url: "https://open.spotify.com/track/0sAvK5xHNVcpkUDuDEHwW3",
    },
    {
      name: "Apple Music",
      url: "https://music.apple.com/album/losing-focus/1185471946",
    },
    {
      name: "YouTube",
      url: "https://youtu.be/NcRE9Pefq0M",
    },
    {
      name: "SoundCloud",
      url: "https://soundcloud.com/mikeheddes/losingfocus",
    },
  ],
} as AlbumType;
