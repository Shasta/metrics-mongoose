'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GlobalProofBatch = exports.RawBatchProof = undefined;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;
var ObjectId = Schema.ObjectId;

var RawBatchProof = exports.RawBatchProof = new Schema({
  _id: false,
  batch_metrics_ipfs: {
    type: String,
    required: true
  },
  batch_timestamp: {
    type: Date,
    required: true
  },
  hardware_id: {
    type: String,
    required: true
  }
}, {
  timestamps: false
});

var GlobalProofBatch = exports.GlobalProofBatch = new Schema({
  _id: {
    type: ObjectId,
    auto: true
  },
  ipfs_global_batch_proof: {
    type: String,
    index: true,
    required: true
  },
  metric_proofs: {
    type: [RawBatchProof],
    required: true
  },
  metric_proofs_ref: {
    type: [ObjectId],
    ref: 'MetricProofs',
    required: true
  }
}, {
  // Add a timestamp when the doc is created and updated
  timestamps: true
});