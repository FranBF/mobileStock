import Managers from '../models/Managers.js'

export const createManager = async (req, res) => {
  try {
    const newManager = new Managers(req.body)
    await newManager.save()
    res.status(200).json(newManager)
  } catch (error) {
    console.log(error)
  }
}
