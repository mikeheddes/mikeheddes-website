import faker, {
  lorem,
  name,
  image
} from 'faker';
import * as Vibrant from 'node-vibrant';
import {
  dayColors
} from 'utils/colors';
const nearestColor = require('nearest-color').from(dayColors);

const randomInt = (to = 99, from = 0) => (Math.round(Math.random() * (to - from) + from));
const toId = (id) => id.toLowerCase().replace(/\W+/g, " ").trim().replace(/\s+/g, "_");
const themes = ['DAY', 'NIGHT'];
const categories = ['DESIGN', 'CODE', 'TRAVEL'];
const capitalizeFirstLetter = str => str.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());

export const getArticle = () => {
  const data = {
    title: capitalizeFirstLetter(lorem.words(randomInt(8, 1))),
    description: lorem.sentence(randomInt(17, 3)),
    authors: Array(randomInt(4, 1)).fill().map(name.findName),
    pubDate: Date.now(),
    body: lorem.paragraphs(randomInt(4, 1), '\n\n'),
    theme: themes[randomInt(themes.length - 1)],
    heroImageUrl: 'https://cdn.vox-cdn.com/thumbor/63k4qkTrRoMH0axTSRd--OJQ4E4=/0x0:3000x2000/1820x1213/filters:focal(1260x760:1740x1240)/cdn.vox-cdn.com/uploads/chorus_image/image/58953467/486179460.jpg.0.jpg',//'https://source.unsplash.com/random',
    achievement: Array(randomInt(2)).fill().map(() => ({
      name: lorem.sentence(),
      url: '#'
    })),
    categorie: categories[randomInt(categories.length - 1)],
  }
  return (
    Vibrant.from(data.heroImageUrl).getPalette()
    .then(palette => ({
      ...data,
      id: toId(data.title),
      color: nearestColor(palette.Vibrant.getHex())
    }))
  )
}

export const getMusic = () => {
  const data = {
    title: capitalizeFirstLetter(lorem.words(randomInt(8, 1))),
    description: lorem.sentence(randomInt(17)),
    artist: name.findName(),
    pubDate: Date.now(),
    body: lorem.paragraphs(randomInt(4, 1), '\n\n'),
    theme: themes[randomInt(themes.length - 1)],
    heroImageUrl: 'https://cdn.vox-cdn.com/thumbor/KyBOcJhCVHuYeUXh2ovZvaLaX2Y=/0x0:2040x1360/1820x1213/filters:focal(857x517:1183x843)/cdn.vox-cdn.com/uploads/chorus_image/image/58970135/jbareham_180301_2346_nintendo_switch_0034_mario.0.jpg', //'https://source.unsplash.com/1600x900/?nature,water',
    achievement: Array(randomInt(2)).fill().map(() => ({
      name: lorem.sentence(),
      url: '#'
    })),
    categorie: categories[randomInt(categories.length - 1)],
  }
  return (
    Vibrant.from(data.heroImageUrl).getPalette()
    .then(palette => ({
      ...data,
      id: toId(data.title),
      color: nearestColor(palette.Vibrant.getHex())
    }))
  )
}

export const getHomeContent = () => ({})

export function saveUser(user) {
  return post(`user/${id}`, {
    user: user
  });
}
