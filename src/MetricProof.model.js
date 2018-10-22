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