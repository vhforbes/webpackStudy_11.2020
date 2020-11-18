const path = require("path") //Require path to add an absolute path in the config
const ExamplePlugin = require("./example-plugin") 
const webpack = require("webpack");
const { web } = require("webpack");

module.exports = {
  entry: "./src/index.js", // Entry point of all the files in your project.
  output: {                //Where the code will be bundled to work inside the browser.
    filename: "bundle.js",
    path: path.join(__dirname, './dist') //Changing the webpack bundle path
  }, 
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ]
  },
  plugins: [
    // new ExamplePlugin(),
  ]
};
