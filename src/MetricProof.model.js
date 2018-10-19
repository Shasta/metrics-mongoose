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
    metric_ipfs_hash: {
      type: String,
      index: true,
      required: true
    },
    watts_consumed: {
      type: Number,
      required: true
    },
    watts_produced: {
      type: Number,
      required: true
    },
    metrics_timestamp: {
      type: Date,
      required: true
    }
  }, {
    // Add a timestamp when the doc is created and updated
    timestamps: true
  });