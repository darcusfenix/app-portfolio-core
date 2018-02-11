"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema; // @flow


var schema = new Schema({
    type: {
        type: String,
        required: true
    },
    className: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    }
});

exports.default = schema;