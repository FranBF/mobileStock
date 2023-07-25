import express from 'express'
import { verifyToken } from '../verifyToken.js'
import { createDeviceEntrance, getAllDevicesEntrances, updateDeviceEntrance } from '../controllers/devicesController.js'

const router = express.Router()

router.get('/devices', verifyToken, getAllDevicesEntrances)
router.post('/device', verifyToken, createDeviceEntrance)
router.put('/device/:id', verifyToken, updateDeviceEntrance)

export default router
