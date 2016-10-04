const path = require('path');
const Webpack = require('webpack');
const merge = require('webpack-merge');
const NpmInstallPlugin = require('npm-install-webpack-plugin');

const TARGET = process.env.npm_lifecycle_event;
const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build')
};

process.env.BABEL_ENV = TARGET;

const common = {
  entry: {
    app: ['babel-polyfill',PATHS.app]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: PATHS.build,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: 'style!css!sass?outputStyle=expanded&' +
          'includePaths[]=' +
          (encodeURIComponent(path.resolve('./node_modules')))
      },
      {
        test: /\.css$/,
        loader: 'style!css?sourceMap' 
      },
      {
        test: /\.jsx?$/,
        loaders: ['babel?cacheDirectory'],
      },
      {
        test: /\.json$/, loader: 'json' 
      }
    ]
  }
};

// Default configuration
if(TARGET === 'start' || !TARGET) {
  module.exports = merge(common, {
    devtool: 'eval-source-map',
    devServer: {
      contentBase: PATHS.build,
      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true,
      stats: 'errors-only',
      host: process.env.HOST,
      port: process.env.PORT
    },
    plugins: [
      new Webpack.HotModuleReplacementPlugin(),
      new NpmInstallPlugin({
        save: true // --save
      })
    ]
  });
}

if(TARGET === 'build') {
  module.exports = merge(common, {
    devtool: 'cheap-module-source-map',
    plugins: [
      new Webpack.optimize.CommonsChunkPlugin('common.js'),
      new Webpack.optimize.DedupePlugin(),
      new Webpack.optimize.UglifyJsPlugin(),
      new Webpack.optimize.AggressiveMergingPlugin()
    ]
  });
}
