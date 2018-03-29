module.exports = {
  entry: {
    scope: './src/scope.js',
    string: './src/string.js',
    function: './src/function.js',
    object: './src/object.js',
    class: './src/class.js',
    var: './src/var.js',
    module: './src/module.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      }
    ]
  }
}