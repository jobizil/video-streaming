import { Router } from 'express'
import requireUser from '../../middlewares/requireUser'
import {
  findVideosHandler,
  updateVideoHandler,
  uploadVideoHandler,
} from './video.controller'

const router = Router()

router.post('/', requireUser, uploadVideoHandler)
router.get('/', findVideosHandler)
router.patch('/:videoId', requireUser, updateVideoHandler)

export default router
