import React from "react";
import Navbar from "../components/Navbar";
import { Box } from "@mui/material";
import CategoriesCards from "../components/CategoriesCards";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../components/Footer";
const CategoriesPage = () => {
  const router = useLocation();
  const catName = router.pathname.split("categories/").slice(1);

  const [genres, setGenres] = useState([]);

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_GENRE}movie/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
      )
      .then((res) => {
        const data = res.data.genres;
        setGenres(data);
      });
  }, [router]);

  let cats = genres.filter(function (el) {
    return el.name === catName[0].charAt(0).toUpperCase() + catName[0].slice(1);
  });
  return (
    <>
      <Navbar />
      <Box
        sx={{
          margin: "0 auto",
          maxWidth: "1500px",
          position: "relative",
          width: "100%",
          padding: "0 48px",
          boxSizing: "border-box",
        }}
      >
        <Box
          sx={{
            borderBottom: " 1px solid #425265",
            paddingBottom: "16px",
            paddingTop: "24px",
            fontSize: "19px",
            lineHeight: "24px",
            width: "100%",
          }}
        >
          <p style={{ color: "#8197A5", textTransform: "capitalize" }}>
            {catName}
          </p>{" "}
        </Box>
      </Box>
      <Box
        sx={{
          margin: "16px auto",
          maxWidth: " 1500px",
          padding: " 0 48px",
        }}
      >
        <CategoriesCards catName={catName} cats={cats} />
      </Box>

      <Footer/>
    </>
  );
};

export default CategoriesPage;
