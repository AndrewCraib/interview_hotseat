var path = require('path');

var config = {
  entry: {a:"./src/view.js",
          b:"./src/create.js"},
  output:{
    filename: "[name].js",
    path: './build'
  },
  devtool: "source-map"
}

module.exports = config;