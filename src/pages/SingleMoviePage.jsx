import { Box, Link } from "@mui/material";
import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Recommandations from "../components/Recommandations";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Footer from "../components/Footer";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
const SingleMoviePage = () => {
  
  const [genreName, setGenreName] = useState();
  const [director, setDirector] = useState();
  const [hour, setHour] = useState();
  const [film, setFilm] = useState();
  const [filmCredits, setfilmCredits] = useState();
  const router = useLocation();
  const filmsId = parseInt(router.pathname.split("films/").slice(1)[0]);  
 
  const fetchFilmData =()=>{
    const cancelToken = axios.CancelToken.source()
    axios
    .get(
      `https://api.themoviedb.org/3/movie/${filmsId}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
   ,{cancelToken:cancelToken.token} )
    .then((res) => {
      const data = res.data;
      setFilm(data);
      calcRunTime(res.data.runtime);
      setGenreName(res.data.genres);
    });
  }
  

  const fetchFilmCreditsData =()=>{
    const cancelToken = axios.CancelToken.source()
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${filmsId}/credits?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
      ,{cancelToken:cancelToken.token})
      .then((res) => {
        const data = res.data;
        setfilmCredits(data);

        setDirector(res.data.crew.filter(({ job }) => job === "Director"));
      });
  }
  useEffect(() => {
    fetchFilmData()
    fetchFilmCreditsData()
    
  }, [filmsId]);
 


  const calcRunTime = (a) => {
    const b = Math.trunc(a / 60);
    var minutes = a % 60;
    if (minutes === 0) {
      setHour(b + " hours ");
    } else {
      setHour(b + " hours " + minutes + " minutes ");
    }
  };

  return (
    <>
      <Navbar />
      <Box
        sx={{
          maxWidth: "1600px",
          padding: "0 50px",
          marginBottom: "48px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "500px",
          marginLeft: "auto",
          marginRight: "auto",
          position: "relative",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            position: "relative",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: 0,
              color: "white",
              left: 0,
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                right: 0,
                top: 0,
                zIndex: "20",
                height: "100%",
              }}
            ></Box>
            <h3
              style={{
                marginTop: "48px",
                fontSize: 35,
                fontWeight: 400,
                lineHeight: "36px",
                color: "white",
                textTransform: "capitalize",
              }}
            >
              {film && film.title}
            </h3>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                width: "100%",
                marginTop: "20px",
                fontSize: "17px",
                lineHeight: "24px",
                color: "#8197a4",
              }}
            >
              <p>{hour && hour}</p>
              <p style={{ marginLeft: 20 }}>
                {film && film.release_date.slice(0, 4)}
              </p>
            </Box>
            <p
              style={{
                fontSize: "17px",
                lineHeight: "24px",
                color: "white",
                marginTop: "20px",
              }}
            >
              {film && film.overview}
            </p>

            <Box
              sx={{ marginTop: "20px", display: "flex", alignItems: "center" }}
            >
              <Box
                sx={{
                  color: "#8197a4",
                  fontSize: "17px",
                  textTransform: "capitalize",
                }}
              >
                <p style={{ paddingTop: "5px" }}>Directors</p>

                <p style={{ paddingTop: "5px" }}>Genres</p>
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
                  {director &&
                    director.map((d) => {
                      return (
                        <Link
                          className="details"
                          style={{ color: "#009fd5", transition: "all .3s" }}
                          to="/"
                        >
                          {director.length === 1 ? d.name : d.name + " "}
                        </Link>
                      );
                    })}
                </p>

                <p style={{ paddingTop: "5px" }}>
                  {genreName &&
                    genreName.map((g) => {
                      return (
                        <Link
                          style={{ color: "#009fd5", transition: "all .3s" }}
                          className="details"
                          to="/"
                        >
                          {g.name + " "}
                        </Link>
                      );
                    })}
                </p>
              </Box>
            </Box>
            <Box sx={{ marginTop: "50px" }}>
            <Box sx={{ backgroundColor: "#0f79af",width:'100px',padding:'10px',borderRadius:1,color:'white'}}>
              <Link to='/'>
                <Box sx={{display:"flex",alignItems:'center',color:'white'}}>
                  <span ><PlayArrowIcon/></span>
                  <span style={{marginLeft:12,fontSize:'18px',textTransform:'capitalize'}}>play</span>
               </Box>
             </Link>
           </Box>
          </Box>
          </Box>
        </Box>
        <Box
          sx={{
            width: "100%",
            position: "relative",

            height: "500px",
          }}
        >
          <img
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
            src={
              film && `https://image.tmdb.org/t/p/w300/${film.backdrop_path}`
            }
            alt=""
          />
        </Box>
        <Box
          sx={{
            position: "absolute",
            zIndex: "1",
            top: 0,
            left: "50%",
            width: "20%",
            height: "100%",
            background: "linear-gradient(to left, transparent, rgb(15,23,30) )",
          }}
        ></Box>
      </Box>

      <Recommandations genres={genreName} />
      <Footer/>
    </>
  );
};

export default SingleMoviePage;
