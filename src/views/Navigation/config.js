// import articles from 'containers/ArticlesOverview/Loadable'
// import about from 'containers/About/Loadable'
// import music from 'containers/MusicOverview/Loadable'
import home from '../Home/Loadable'

export default {
  links: [
    {
      title: 'Home',
      to: '/',
      preload: home.loadAsync,
    },
    {
      title: 'Articles',
      to: '/articles',
      // preload: articles.preload,
      preload: () => {},
    },
    {
      title: 'Music',
      to: '/music',
      // preload: music.preload,
      preload: () => {},
    },
    {
      title: 'About',
      to: '/about',
      // preload: about.preload,
      preload: () => {},
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
