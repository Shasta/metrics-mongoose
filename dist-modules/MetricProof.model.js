'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MetricProof = undefined;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;
var ObjectId = Schema.ObjectId;

var MetricProof = exports.MetricProof = new Schema({
  _id: {
    type: ObjectId,
    auto: true
  },
  hardware_id: {
    type: String,
    index: true,
    required: true
  },
  ipfs_hash: {
    type: String,
    index: true,
    required: true
  },
  metrics: {
    watts_consumed: {
      type: Number,
      required: true
    },
    watts_produced: {
      type: Number,
      required: true
    },
    timestamp: {
      type: Date,
      required: true
    }
  }
}, {
  // Add a timestamp when the doc is created and updated
  timestamps: true
});