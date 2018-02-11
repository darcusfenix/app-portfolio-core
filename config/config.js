"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
require('dotenv').config();
// @flow
/*eslint no-process-env: 0, no-ternary: 0*/
var MONGODB_URL = exports.MONGODB_URL = process.env.MONGODB_URL || "localhost";
var MONGODB_DB = exports.MONGODB_DB = process.env.MONGODB_DB || "db";
var MONGODB_USER = exports.MONGODB_USER = process.env.MONGODB_USER || "user";
var MONGODB_PWD = exports.MONGODB_PWD = process.env.MONGODB_PWD || "root";
var MONGODB_PORT = exports.MONGODB_PORT = process.env.MONGODB_PORT || 11940;
var EXPRESS_PORT = exports.EXPRESS_PORT = process.env.EXPRESS_PORT || 3000;