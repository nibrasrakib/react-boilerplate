# React Boilerplate


## Quick Overview
Simple React Boilerplate for general use. It is possible to extend this boilerplate. Provided some comment at the bottom for all possible configuration file.

* Yarn
* webpack
* Babel
* Less
* Prettier
* Reudx

Pages returns a view with increment and decrement button which are connected with Redux store.

### If you have a user defined script named package.json, change in package.json and use yarn start [command].

## yarn install
Simply install all the package from package.json
```sh
yarn install
```

## yarn start
Start the application in local browser (port- 8080)
```sh
yarn start
```

## yarn build
Build the application in build folder (folder creates on current directory)
```sh
yarn build
```

## yarn format
Format using Prettier
```sh
yarn format
```

## webpack.config.js
This webpack config is basically saying that the entry point of our application is from index.js,
so pull everything that's needed by that file, then put the output of the bundling process into the dist directory,
named bundle.js. Oh, if we're running on webpack-dev-server, then Tell the server to serve content from contentBase config,
which is the same directory this config is in. Also place the bundle.js in the dist/ directory, please. For all .js or .jsx files,
use babel-loader to transpile all of them.

## .prettierrc
The rules means that we want to add semicolon for the end of every statement,
use a single quote whenever appropriate and put trailing commas for multi-line
ES5 code like object or array.

## .eslintrc
The config is basically saying, "Hey ESLint, please parse the code using babel-eslint before you check it, and when you're checking it, please check if all the rules from our React rules config is passed. take global variables from the environment of browser and node. Oh, and if it's React code, take the version from the module itself. That way the user won't have to specify version manually."

## A big thanks to the @nathansebhastian

https://www.codementor.io/@nathansebhastian/step-by-step-react-configuration-from-scratch-to-deployment-rn4i4qp6a#deploying-react-app-to-netlify