const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  "entry": {
    "index": './src/index.js',
  },
  "output": {
    path: path.resolve(__dirname, 'dist'),
    "filename": "[name].pack.js",
    assetModuleFilename: 'images/[name][ext]',
    publicPath: '/',
  },
  "resolve": {
    "extensions": [
      ".js",
      ".json",
    ],
    "alias": {}
  },
  "module": {
    "rules": [
      {
        "use": {
          "loader": "babel-loader",
          "options": {
            "presets": ['@babel/preset-env', '@babel/preset-react'],
          },
          
        },
        "exclude": /node_modules/,
        "test": /\.js$/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'], // Rule to process CSS files
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource',
      },
    ]
  },
  "plugins": [
    new HtmlWebpackPlugin({
      "template": './src/index.html', // Path to your HTML file
      "filename": 'index.html',  // Name of the output file
    }),
  ],
}