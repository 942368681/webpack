const devConfig = require("./webpack.dev.js");
const prodConfig = require("./webpack.prod.js");

module.exports = () => {
  let config;
  if (process.env.MODE === "dev") {
    config = devConfig;
  } else if (process.env.MODE === "prod") {
    config = prodConfig;
  }
  return config;
};
