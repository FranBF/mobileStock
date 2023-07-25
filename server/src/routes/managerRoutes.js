import express from 'express'
import { createManager } from '../controllers/managerController.js'

const router = express.Router()

router.post('/manager', createManager)

export default router
