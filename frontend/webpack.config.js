const webpack = require('webpack')
const ETP = require('extract-text-webpack-plugin')

module.exports = {
    entry: './src/index.jsx',
    output:{
        path: __dirname + '/public',
        filename: './app.js'
    }
}