'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GlobalProofBatch = undefined;

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;
var ObjectId = Schema.ObjectId;

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
  hardware_batches: {
    type: [ObjectId],
    ref: 'HardwareProofBatch',
    required: true
  }
}, {
  // Add a timestamp when the doc is created and updated
  timestamps: true
});