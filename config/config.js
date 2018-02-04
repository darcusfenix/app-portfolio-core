"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
// @flow
/*eslint no-process-env: 0, no-ternary: 0*/
var MONGODB_URL = exports.MONGODB_URL = process.env.MONGODB_URL ? process.env.MONGODB_URL : "ds111940.mlab.com";
var MONGODB_DB = exports.MONGODB_DB = process.env.MONGODB_DB ? process.env.MONGODB_DB : "portfolio";
var MONGODB_USER = exports.MONGODB_USER = process.env.MONGODB_USER ? process.env.MONGODB_USER : "portfolio-public";
var MONGODB_PWD = exports.MONGODB_PWD = process.env.MONGODB_PWD ? process.env.MONGODB_PWD : "2706";
var MONGODB_PORT = exports.MONGODB_PORT = process.env.MONGODB_PORT ? process.env.MONGODB_PORT : 11940;
var EXPRESS_PORT = exports.EXPRESS_PORT = process.env.EXPRESS_PORT ? process.env.EXPRESS_PORT : 3000;