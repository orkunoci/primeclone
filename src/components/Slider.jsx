import React from "react";
import { Box, Container, styled } from "@mui/material";
import Carousel from "better-react-carousel";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const Slider = () => {
  const StyledContainer = styled(Container)(({ theme }) => ({
    [theme.breakpoints.up("lg")]: {
      maxWidth: 1600,
      backgroundColor: "#10171E",
    },
  }));
  const CarouselBox = styled(Box)(({ theme }) => ({
    width: "100%",
    height: "300px",
  }));

  return (
    <StyledContainer>
      <Box>
        <Carousel
          arrowRight={
            <ChevronRightIcon
              sx={{
                position: "absolute",
                top: 0,
                right: "-11%",
                fontSize: 70,
                color: "white",
                ":hover": {
                  background:
                    "linear-gradient(270deg, rgba(0,0,0,1) 0%, rgba(255,255,255,0) 100%)",
                },

                height: "100%",
                cursor: "pointer",
              }}
            />
          }
          arrowLeft={
            <ChevronLeftIcon
              sx={{
                position: "absolute",
                top: 0,
                left: "-11%",
                fontSize: 70,
                color: "white",
                ":hover": {
                  background:
                    "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(255,255,255,0) 100%)",
                },

                height: "100%",
                cursor: "pointer",
              }}
            />
          }
        >
          <Carousel.Item>
            <CarouselBox>
              <img
                src="https://img-itopya.mncdn.com/cdn/1000/1-61a927.jpg"
                alt=""
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </CarouselBox>
          </Carousel.Item>
          <Carousel.Item>
            <CarouselBox>
              <img
                src="https://img-itopya.mncdn.com/cdn/1000/1-61a927.jpg"
                alt=""
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </CarouselBox>
          </Carousel.Item>
          <Carousel.Item>
            <CarouselBox>
              <img
                src="https://img-itopya.mncdn.com/cdn/1000/1-61a927.jpg"
                alt=""
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </CarouselBox>
          </Carousel.Item>
        </Carousel>
      </Box>
    </StyledContainer>
  );
};

export default Slider;
