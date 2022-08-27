import React from "react";
import { Box, Container, styled } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const Slider = () => {
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
    <SwiperSlide>
    <Box sx={{width:'100%',height:'300px'}}>
    <img
    src="https://img-itopya.mncdn.com/cdn/1000/1-61a927.jpg"
    alt=""
    style={{ width: "100%", height: "100%", objectFit: "cover" }}
  />
    </Box>
    </SwiperSlide>
     
    <SwiperSlide>
    <Box sx={{width:'100%',height:'300px'}}>
    <img
    src="https://img-itopya.mncdn.com/cdn/1000/1-61a927.jpg"
    alt=""
    style={{ width: "100%", height: "100%", objectFit: "cover" }}
  />
    </Box>
    </SwiperSlide>
    <SwiperSlide>
    <Box sx={{width:'100%',height:'300px'}}>
    <img
    src="https://img-itopya.mncdn.com/cdn/1000/1-61a927.jpg"
    alt=""
    style={{ width: "100%", height: "100%", objectFit: "cover" }}
  />
    </Box>
    </SwiperSlide>
 
    </Swiper>
      </Box>
    </StyledContainer>
  );
};

export default Slider;



