'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var RawMetricProof = exports.RawMetricProof = new Schema({
  _id: false,
  metric_ipfs: {
    type: String,
    required: true
  },
  metric_timestamp: {
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
  metric_proofs: {
    type: [RawMetricProof],
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