import React, { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import Videos from "./Videos";
import { fetchFromApi } from "../utils/fetchFromApi";

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromApi(`search?part=snippet&q=${searchTerm}`).then((data) => {
      /* console.log(data.items); */
      setVideos(data.items);
    });
  }, [searchTerm]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      {/* main video section */}
      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "white" }}
        >
          <span style={{ marginRight: "10px" }}>Search Results for </span>
          <span style={{ color: "#FC1503" }}>{searchTerm}</span>
          <span> videos</span>
        </Typography>

        <Videos videos={videos}></Videos>
      </Box>
    </Stack>
  );
};

export default SearchFeed;
