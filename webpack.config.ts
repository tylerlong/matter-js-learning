/* eslint-disable node/no-unpublished-import */
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const config: webpack.Configuration = {
  mode: 'development',
  entry: ['./src/index.ts'],
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
        },
      },
      {
        test: /\.png$/i,
        use: 'file-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Matter.js Learning',
    }),
  ],
  resolve: {
    extensions: ['.js', '.ts'], // so that you can `import './main'` instead of `import './main.ts'`.
  },
};

export default config;
