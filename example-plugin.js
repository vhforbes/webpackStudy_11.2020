class ExamplePlugin {
  apply(compiler) {
    compiler.plugin("run", (compiler, callback) => {
      console.log("compiler is running");
      callback();
    });
  }
}

module.exports = ExamplePlugin;
