import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";
import Autocomplete from "./Autocomplete";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm("");
    }
  }

  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      sx={{
        borderRadius: 20,
        border: "1px solid #e3e3e3",
        pl: 2,
        boxShadow: "none",
        mr: { sm: 5 },
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* <input
        className="search-bar"
        placeholder="Search..."
        type="text"
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      /> */}
      <Autocomplete></Autocomplete>
      <IconButton type="submit" sx={{ p: 2, color: "red" }}>
        <Search></Search>
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
