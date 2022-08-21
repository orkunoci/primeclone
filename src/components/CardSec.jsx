import React, { useState } from "react";
import { Box } from "@mui/material";
import Cards from "./Cards";
import { useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
const CardSec = () => {
  const [list, setList] = useState([]);
  const router = useLocation();
  const route = router.pathname.split("/").slice(1);
  useEffect(() => {
    axios
      .get(
        route === "tvlist"
          ? `https://api.themoviedb.org/3/genre/tv/list?api_key=c288fcfb3e533784be287382026d8752&language=en-US`
          : `https://api.themoviedb.org/3/genre/movie/list?api_key=c288fcfb3e533784be287382026d8752&language=en-US`
      )
      .then((res) => {
        const data = res.data.genres;
        setList(data.slice(0, 5));
      });
  }, [route]);

  return (
    <Box
      sx={{
        marginTop: "5rem",
        paddingLeft: "10px",
        paddingRight: "10px",
        paddingBottom: "200px",
        position: "relative",
        zIndex: 2,
        overflow: "hidden",
      }}
    >
      {list.length > 0 &&
        list.map((genre, index) => {
          return (
            <Cards key={index} genreName={genre.name} genreId={genre.id} />
          );
        })}
    </Box>
  );
};

export default CardSec;
