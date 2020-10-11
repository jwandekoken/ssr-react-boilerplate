const path = require("path");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { merge } = require("webpack-merge");

const baseConfig = require("./webpack.base.js");

const config = {
  // tell webpack the root file of our client application
  entry: "./src/client/client.js",
  // tell webpack where to put the output file that is generated
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js",
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "styles.css",
    }),
  ],
  mode: "development",
};

module.exports = merge(baseConfig, config);
