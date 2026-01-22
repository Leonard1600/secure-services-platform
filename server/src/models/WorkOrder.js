import mongoose from 'mongoose';

const workOrderSchema = new mongoose.Schema(
  {
    title: {
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
    asset: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Asset',
      required: true,
    },
    services: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Service',
      },
    ],
    assignedTo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    status: {
      type: String,
      enum: ['pending', 'scheduled', 'in_progress', 'completed', 'cancelled'],
      default: 'pending',
    },
    scheduledDate: {
      type: Date,
    },
    completedDate: {
      type: Date,
    },
    notes: {
      type: String,
      trim: true,
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

const WorkOrder = mongoose.model('WorkOrder', workOrderSchema);

export default WorkOrder;
