const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/main.js', // Entry point of your game
  output: {
    filename: 'bundle.js', // The output bundle
    path: path.resolve(__dirname, 'dist'), // Output directory
    publicPath: '/',
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: "./src/assets", to: "assets" }, // Adjust paths as needed
      ],
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html', // Path to your template
      filename: 'index.html', // Output file name
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/, // Target JavaScript files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'] // Preset used for env setup
          }
        }
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i, // Target image files
        type: 'asset/resource',
      },
      {
        test: [/\.vert$/, /\.frag$/], // Target shader files
        use: 'raw-loader'
      }
    ]
  },
  
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'), // Directory for the dev server to serve files from
    },
    compress: true, // Enable gzip compression
    port: 9000, // Port to run the dev server
  }
}