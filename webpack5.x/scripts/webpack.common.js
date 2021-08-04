const path = require("path");

module.exports = {
  entry: {
    index: path.resolve(__dirname, "../src/index.ts"),
  },
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "[name]-[contenthash:8].bundle.js",
    publicPath: "/",
  },
  resolve: {
    modules: [path.resolve(__dirname, "node modules")],
    extensions: [".ts", ".tsx", "..."],
    alias: {
      "@": path.join(__dirname, "../src"),
    },
  },
  module: {
    
  }
};
