const fs = require('fs');
const path = require('path');
const ytdl = require('ytdl-core');

exports.getVideo = async (req, res, next) => {
    const videoId = req.params.videoId;
    const url = `http://www.youtube.com/watch?v=${videoId}`;

    try {
        const validURL = await ytdl.validateURL(url); // Do I need to await this?
        if(!validURL) return res.status(404).json({ message: "Not a valid URL" });

        const info = await ytdl.getInfo(url);
        const format = await ytdl.chooseFormat(info.formats, { quality: 'highest' } );
        const videoData = ytdl.downloadFromInfo(info, { format: format });
        res.status(200).attachment(`${info.videoDetails.title}_${info.videoDetails.videoId}.${format.container}`);
        videoData.pipe(res);
    } catch(err) {
        console.log(err);
    }
};

