const TerserPlugin = require('terser-webpack-plugin');
require('@babel/polyfill');

module.exports = {
  entry: [
    '@babel/polyfill',
    './src/SymcoreParser.ts'
  ],
  mode: 'production',
  target: 'es5',
  output: {
    filename: 'symcoreParser.js',
    path: __dirname + '/browser',
    library: 'GeoStylerSymCoreParser',
    chunkFormat: 'array-push'
  },
  resolve: {
    extensions: ['.ts', '.js', '.json']
  },
  optimization: {
    minimizer: [
      new TerserPlugin()
    ]
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)$/,
        use: {
          loader: 'babel-loader'
        },
      }
    ]
  }
};
