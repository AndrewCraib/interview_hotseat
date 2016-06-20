var config = {
  entry: "./src/create.js",
  output:{
    filename: "bundle.js",
    path: "./build"
  },
  devtool: "source-map"
}

module.exports = config;