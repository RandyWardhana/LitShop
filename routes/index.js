import express from 'express'
import publicRouter from './view/public/index'

const router = express.Router()

router.use('/', publicRouter)

export default router