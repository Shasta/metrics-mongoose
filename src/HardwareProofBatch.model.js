import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

export const HardwareProofBatch = new Schema({
    _id: {
      type: ObjectId,
      auto: true
    },
    hardware_id: {
      type: String,
      index: true,
      required: true,
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