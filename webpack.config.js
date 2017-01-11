const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const webpack = require('webpack');

const parts = require('./webpack.parts');

const PATHS = {
  app: path.join(__dirname, 'app'),
  style: path.join(__dirname, 'app', 'style', 'main.scss'),
  build: path.join(__dirname, 'build')
};

const common = {
  entry: {
    style: PATHS.style,
    app: PATHS.app
  },
  output: {
    path: PATHS.build,
    filename: '[name].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template : __dirname + '/app/index.html'
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        sassLoader: {
          includePaths: [
            './node_modules',
            // this is required only for NPM < 3.
            // Dependencies are flat in NPM 3+ so pointing to
            // the internal grommet/node_modules folder is not needed
            './node_modules/grommet/node_modules'
          ]
        },
        context: __dirname,
      },
    }),
  ],
}

module.exports = function(env) {
  if (env === 'build') {
    return merge(
      common,
      parts.babelify(PATHS.app),
      {
        devtool: 'source-map',
        output: {
          path: PATHS.build,
          filename: '[name].[chunkhash].js',
          chunkFilename: '[chunkhash].js'
        }
      },
      parts.clean(PATHS.build),
      parts.extractBundle({
        name: 'vendor',
        entries: ['react']
      }),
      parts.setFreeVariable(
        'process.env.NODE_ENV',
        'production'
      ),
      parts.minify(),
      parts.extractCSS(PATHS.style)
    );
  }

  return merge(
    common,
    parts.babelify(PATHS.app),
    {
      devtool: 'eval-source-map',
      performance: {
        hints: false
      }
    },
    parts.setupSASS(PATHS.app),
    parts.devServer({
      host: process.env.HOST,
      port: process.env.PORT
    })
  )
};
