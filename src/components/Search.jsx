import React, { useState, useRef } from "react";
import { FormControl, styled } from "@mui/material";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
const Search = ({ openSearch, setOpenSearch }) => {
  const AppSearch = styled(TextField)(({ theme }) => ({
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      position: "fixed",
      left: 0,
      top: 0,
    },
  }));
  return (
    <>
      <FormControl>
        <AppSearch
          sx={{
            display: {
              xs: `${openSearch ? "block" : "none"}`,
              md: "block",
            },
            background: "#1B2530",
            borderColor: "white",
          }}
          id="outlined-basic"
          variant="outlined"
          InputProps={{
            inputProps: {
              style: {
                color: "#fff",
                height: "10px",
              },
            },

            startAdornment: (
              <InputAdornment position="start">
                <IconButton>
                  <SearchIcon sx={{ color: "#fff" }} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </FormControl>
    </>
  );
};

export default Search;
