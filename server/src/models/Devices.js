import mongoose from 'mongoose'

const DeviceModel = new mongoose.Schema({
  model: {
    type: String,
    required: true
  },
  userAsignated: {
    type: String,
    required: true
  },
  purchaseDate: {
    type: Date,
    required: true
  },
  price: {
    type: Number
  },
  userManager: {
    type: String,
    required: true
  },
  delegacion: {
    type: String,
    required: true
  },
  createdBy: {
    type: String,
    required: true
  },
  updatedBy: {
    type: String
  }
}, { timestamps: true })

export default mongoose.model('Device', DeviceModel)
