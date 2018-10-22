import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

export const HardwareWhitelist = new Schema({
  _id: {
    type: ObjectId,
    auto: true
  },
  hardware_id: {
    type: String,
    index: true,
    required: true,
  },
  enabled: {
    type: Boolean,
    required: true,
    default: false
  }
}, {
  // Add a timestamp when the doc is created and updated
  timestamps: true
});