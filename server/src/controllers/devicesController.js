import { createError } from '../createError.js'
import Devices from '../models/Devices.js'

export const createDeviceEntrance = async (req, res) => {
  try {
    const newEntrance = new Devices({ ...req.body, createdBy: req.user.id })
    await newEntrance.save()
    res.status(200).json(newEntrance)
  } catch (error) {
    console.log(error)
  }
}

export const updateDeviceEntrance = async (req, res, next) => {
  try {
    const deviceEntrance = await Devices.findByIdAndUpdate(req.params.id, {
      $set: req.body,
      updatedBy: req.user.id
    }, { new: true })
    if (!deviceEntrance) return next(createError(404, 'Not found'))
    res.status(200).json(deviceEntrance)
  } catch (error) {
    console.log(error)
  }
}

export const getAllDevicesEntrances = async (req, res, next) => {
  try {
    const devices = await Devices.find()
    if (!devices) return next(createError(404, 'There are no devices'))
    res.status(200).json(devices)
  } catch (error) {
    console.log(error)
  }
}
