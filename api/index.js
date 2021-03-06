'use strict';

const Route = require('./routes')
const Auth = require('../config/auth')

exports.register = function (server, options, next) {

    server.auth.strategy(Auth.token.name, Auth.token.scheme, Auth.token.options)

    server.realm.modifiers.route.prefix = '/api/v1'

    server.route(Route.routes)

    next()
}

exports.register.attributes = {
    name: 'api',
    version: '1.0.0',
    pkg: require('./../package.json')
}
