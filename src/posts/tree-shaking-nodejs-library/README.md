**TL;DR**<br/>
As a library author, to make your library tree-shakable by Webpack make sure the following requirements are met:

1. Use ES6 module syntax, `import` and `export` (also after the code is transpiled).
2. Code should be in separate files, not bundled in one file. This can be achieved by setting `preserveModules: true` in Rollup.
3. Set the `sideEffects` property in your project’s `package.json` file.

---

When bundling code, tree-shaking makes sure that only the code that is needed to run the application, in my case a website, is included in the build. In web development this is important because it reduces the size of the bundle that is loaded by the browser, thereby reducing the loading time. Branches of the code tree that are not used and thus will never run if they were included are _shaken off_.

> Tree-shaking means to only include the bits of code your bundle actually needs to run.
>
> [Rich Harris](https://medium.com/@Rich_Harris/tree-shaking-versus-dead-code-elimination-d3765df85c80)

I was working on a user interface library that contains React components for a company I used to work for. The build configuration that was in place caused every project that utilized the library to include it entirely, regardless of how many components were being used. I took on the task of figuring out how to make the library tree-shakable by Webpack so only the components that were actually being used were included in the final bundle.

Note that the theory covered in this article can be applied to any kind of ES6 library that wants to be tree-shakable by Webpack, it is not limited to projects using React.

# Test setup
To test whether a build configuration caused the library to be tree-shakable I made a new project with [Create React App](https://github.com/facebook/create-react-app). I ejected the test project and added the [Webpack Bundle Analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer) plugin to inspect the bundle created by Webpack. I installed the beta version of the library in this new project and only imported one of its components using named exports and used it in the test project to make sure it works, like so:

```js
import React from 'react';
import ReactDOM from 'react-dom';
import { Component1 } from 'library';

ReactDOM.render(
 <Component1 />,
 document.getElementById('root')
);
```

With this setup, if tree-shaking is working properly the bundle analyzer should show that the size of the library in the bundle is significantly smaller than the size of the entire library.

### An example
Let's say the library consists of 4 components of 20 kB each, resulting in a library of size 80 kB in total. If tree-shaking is working properly the bundle of the test project should only contain 20 kB of the library because I only imported one component. If the bundle contains the full library (80 kB) then tree-shaking is not working.

# What I did to get it working
### Step 1: Webpack guide
First I read the [Webpack tree-shaking guide](https://webpack.js.org/guides/tree-shaking/), it states the following requirements:

- Use ES2015 module syntax `import` and `export`.
- Add a `sideEffects` property to your project's `package.json` file.
- Set the configuration option `mode: 'production'`.

I found out that as of writing this article [Webpack does not output to ES2015 (ES6)](https://stackoverflow.com/questions/50058680/use-webpack-to-output-es6) but a different JavaScript bundler, [Rollup](https://rollupjs.org), is able to do this. I deleted our Webpack setup and made a Rollup config and bundled the library to ES6. I updated the `package.json` file to point to the ES6 bundle with the [`"module"`](https://stackoverflow.com/questions/42708484/what-is-the-module-package-json-field-for/42817320) property and made the [`"main"`](https://docs.npmjs.com/files/package.json#main) property point to the UMD version of the library as a fallback for when ES6 is not supported by the library user. Finally, I set the `"sideEffects"` property to `false` and released the first beta version. At this point the simplified folder structure of the library and the test setup are as follows:

```
library
 ├ package.json
 ├ rollup.config.js
 └ src
   ├ index.js
   ├ component1.js
   └ component2.js

test-setup
 ├ package.json
 ├ webpack.config.js
 ├ src
 └ node_modules
   └ library
     └ bundle.js
```

The file `test-setup/node_modules/library/bundle.js` contains all the bundled code from `library/src` in ES6 syntax. I used the previously explained test setup to test this version and saw that this configuration **does not enable tree-shaking** the library.

---

### Step 2: library source in the test source
Now that the Webpack guide did not work I did not know whether there was an error at the library side with Rollup or at the test project side with Webpack. To gain more insight into why tree-shaking was not working I decided to paste the source code of the library in the source code of the test project. With this setup, I can narrow down the location of the error because I can determine if tree-shaking works with Webpack. For this to work, in the test project, I needed to point to the index file of the library that contains all the named exports instead of pointing to the library in the `node_modules` folder. The folder structure now became:

```
library
 ├ package.json
 ├ rollup.config.js
 └ src/  # these folders are the same
   ├ index.js
   ├ component1.js
   └ component2.js

test-setup
 ├ package.json
 ├ webpack.config.js
 └ src/
   └ library # these folders are the same
     ├ index.js
     ├ component1.js
     └ component2.js
```

```diff
- import { Component1 } from 'library';
+ import { Component1 } from './library';
```

I tested this setup and saw that despite importing a file that imports all the files of the library it only included the one named export I imported in the test project, **success!**

---

### Step 3: library bundle in the test source
But not so fast, now I knew that tree-shaking with Webpack works but I still did not know whether it did not work because the library was placed in the `node_modules` folder or because it was bundled to one file. So now instead of pasting the source code of the library, I pasted the generated ES6 bundle in the source folder of the test project. The folder structure now became:
```
library
 ├ package.json
 ├ rollup.config.js
 └ src
   ├ index.js
   ├ component1.js
   └ component2.js

test-setup
 ├ package.json
 ├ webpack.config.js
 └ src
   └ library.js # contains all the bundled code from library/src/
```
To my surprise, this setup included the entire library in the build of the test project so **no tree-shaking was done** on the library when using a named export from the bundle.

---

### Step 4: Babel transpile
To test whether the babel transpilation process when bundling caused an issue that prevented tree-shaking from working. I used the [`babel-cli`](https://babeljs.io/docs/en/babel-cli) to transpile all source files individually and then pasted those transpiled files in the source folder of the test project. The folder structure now became:
```
library
 ├ package.json
 ├ rollup.config.js
 └ src/ # this folder is the same but NOT transpiled using Babel
   ├ index.js
   ├ component1.js
   └ component2.js

test-setup
 ├ package.json
 ├ webpack.config.js
 └ src/
   └ library # this folder is the same but IS transpiled using Babel
     ├ index.js
     ├ component1.js
     └ component2.js
```
Here **tree-shaking kept working** so Babel had no negative impact on tree-shaking.

# Final library build setup
The crucial thing to get your library to be tree-shakeable by Webpack is publishing your library using multiple files. It seems that Webpack performs three-shaking on file level and not on the code level. If one thing in a file is used, the entire file is included in the build. This explains why three-shaking is not working when your library is bundled into one file. With this gathered knowledge I was able to create a build setup that is tree-shakable with Webpack.

Depending on if you write code with features from ES6 or newer you might need to transpile your code with Babel, as seen in step 4 this has no negative impact on tree-shaking. If you are writing older style JavaScript with the exception of ES6 `import` and `export` you are good with publishing your library with pointing to the entry file, often `src/index.js` which contains all default and named exports of your library, no babel transpilation needed.

If you need Babel to transpile your code I recommend using Rollup to transpile your files to ES6. It is important to set `preserveModules: true` in the Rollup config to keep all the individual files for tree-shaking to work. With Rollup you can add the `rollup-plugin-babel` to do the transpilation. Lastly, in your `package.json` let the `"module"` property point to the entry file of the transpiled code, often `dist/index.js`, and it *just works!*

## Tree-shaking requirements
1. Use ES6 module syntax, `import` and `export` (also after the code is transpiled).
2. Code should be in separate files, not bundled in one file. This can be achieved by setting `preserveModules: true` in Rollup.
3. Set the `sideEffects` property in your project’s `package.json` file.

