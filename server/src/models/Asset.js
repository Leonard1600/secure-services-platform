import mongoose from 'mongoose';

const assetSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    client: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Client',
      required: true,
    },
    services: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Service',
      },
    ],
    location: {
      type: String,
      trim: true,
    },
    status: {
      type: String,
      enum: ['active', 'inactive', 'maintenance'],
      default: 'active',
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Asset = mongoose.model('Asset', assetSchema);

export default Asset;
