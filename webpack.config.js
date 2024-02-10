// webpack.config.js
const path = require("path");

module.exports = {
  mode:'production',
  target: "node",
  entry: "./build/main.js",
  output: {
    filename: "server.js",
    path: path.resolve(__dirname, "dist"),
  },
  // Additional configuration goes here
};
