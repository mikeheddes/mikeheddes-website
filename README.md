# My portfolio website
See https://mikeheddes.nl

Server side rendered, deployed with Google Firebase.

## Installation and setup

First run `yarn install` in the root directory to install all dependencies.
Then run `yarn start` to start a development environment with hot-reloaded server side rendering.

To get a production environment run `yarn run build` followed by `yarn run start:prod`.

*When updating the dependencies in the src folder run `yarn build:dll` in the root folder*

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
