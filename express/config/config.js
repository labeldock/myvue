var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'express'
    },
    port: process.env.PORT || 8000,
  },

  test: {
    root: rootPath,
    app: {
      name: 'express'
    },
    port: process.env.PORT || 8000,
  },

  production: {
    root: rootPath,
    app: {
      name: 'express'
    },
    port: process.env.PORT || 8000,
  }
};

module.exports = config[env];
