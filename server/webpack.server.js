const path = require("path");

const nodeExternals = require("webpack-node-externals");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { merge } = require("webpack-merge");

const baseConfig = require("./webpack.base.js");

const config = {
  // inform webpack that we're building a bundle for nodeJS, rather than for the browser
  // in order to ignore built-in modules like path, fs, etc.
  target: "node",
  // in order to ignore all modules in node_modules folder
  externals: [nodeExternals()],
  // tell webpack the root file of our server application
  entry: "./src/index.js",
  // tell webpack where to put the output file that is generated
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "../public/styles.css",
    }),
  ],
  mode: "development",
};

module.exports = merge(baseConfig, config);
