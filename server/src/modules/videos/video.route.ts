import { Router } from 'express'
import requireUser from '../../middlewares/requireUser'
import {
  findVideosHandler,
  streamVideoHandler,
  updateVideoHandler,
  uploadVideoHandler,
} from './video.controller'

const router = Router()

router.post('/', requireUser, uploadVideoHandler)
router.get('/', findVideosHandler)
router.get('/:videoId', streamVideoHandler)
router.patch('/:videoId', requireUser, updateVideoHandler)

export default router
