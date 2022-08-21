import React, { useState, useEffect } from "react";
import { Box, Link } from "@mui/material";
import Cards from "../components/Cards";

const Recommandations = ({ genres }) => {
  const recommendedGenreIds = [];

  genres &&
    genres.map((a) => {
      recommendedGenreIds.push(a.id);
    });

  const [display, setDisplay] = useState(true);
  const handleLink1 = () => {
    setDisplay(!display);
  };

  const handleLink2 = () => {
    setDisplay(!display);
  };
  return (
    <Box
      sx={{
        maxWidth: "1600px",
        margin: "0 auto",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box sx={{ margin: "20px 0" }}>
          <Link
            onClick={handleLink1}
            underline="none"
            className={`${
              display ? "singlePageDetails link1" : "singlePageDetails "
            }`}
            to="/singlemovie"
            style={{
              marginRight: "20px",
              fontSize: "21px",
              lineHeight: "24px",
              color: "#8197a4",
              textTransform: "capitalize",
              cursor: "pointer",
              transiion: ".3s all",
            }}
          >
            Related
          </Link>
          <Link
            onClick={handleLink2}
            underline="none"
            to="/singlemovie"
            className={`${
              display ? "singlePageDetails " : "singlePageDetails link1"
            }`}
            style={{
              fontSize: "21px",
              lineHeight: "24px",
              color: "#8197a4",
              textTransform: "capitalize",
              cursor: "pointer",
              transiion: ".3s all",
            }}
          >
            Details
          </Link>
        </Box>
      </Box>
      <Box className={`${display ? "" : "none"}`}>
        <h2 style={{ color: "white" }}>İzleyiciler bunları da izledi</h2>
        <Box
          sx={{
            overflow: "hidden",
            maxWidth: "1600px",
            paddingBottom: "300px",
          }}
        >
          <Cards recommendedGenreIds={recommendedGenreIds} />
        </Box>
      </Box>

      <Box className={`${display ? "none" : ""}`}>
        <Box sx={{ marginTop: "20px", display: "flex", alignItems: "center" }}>
          <Box
            sx={{
              color: "#8197a4",
              fontSize: "17px",
              textTransform: "capitalize",
            }}
          >
            <p style={{ paddingTop: "5px" }}>yönetmenler</p>
            <p style={{ paddingTop: "5px" }}>diller</p>
            <p style={{ paddingTop: "5px" }}>başrollerde</p>
            <p style={{ paddingTop: "5px" }}>Türler</p>
          </Box>
          <Box
            sx={{
              paddingLeft: "50px",
              textTransform: "capitalize",
              fontSize: "17px",
              color: "#79b8f3",
            }}
          >
            <p style={{ paddingTop: "5px" }}>
              <Link
                className="details"
                style={{ color: "#009fd5", transition: "all .3s" }}
                to="/"
              >
                asdsad
              </Link>
            </p>
            <p style={{ paddingTop: "5px" }}>
              <Link
                className="details"
                style={{ color: "#009fd5", transition: "all .3s" }}
                to="/"
              >
                asdsad
              </Link>
            </p>
            <p style={{ paddingTop: "5px" }}>
              <Link
                className="details"
                style={{ color: "#009fd5", transition: "all .3s" }}
                to="/"
              >
                asdsad
              </Link>
            </p>
            <p style={{ paddingTop: "5px" }}>
              <Link
                style={{ color: "#009fd5", transition: "all .3s" }}
                className="details"
                to="/"
              >
                asdsad
              </Link>
            </p>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Recommandations;
