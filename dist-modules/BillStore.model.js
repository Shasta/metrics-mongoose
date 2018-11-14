'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.BillStore = undefined;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;
var ObjectId = Schema.ObjectId;

var BillStore = exports.BillStore = new Schema({
    _id: {
        type: ObjectId,
        auto: true
    },
    consumption: {
        type: Number,
        required: true
    },
    hardware_id: {
        type: String,
        index: true,
        required: true
    },
    ipfs_hash: {
        type: String,
        required: true
    },
    leaf: {
        type: String,
        required: true
    },
    merkle_root: {
        type: String,
        index: true,
        required: true
    },
    metric_base_id: {
        type: String,
        required: true
    },
    price_watt_hour: {
        type: Number,
        required: true
    },
    proofs: {
        type: []
    },
    round_id: {
        type: Number,
        index: true,
        required: true
    },
    timestamp: {
        type: Number,
        required: true
    },
    token_address: {
        type: String,
        index: true,
        required: true
    },
    token_amount: {
        type: Number,
        required: true
    }
}, {
    // Add a timestamp when the doc is created and updated
    timestamps: true
});