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
    description: lorem.sentence(randomInt(17)),
    authors: Array(randomInt(4, 1)).fill().map(name.findName),
    pubDate: Date.now(),
    body: lorem.paragraphs(randomInt(4, 1), '\n\n'),
    theme: themes[randomInt(themes.length - 1)],
    heroImageUrl: 'https://images.unsplash.com/photo-1508182390781-8dd476c3237c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=eeb978f1ebd12334e7b08117fcaad01d&auto=format&fit=crop&w=2102&q=80',//'https://source.unsplash.com/random',
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
    authors: Array(randomInt(4, 1)).fill().map(name.findName),
    pubDate: Date.now(),
    body: lorem.paragraphs(randomInt(4, 1), '\n\n'),
    theme: themes[randomInt(themes.length - 1)],
    heroImageUrl: 'https://images.unsplash.com/photo-1509720412848-e552165849be?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b37b01c7a5c03afe53f7b446ea068773&auto=format&fit=crop&w=934&q=80', //'https://source.unsplash.com/1600x900/?nature,water',
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
