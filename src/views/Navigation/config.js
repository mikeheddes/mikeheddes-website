import Articles from '../Articles/Loadable'
import About from '../About/Loadable'
import Music from '../Music/Loadable'
import Home from '../Home/Loadable'

export default {
  links: [
    {
      title: 'Home',
      to: '/',
      preload: Home.preload,
    },
    {
      title: 'Articles',
      to: '/articles',
      preload: Articles.preload,
    },
    {
      title: 'Music',
      to: '/music',
      preload: Music.preload,
    },
    {
      title: 'About',
      to: '/about',
      preload: About.preload,
    },
  ],
  size: {
    tablet: 48,
    phone: 44,
    width: 520,
  },
  time: {
    outgoing: 0.48,
    incomming: 0.94,
    standard: 0.62,
  },
}
