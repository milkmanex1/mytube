import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Box, Typography, Stack } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

import Videos from "./Videos";
import { fetchFromApi } from "../utils/fetchFromApi";

const VideoDetail = () => {
  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box></Box>
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
