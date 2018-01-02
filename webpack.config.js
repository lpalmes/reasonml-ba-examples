const path = require("path");

module.exports = {
  entry: {
    counter: "./src/counter/counterIndex.bs.js",
    basic: "./src/basic/basicIndex.bs.js",
    interopSetState: "./src/interopSetState/interopJsComponent.js",
    ajax: "./src/ajax/ajaxIndex.bs.js"
  },
  output: {
    path: path.join(__dirname, "build"),
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: "babel-loader"
          }
        ]
      }
    ]
  }
};
