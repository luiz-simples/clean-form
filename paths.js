const path = require('path')

module.exports = {
  src: path.join(__dirname, 'src'),
  dist: path.join(__dirname, 'dist'),
  main: path.join(__dirname, 'main.js'),
  index: path.join(__dirname, 'index.html'),
  vendor: [
    'redux',
    'react',
    'history',
    'react-dom',
    'react-redux',
    'redux-export',
    'react-router-dom',
    'react-router-redux',
    'react-async-component'
  ]
}
