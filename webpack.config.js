const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  devtool: 'inline-source-map',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname + '/build'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: './build',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template:  path.resolve('./public/index.html'),
    }),
  ]
};
/*
webpack.config.js
=================
This webpack config is basically saying that the entry point of our application is from index.js,
so pull everything that's needed by that file, then put the output of the bundling process into the dist directory,
named bundle.js. Oh, if we're running on webpack-dev-server, then Tell the server to serve content from contentBase config,
which is the same directory this config is in. Also place the bundle.js in the dist/ directory, please. For all .js or .jsx files,
use babel-loader to transpile all of them.

.prettierrc
=================
The rules means that we want to add semicolon for the end of every statement,
use a single quote whenever appropriate and put trailing commas for multi-line
ES5 code like object or array.


.eslintrc
=================
The config is basically saying, "Hey ESLint, please parse the code using babel-eslint before you check it,
and when you're checking it, please check if all the rules from our React rules config is passed. take global
 variables from the environment of browser and node. Oh, and if it's React code, take the version from the module itself.
 That way the user won't have to specify version manually."

*/
