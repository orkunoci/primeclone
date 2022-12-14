import { Box } from "@mui/material";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation,Pagination } from "swiper";
import axios from "axios";
import Card from "./Card";
import { useLocation } from "react-router-dom";

const Cards = ({ genreName, genreId,recommendedGenreIds }) => {
  const [films, setfilms] = useState([]);
  const router = useLocation();
  const route = router.pathname.split("/").slice(1)[0];
  const [location, setLocation] = useState()

  const fetchData =()=>{
      if( route === 'tvlist'){
        axios
        .get(`${process.env.REACT_APP_DISCOVER_BASE_URL}tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=${genreId}`)
        .then((res) => {
          const data = res.data;
          setfilms(data.results);
        });

      } else if(route === 'films' || route === ''){
          axios
          .get(`${process.env.REACT_APP_DISCOVER_BASE_URL}movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&&page=1&primary_release_year=2016&with_genres=${genreId}`)
          .then((res) => {
            const data = res.data;
            setfilms(data.results); });
      }else{
        recommendedGenreIds &&
        axios
          .get(`${process.env.REACT_APP_DISCOVER_BASE_URL}movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&&page=1&primary_release_year=2016&with_genres=${recommendedGenreIds[0]}`)
          .then((res) => {
            const data = res.data;
            setfilms(data.results); });
      }
     
    
     
   setLocation(route)
    }


  useEffect(() => {
   fetchData()
  }, [route,genreId]);

  return (
    <Box sx={{}}>
      <h2 style={{ padding: "20px", color: "white" }}>{genreName}</h2>

      <Box
        id="zindex"
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          width: "100%",
          position: "relative",
          height: "100%",
          zIndex: 1,
          "&:hover": {
            zIndex: 20,
          },
        }}
      >
        <Swiper
          slidesPerView={1}
          spaceBetween={15}
          navigation={true}
          modules={[Navigation,Pagination]}
          className="mySwiper"
       
        
        >
          {films.map((film) => {
            return (
              <SwiperSlide key={film.id}>
                <Card location={location} film={film} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Box>
    </Box>
  );
};

export default Cards;
