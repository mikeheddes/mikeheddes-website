---
title: Tree-shaking Node.js Libraries
authors:
  - Mike Heddes
description: Using Rollup to make your library tree-shakable with Webpack
image: ./tree-shaking.jpg
imageMeta:
  title: ‘That Wanaka Tree’ - now a famous photo spot - at first light on the last day of winter. Serene and picturesque.
  credits: Photo by Hamish Clark on Unsplash
publishedAt: 2019-01-28
theme: day
color: blue
---

**TL;DR**<br/>
To make your library tree-shakable by Webpack make sure the following requirements are met.
1. Use ES6 module syntax, `import` and `export` (also after the code is compiled).
2. Separate code in different files (not bundled, set `preserveModules: true` in Rollup).
3. Set the sideEffects flag in `package.json`.

---

When bundeling code tree-shaking makes sure that only the code that is needed to run is included in the build that is loaded by the browser. Branches of the code tree that will never run if they were inculded are "shaken of".

> Tree-shaking means to only include the bits of code your bundle actually needs to run.
>
> [Rich Harris](https://medium.com/@Rich_Harris/tree-shaking-versus-dead-code-elimination-d3765df85c80)


I am working on a npm library that contains React components. With the current build configuration every project using the library includes the entire library regardless of how many components are used. To reduce the bundle size of the users of the library by only including the used components I wanted the library to be tree-shakable by Webpack.

# Test setup
To test whether a configuration made the library tree-shakable I made a new project with [Create React App](https://github.com/facebook/create-react-app). I ejected the test project and added the [Webpack Bundle Analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer) plugin to inspect the bundle created by Webpack.<br/>To test I install the beta version of the library and only import one of its named exports and use it somewhere in the test project to make sure it works. With this setup the bundle analyzer should show that the size of the library in the bundle is smaller than the entire library if tree-shaking is working properly.


# What I did to get it working
### Step 1: Webpack guide
First I read the [Webpack tree-shaking guide](https://webpack.js.org/guides/tree-shaking/) with its conclusion being:

- Use ES2015 module syntax (i.e. `import` and `export`).
- Add a `"sideEffects"` property to your project's `package.json` file.
- Set the configuration option `mode: 'production'`.

I found out that [Webpack currently doesn't output to ES2015 (ES6)](https://stackoverflow.com/questions/50058680/use-webpack-to-output-es6) and that you should use [Rollup](https://rollupjs.org) for this instead. So I made a Rollup config and bundled the library to ES6. I updated the `package.json` to point to the ES6 bundle with the [`"module"`](https://stackoverflow.com/questions/42708484/what-is-the-module-package-json-field-for/42817320) property and left the [`"main"`](https://docs.npmjs.com/files/package.json#main) property to point to the UMD version of the library. Finally I set the `"sideEffects"` property to `false` and released the first beta version. At this point the folder structure is as follows:

```
library
  ├ package.json
  ├ rollup.config.js
  └ src/
    ├ index.js
    └ ...

test-setup
  ├ package.json
  ├ webpack.config.js
  ├ src/
  └ node_modules/
    └ library
      └ bundle.js
```

I used the test setup described above to test this version and saw that this setup **did not enable tree-shaking** for the library.

### Step 2: library source in test source
Now that the Webpack guide did not work I didn't know whether there was an error at the library side with Rollup or at the test setup side with Webpack. To gain more insight into why tree-shaking wasn't working I decided to paste the source code of the library in the source code of the test setup. In the test setup instead of pointing to the library in the `node_modules` I pointed to the index file of the library that contains all the imports and named exports of the library. The folder structure now became:

```
library
  ├ package.json
  ├ rollup.config.js
  └ src/
    ├ index.js
    └ ...

test-setup
  ├ package.json
  ├ webpack.config.js
  └ src/
    └ library
      ├ index.js
      └ ...
```

I tested this setup and saw that despite importing a file that imports all the files of the library it only included the one named export I imported in the test setup, **success!**

### Step 3: library bundle in test source
But not so fast, now we know that tree-shaking with Webpack works but we still don't know whether it didn't work because the library was placed in the `node_modules` folder or because it was bundled to one file. So now instead of pasting the source code of the library I pasted the generated ES6 bundle in the source folder of the test setup. To my surprise this setup included the entire library in the build so **no tree-shaking was done** on the library when using a named export from the bundle.

### Step 4: Babel transpile
To test whether the babel transpilation process when bundling caused an issue that prevented tree-shaking from working. I used the `babel-cli` to transpile all source files individually and then pasted those transpiled files in the source folder of the test environment. Here **tree-shaking keeps working** so Babel had no negative effect on tree-shaking.

# Final library build setup
With the gathered knowledge I was able to create a build setup that is tree-shakable with Webpack. Depending on if you write code with features from ES6 or newer you will need to transpile your code with Babel.

If you're writing older style JavaScript with the exception of ES6 in- and export you are fine by publishing your library with pointing to the `index.js` file of your source code, often `src/index.js` which contains all default and named exports of your library, no babel transpilation needed.

If you need Babel to transpile your code I recommend using Rollup to compile your files to ES6. It is important to set `preserveModules: true` in the Rollup config to keep all the individual files for tree-shaking to work. With Rollup you can add the `rollup-plugin-babel` to do the transpilation. Lastly in your `package.json` let the `"module"` property point to the entry file of the transpiled code, often `dist/index.js`. And it *just works!*

# Tree-shaking requirements
1. Use ES6 module syntax, `import` and `export` (also after the code is compiled).
2. Separate code in different files (not bundled, set `preserveModules: true` in Rollup).
3. Set the sideEffects flag in `package.json`.

I use `styled-components` in the library so I added the `babel-plugin-styled-components` and set the option `pure: true` although this did not have any notable effect in final bundle size.



