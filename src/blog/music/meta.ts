import type { PostType } from "../post";
import pic from "./cover.jpg";

export default {
  slug: "music",
  title: "Music production",
  description: "Tracks by Mike Heddes",
  date: "2020-03-10",
  subtitle: "Creative",
  image: {
    url: pic,
    alt: "Album stack of Mike Heddes tracks",
  },
} as PostType;
