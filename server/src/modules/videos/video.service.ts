import { Video, VideoModel } from './video.model'

export async function createVideo({ owner }: { owner: string }) {
  return VideoModel.create({ owner })
}

export async function findVideo(videoId: Video['videoId']) {
  return VideoModel.findOne({ videoId })
}
export async function findVideos() {
  return VideoModel.find({ published: true }).lean()
}
