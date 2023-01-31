import React from "react";
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
} from "../utils/constants";

const VideoCard = ({ video }) => {
  const {
    id: { videoId },
    snippet,
  } = video;
  console.log(videoId, snippet);
  return (
    <Card sx={{ width: { md: "320px", xs: "100%" } }}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{ width: 358, height: 180 }}
        />
        <CardContent sx={{ backgroundColor: "#1e1e1e", height: "106px" }}>
          <Typography variant="subtitle1" fontWeight="bold" color="white">
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>

          <Link
            to={videoId ? `/channel/${snippet?.channelId}` : demoChannelUrl}
          >
            <Typography variant="subtitle2" fontWeight="bold" color="gray">
              {snippet?.channelTitle || demoChannelTitle}
              <CheckCircle sx={{ fontSize: 16, color: "grey", ml: "5px" }} />
            </Typography>
          </Link>
        </CardContent>
      </Link>
    </Card>
  );
};

export default VideoCard;
