"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

var _log4js = require("log4js");

var _log4js2 = _interopRequireDefault(_log4js);

var _config = require("../config/config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var log = _log4js2.default.getLogger("MONGODB_CONNECTION"); // @flow

var internalConnectionPool = {};

var options = {
    server: { poolSize: 5 },
    user: _config.MONGODB_USER,
    pass: _config.MONGODB_PWD
};

var address = "mongodb://" + _config.MONGODB_URL + ":" + _config.MONGODB_PORT + "/" + _config.MONGODB_DB;

var connect = function connect() {
    return new Promise(function (resolve, reject) {
        if (!internalConnectionPool[address]) {
            var conn = _mongoose2.default.createConnection(address, options, function (err) {
                if (err) {
                    log.error(err);
                    reject(err);
                } else {
                    internalConnectionPool[address] = conn;
                    resolve(internalConnectionPool[address]);
                }
            });
        } else {
            resolve(internalConnectionPool[address]);
        }
    });
};

exports.default = connect;