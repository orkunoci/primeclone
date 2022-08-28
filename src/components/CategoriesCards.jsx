import Card from "./Card";
import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import "swiper/css";
import "swiper/css/navigation";
import axios from "axios";

import { useLocation } from "react-router-dom";
const CategoriesCards = ({ cats }) => {
  const [films, setfilms] = useState([]);
  const router = useLocation();
  const route = router.pathname.split("/").slice(1);
  useEffect(() => {
    if (cats[0]) {
      axios
        .get(
          route === "tvlist"
            ? `${process.env.REACT_APP_DISCOVER_BASE_URL}tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=${cats[0].id}`
            : `${process.env.REACT_APP_DISCOVER_BASE_URL}movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&&page=1&&with_genres=${cats[0].id}`
        )
        .then((res) => {
          const data = res.data;
          setfilms(data.results);
        });
    }
  }, [route, cats]);

  return (
    <Box
      sx={{
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill,minmax(270px,1fr));",

        gridGap: "20px",
      }}
    >
      {films.map((film) => {
        return <Card film={film} />;
      })}
    </Box>
  );
};

export default CategoriesCards;
