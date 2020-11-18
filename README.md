# Studies from the webpack academy

## Setting Up:

- Add with yarn
  `yarn add webpack --dev`

- Setup script on _package.json_
  `"scripts": { "build": "webpack" }`

- Webpack Config

  1. Create a file named _webpack.config.js_
     Webpack require this file by default so that it knows how to bundle it!

  2. The config file

     ```javascript
     module.exports = {
       entry: "./src/index.js", // Entry point of all the files in your project.
       output: {
         //Where the code will be bundled to work inside the browser.
         filename: "bundle.js",
       },
     };
     ```

  3. Dependency Graph
     Webpack starts at the entry point, then it looks for statements like: import, export, requires, export default, etc.
     Then it marks the **paths** `./example` as dependencies.
     It does this multiple times trough all the dependencies until it runs trough the entire application.
     Everything is surrounded with the dependency graph.

  4. Webpack --watch explained
     With the dependency graph made, webpack looks for any change in the files that exists in the graph, and then re-compiles the code each time a change is made

  5. What are loaders?
     Something that takes a source and transform that.
     You specify a RULE, so that every time a file meet this rule, the loader transforms it!
     Apply changes to a single file BEFORE its added to the Dependency Graph

  6. Plugins
     Make changes on multiple files, a loader only does at one.

## Asset Management

### Managing CSS

Dev Dependencies:
`style-loader || css-loader`

They enable you to import CSS files into JS files that need them.

```javascript
  rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'], // Its important to stay on this order
      },
    ],
```

### Loading Images

Compiles image and set them to be used when building the application

```javascript
  {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
```
