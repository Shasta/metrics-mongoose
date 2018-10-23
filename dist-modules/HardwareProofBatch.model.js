'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HardwareProofBatch = undefined;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;
var ObjectId = Schema.ObjectId;

var HardwareProofBatch = exports.HardwareProofBatch = new Schema({
  _id: {
    type: ObjectId,
    auto: true
  },
  hardware_id: {
    type: String,
    index: true,
    required: true
  },
  ipfs_batch_proof: {
    type: String,
    index: true,
    required: true
  },
  metric_proofs_ref: {
    type: [ObjectId],
    ref: 'MetricProof',
    required: true
  }
}, {
  // Add a timestamp when the doc is created and updated
  timestamps: true
});