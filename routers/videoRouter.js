import express from 'express';
import {
	deleteVideo,
	editVideo,
	getUpload,
	postUpload,
	video,
	videoDetail,
} from '../controllers/videoController.js';
import routes from '../routes.js';

const videoRouter = express.Router();

videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, postUpload);

videoRouter.get(routes.videos, video);
videoRouter.get(routes.videoDetail(), videoDetail);
videoRouter.get(routes.editVideo, editVideo);
videoRouter.get(routes.deleteVideo, deleteVideo);

export default videoRouter;
