# My portfolio website
See https://mikeheddes.nl

Server side rendered, deployed with Google Firebase.

> **Creating something is simple, making it look simple is hard.**<br />
> Mike Heddes

## Installation and setup

First run `yarn install` in the root directory to install all the node_modules.
*The first time cloning the repo or when updating the dependencies in the src folder run `npm run build:dll`.*
Then run `yarn start` to start a development environment with hot-reloaded server side rendering.

To get an production environment run `yarn run build` followed by `yarm run start:prod`.

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
