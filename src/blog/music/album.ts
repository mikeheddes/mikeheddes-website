import { ImageProps } from "next/image";

export type TrackType = {
  title: string;
  isrc?: string;
  duration: number;
};

export type ServiceType = {
  name: string;
  url: string;
};

export type AlbumType = {
  album: string;
  date: string;
  cover: ImageProps["src"];
  wallpaper: ImageProps["src"];
  genre: string;
  upc?: string;
  tracks: TrackType[];
  services: ServiceType[];
};
