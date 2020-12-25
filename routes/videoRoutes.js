const express = require('express');

const videoController = require('../controllers/videoController');
const router = express.Router();

// GET /video/info/id
router.get('/info/:videoId', videoController.getVideo);

module.exports = router;