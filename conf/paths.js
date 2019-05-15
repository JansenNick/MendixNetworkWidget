const path = require("path");
module.exports = {
  srcDir: path.join(__dirname, "..", "src"),
  srcEntry: "./src/index.js",
  confDir: __dirname,
  distDir: path.join(__dirname, "..", "dist"),
  buildDir: path.join(__dirname, "..", "build"),
  mxProjectRootDir: "/Users/nick.jansen/Documents/Mendix/Mendix8TestApp-main", // set this to the directory of your test mendix project
  widgetPackageXML: path.join(__dirname, "..", "src", "package.ejs"),
  widgetConfigXML: path.join(__dirname, "..", "src", "widget.config.ejs"),
};
