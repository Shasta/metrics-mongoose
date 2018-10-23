import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

export const MetricProof = new Schema({
    _id: {
      type: ObjectId,
      auto: true
    },
    hardware_id: {
      type: String,
      index: true,
      required: true,
    },
    ipfs_hash: {
      type: String,
      index: true,
      required: true
    },
    consolidated: {
      type: Boolean,
      index: true,
      required: false,
      default: false
    },
    metrics: {
      timestamp: {
        type: Number,
        required: true
      },
      watts_consumed: {
        type: Number,
        required: true
      },
      watts_produced: {
        type: Number,
        required: true
      }
    }
  }, {
    // Add a timestamp when the doc is created and updated
    timestamps: true
  });