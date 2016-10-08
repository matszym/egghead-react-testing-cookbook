module.exports = {
  entry: './app/components/MainComponent.js',
  output: {
    path: './public',
    filename: 'index.js'
  },
  devServer: {
    inline: true,
    host: '0.0.0.0',
    port: 3333,
    contentBase: 'public/'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: 'node_modules',
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
}