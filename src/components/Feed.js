import React, { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import Sidebar from "./Sidebar";
import Videos from "./Videos";
import { fetchFromApi } from "../utils/fetchFromApi";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromApi(`search?part=snippet&q=${selectedCategory}`).then((data) => {
      /* console.log(data.items); */
      setVideos(data.items);
    });
  }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      {/* sidebar */}
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <Sidebar {...{ selectedCategory, setSelectedCategory }}></Sidebar>
        <Typography className="copyright" sx={{ mt: 1.5, color: "#fff" }}>
          Copyright 2023 Gabriel
        </Typography>
      </Box>
      {/* main video section */}
      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "white" }}
        >
          <span style={{ marginRight: "10px" }}>{selectedCategory}</span>
          <span style={{ color: "#FC1503" }}>videos</span>
        </Typography>

        <Videos videos={videos}></Videos>
      </Box>
    </Stack>
  );
};

export default Feed;
