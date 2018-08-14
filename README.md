# My portfolio website
See https://mikeheddes.nl

Server side rendered, deployed with Google Firebase.

## Installation and setup

First run `npm run modules` to install all the node_modules.
_The first time cloning the repo or when updating the dependencies in the src folder run `npm run build:dll`._
Then run `npm run start` to start a development environment with hot-reloaded server side rendering.

To get an production environment run `npm run build` followed by `npm run start:prod`.

**For all available commands look at the scripts in the `./package.json`, `./src/package.json` and `./functions/package.json` files.**

## Used technologies
- react
- redux
- react-router-dom
- styled-components
- react-helmet-async
- react-loadable
- react-spring
- @mdx-js/mdx

### Development technologies
- webpack
- babel
- eslint
- stylelint
- prettier
