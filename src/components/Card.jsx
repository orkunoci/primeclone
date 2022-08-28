import { Box, Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import AddIcon from "@mui/icons-material/Add";
import SubtitlesIcon from "@mui/icons-material/Subtitles";
import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
const Card = ({ film , location}) => {
  const router = useLocation();
  const route = (router.pathname.split("/").slice(1)[0]);  
  const [releaseYear,setRelaseYear]= useState()
  const releaseYearCalc = ()=>{
    route === 'tvlist' ? setRelaseYear(film.first_air_date.slice(0,4) ) : setRelaseYear( film.release_date.slice(0,4))
  }
  useEffect(()=>{
    releaseYearCalc()
  },[])
  return (
    <>
      <Paper
        sx={{
          width: "270px",
          height: "200px",

          position: "relative",
          transition: "all .3s",
          "&:hover": {
            transform: "scale(1.1)",
            zIndex: 20,

            "& .deneme": {
              opacity: 1,
              color: "white",
              display: "block",
            },
          },
        }}
      >
        {location === 'tvlist' ?  <Link to={`/series/${film.id}`}>
        <img
          className="coverphoto"
          src={
            film.backdrop_path
              ? `https://image.tmdb.org/t/p/w300/${film.backdrop_path}`
              : `https://image.tmdb.org/t/p/w300/${film.poster_path}`
          }
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
          }}
          alt=""
        />
      </Link> : <Link to={`/films/${film.id}`}>
      <img
        className="coverphoto"
        src={
          film.backdrop_path
            ? `https://image.tmdb.org/t/p/w300/${film.backdrop_path}`
            : `https://image.tmdb.org/t/p/w300/${film.poster_path}`
        }
        style={{
          objectFit: "cover",
          width: "100%",
          height: "100%",
        }}
        alt=""
      />
    </Link>}

        <Box
          sx={{
            position: "absolute",
            top: "100%",
            backgroundColor: "#0f171e",
          }}
        >
          <Paper
            elevation={5}
            className="deneme"
            sx={{
              width: "270px",
              height: "200px",
              backgroundColor: "#0f171e",
              opacity: 0,
              transition: "all .3s",
              display: "none",
              filter: "drop-shadow(0px -44px 34px #000)",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  padding: "10px",
                }}
              >
                <PlayCircleFilledWhiteIcon
                  className="play"
                  style={{
                    fontSize: "30px",
                    cursor: "pointer",
                    transition: "all .3s",
                  }}
                />

                <p style={{ marginLeft: "10px" }}>Play </p>
              </Box>
              <Box>
                <AddIcon />
              </Box>
            </Box>
            <h3
              style={{
                fontSize: "14px",
                fontWeight: "200",
                textTransform: "uppercase",
                display: "flex",
                justifyContent: "start",
                paddingLeft: "20px",
              }}
            >
              {film.title || film.name}
            </h3>
            <p
              style={{
                margin: "20px 0",
                fontSize: "16px",
                paddingLeft: "10px",
                paddingRight: "10px",
              }}
              className="overview"
            >
              {film.overview}
            </p>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                paddingLeft: "10px",
                paddingRight: "10px",
              }}
            >
              <SubtitlesIcon />
              {releaseYear}
            </Box>
          </Paper>
        </Box>
      </Paper>
    </>
  );
};

export default Card;


/* */