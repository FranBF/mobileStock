import mongoose from 'mongoose'

const ManagerModel = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
}, { timestamps: true })

export default mongoose.model('Manager', ManagerModel)
