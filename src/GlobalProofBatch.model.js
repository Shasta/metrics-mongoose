import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

export const GlobalProofBatch = new Schema({
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