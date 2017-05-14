const Path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (options) => {
  const ExtractSASS = new ExtractTextPlugin(`/styles/${options.cssFileName}`);

  const webpackConfig = {
    devtool: options.devtool,
    entry: {
      main: [
      `webpack-dev-server/client?http://localhost:${+ options.port}`,
      Path.join(__dirname, '../src/app/index')]
    },
    output: {
      path: Path.join(__dirname, '../dist/'),
      filename: `scripts/${options.jsFileName}`,
    },
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    module: {
      loaders: [{
        test: /.jsx?$/,
        include: Path.join(__dirname, '../src/app'),
        loader: 'babel-loader',
      }],
    },
    plugins: [
      new Webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify(options.isProduction ? 'production' : 'development'),
        },
      }),
      new HtmlWebpackPlugin({
        template: Path.join(__dirname, '../src/index.html'),
      }),
    ],
  };

  if (options.isProduction) {
    webpackConfig.entry = [Path.join(__dirname, '../src/app/index')];

    webpackConfig.plugins.push(
      new Webpack.optimize.OccurrenceOrderPlugin(),
      new Webpack.optimize.UglifyJsPlugin({
        compressor: {
          warnings: false,
        },
      }),
      ExtractSASS
    );

    webpackConfig.module.loaders.push({
      test: /\.scss$/,
      loader: ExtractSASS.extract(['css-loader', 'sass-loader']),
    });
  } else {
    webpackConfig.plugins.push(
      new Webpack.HotModuleReplacementPlugin()
    );

    webpackConfig.module.loaders.push({
      test: /\.scss$/,
      loaders: ['style-loader', 'css-loader', 'sass-loader'],
    });

    webpackConfig.devServer = {
      contentBase: Path.join(__dirname, '../'),
      hot: true,
      port: options.port,
      inline: true,
      historyApiFallback: true,
    };
  }

  return webpackConfig;
};
