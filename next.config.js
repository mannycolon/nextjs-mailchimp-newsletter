require('dotenv').config()
const path = require('path')
const Dotenv = require('dotenv-webpack')
const withSass = require('@zeit/next-sass')

module.exports = withSass({
  webpack: (config) => {
    config.plugins = config.plugins || []

    config.plugins = [
      ...config.plugins,
    ]
    if (process.env.NODE_ENV !== 'production') {
      // Read the .env file
      config.plugins.push(
        new Dotenv({
          path: path.join(__dirname, '.env'),
          systemvars: true
        })
      )
    }

    config.node = {
      console: false,
      fs: 'empty',
      net: 'empty',
      tls: 'empty'
    }

    return config
  }
})
