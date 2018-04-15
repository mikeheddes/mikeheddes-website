# TO DO
- [Better react boilerplate](https://medium.freecodecamp.org/how-to-build-your-own-react-boilerplate-2f8cbbeb9b3f)
  * [React boilerplate explained](https://github.com/react-boilerplate/react-boilerplate/)
- [Edit HTML head content in React](https://github.com/nfl/react-helmet)
- [Transform class properties w/ Babel](https://babeljs.io/docs/plugins/transform-class-properties/)
- [Code Splitting with React and React Router v4](https://www.youtube.com/watch?v=bUlkq3PDfRY)
  * [Code splitting babel plugin](https://github.com/airbnb/babel-plugin-dynamic-import-node)
  * [React loadable package](https://github.com/thejameskyle/react-loadable)
- [Use styled-components](https://www.styled-components.com)
  * [Compliment package: Polished](https://polished.js.org/)
  * [Ease functions for Polished](http://jaukia.github.io/easie/)
  * [Modular based font size](https://zellwk.com/blog/responsive-modular-scale/) (Use as indicator not as rule!)
- Color based on cover Image
  * [Get colors off image](https://github.com/akfish/node-vibrant/)
  * [Get nearest color of given colors](https://www.npmjs.com/package/nearest-color)
  * [Animate gradient with GSAP](https://greensock.com/forums/topic/13685-morphsvg-animating-gradient-assets/)
- API authentication
  * [Example video](https://www.youtube.com/watch?v=uaizKlOXyfY)
  * [Using node passport](http://www.passportjs.org)
  * [passport-http-bearer](https://github.com/jaredhanson/passport-http-bearer)
  * [Passport GitHub](https://github.com/jaredhanson/passport)
  * [oauth](https://oauth.net)
- [Use fake data when testing](https://github.com/marak/Faker.js/)
  * [Create separate API file with all available calls]()
  * [Moch API](https://medium.freecodecamp.org/rapid-development-via-mock-apis-e559087be066)
  * [Spotify music api](https://github.com/thelinmichael/spotify-web-api-node)
- [Website securitie headers](https://www.youtube.com/watch?v=j-0Bj40juMI)
- [Image processing](https://docs.imgix.com/tutorials)
- [Use React motion for animations](https://github.com/chenglou/react-motion)
  * [Use React-router-transistion for transitions](https://github.com/maisano/react-router-transition)
  * [YouTube tutorials about motion](https://www.youtube.com/channel/UCqVVXHn02RxzFI0rWo36Egg)
- Add linting
- Add testing
  * Jest
  * Mocha
  * other
- [research reselect for Redux](https://github.com/reactjs/reselect)
- [Add react-router-redux](https://github.com/reactjs/react-router-redux)
- [Add GraphQL to api]()
- Chatroom page with websocket connection and ability to sync youtube video in a chat + more REAL SOCIAL activities.



# Portfolio site
Base url: `https://mikeheddes.nl`.

# REST API

3 available endpoints:

- `/api/v1/article`
- `/api/v1/music`
- `/api/v1/event`

## Article schema

Example response code for `/api/v1/article?limit=1`:

```json
[
  {
    "title": "Title of the latest article",
    "articleImageUrl": "http://example.com/image",
    "id": "title_of_the_latest_article",
    "v": 0,
    "articleUrl": "https://mikeheddes.nl/article/title_of_the_latest_article?",
    "theme": "NIGHT",
    "type": "CODE",
    "achievements": [],
    "articleBody": "To be or not to be",
    "pubDate": "2017-12-05T00:00:00.000Z",
    "authors": ["Mike Heddes"],
    "description": "1 sentence intro to article"
  }
]
```
Requirements of the response code:
```javascript
{
  "title": String.isRequired,
  "articleImageUrl": Url.isRequired,
  "id": String.isRequired,
  "v": Number.isRequired,
  "articleUrl": Url.isRequired,
  "theme": ("NIGHT" || "DAY").hasDefault("DAY"),
  "type": ("CODE" || "DESIGN" || "TRAVEL").isOptional,
  "achievements": [{
    "name": String.isRequired,
    "url": Url.isOptional
  }],
  "articleBody": String.isOptional,
  "pubDate": Date.hasDefault(Date.now()),
  "authors": [String.isRequired],
  "description": String.isOptional
}
```
- `isRequired` means it can't be blank.
- `isOptional` means it can be blank.



## Music schema
Example JSON response for `/api/v1/music?limit=1`:
```json
[
  {
    "albumTitle": "Funk Wav Bounces",
    "albumArtist": "Calvin Harris",
    "albumUrl": "http://mikeheddes.nl/music/funk_wav_bounces_vol_1?",
    "albumBannerUrl": "http://example.com/image",
    "albumCoverUrl": "http://example.com/image",
    "id": "funk_wav_bounces_vol_1",
    "genre": "Dance",
    "type": "ALBUM",
    "pLine": "2017 Mike Heddes",
    "description": "",
    "v": 0,
    "achievements": [{
      "name": "Number one on iTunes",
      "url": "https://itunes.com"
    }],
    "actions": [{
      "name": "YouTube",
      "url": "https://youtube.com/mikeheddes?"
    },{
      "name": "Spotify",
      "url": "https://spotify.com/mikeheddes?"
    }],
    "theme": "DAY",
    "pubDate": "2017-01-04T00:00:00.000Z",
    "tracks": [
      {        
        "trackTitle": "Prayers",
        "trackArtist": "",
        "trackDuration": 10000
      },
      {        
        "trackTitle": "Goosebumps",
        "trackArtist": "",
        "trackDuration": 12000
      }            
    ]
  }
]
```

## Event schema
Example JSON response for `/api/v1/event?limit=1`:
```json
[
  {
    "name": "some event name",
    "description": "what the event is about",
    "eventDate": "2017-01-04T00:00:00.000Z",
    "id": "idHash",
    "location": {
      "city": "Amsterdam",
      "state": "North-Holland",
      "country": "The Netherlands",
    },
    "actions": [{
      "name": "Buy tickets",
      "url": "https://example.com/tickets"      
    }]      
  }
]
```

# Redux architecture

```javascript
{
  menu: {
    isVisible: false,
    menuHeight: 0,
    navHeight: 0,
    action: {
      style: 'LINK',
      name: 'Close',
      url: '/article'
    }
  },
  theme: 'DAY',
  notification: {
    isVisible: false,
    title: 'Notification',
    description: 'description',
    options: [{
      name: 'Spotify',
      url: 'http://spotify.com'
    },{
      name: 'Set Night theme',
      onClick: () => setTheme('NIGHT')
    }],
    default: {
      name: 'Cancel',
      onClick: () => setNotificationVisibility(false)
    }
  },
  homeContent: {
    contentType: null,
    contentId: null,
    isValid: false,
    isFetching: false,
    receivedAt: 0,
    errorMessage: null
  }
  contentTypes: {
    article: {
      contentById: {
        someArticleId: 'articleSchemaFromAPI'
      },
      filter: 'SHOW_ALL',
      isFetching: false,
      isValid: false,
      receivedAt: 0
    },
    music: {
      contentById: {
        someMusicId: 'musicSchemaFromAPI'
      },
      filter: 'SHOW_PODCASTS'
      isFetching: false,
      isValid: false,
      receivedAt: 0
    },
    event: {
      contentById: {
        someEventId: 'eventSchemaFromAPI'
      },
      filter: 'SHOW_ALL',
      isFetching: false,
      isValid: false,
      receivedAt: 0
    }    
  }
}
```
