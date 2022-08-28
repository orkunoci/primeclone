import React, { useEffect, useState } from "react";
import { Box, Container, styled } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import axios from "axios";
const Slider = () => {
  const [films,setFilms]=useState();
  
  const fetchData=()=>{
    axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=c288fcfb3e533784be287382026d8752`).then(res=>{
      const data = res.data.results
      setFilms(data)
    }
    )
  }

  useEffect(()=>{
    fetchData()
  },[])


  const StyledContainer = styled(Container)(({ theme }) => ({
    [theme.breakpoints.up("lg")]: {
      maxWidth: 1880,
      backgroundColor: "#10171E",
      padding:0
    },
  }));

  return (
    <StyledContainer>
      <Box>
      <Swiper
  
      cssMode={true}
      navigation={true}
      pagination={true}
      mousewheel={true}
      keyboard={true}
      modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      className="mySwiper homepage"
    >
   {
    films && 
      films.map((film,index)=>{
        return( <SwiperSlide key={index}>
        <Box sx={{width:'100%',height:'400px'}}>
        <img
        src={`https://image.tmdb.org/t/p/original/${film.backdrop_path}`}
        alt=""
        style={{ width: "100%", height: "100%", objectFit: "cover",objectPosition:'center' }}
        />
        </Box>
        </SwiperSlide>)
      })

   }
 
    </Swiper>
      </Box>
    </StyledContainer>
  );
};

export default Slider;




