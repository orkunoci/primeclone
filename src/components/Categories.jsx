import React, { useState, useRef } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Menu } from "@mui/material";
import { MenuItem } from "@mui/material";
import { styled } from "@mui/material";
import { Link } from "react-router-dom";
const Categories = () => {
  const navRef = useRef();
  const SeperatorDiv = styled(Box)(({ theme }) => ({
    backgroundColor: "#8197a4",
    borderRadius: 2,
    marginTop: 0,
    marginRight: 48,
    marginLeft: 48,
    minHeight: 300,
    width: 2,
  }));
  const NavText = styled(Typography)(({ theme }) => ({
    color: "white",
    marginLeft: 10,
    fontSize: 17,
    fontWeight: 400,
    cursor: "pointer",
  }));
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <NavText
        ref={navRef}
        id="basic-button"
        aria-controls={anchorEl ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={anchorEl ? "true" : undefined}
        onClick={handleClick}
        variant="body2"
        display={{ xs: "none", sm: "block" }}
      >
        Categories
      </NavText>
      <Menu
        MenuListProps={{
          sx: {
            width: "100%",
          },
        }}
        anchorEl={navRef}
        open={anchorEl}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          sx: {
            width: "100%",
            background: `linear-gradient(325deg, rgba(16,23,30,1) 0%, rgba(17,31,43,1) 100%)`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            color: "white",
            top: "58px !important",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "flex-end",
              maxWidth: 500,
            }}
          >
            <MenuItem
              sx={{
                backgroundImage: `url("https://m.media-amazon.com/images/G/01/digital/video/web_cats/Amazon-Originals.png")`,
                margin: 1,
                width: 150,
                height: 100,
                display: "flex",
                justifyContent: "center",
                borderRadius: "5px",
                overflow: "hidden",
                fontSize: "16px",
                textAlign: "center",
                fontWeight: 900,
                "&:hover": {
                  border: "2px solid white",
                },
              }}
            >
              Amazon Originals
            </MenuItem>
            <MenuItem
              sx={{
                backgroundImage: `url("https://m.media-amazon.com/images/G/01/digital/video/web_cats/Amazon-Originals.png")`,
                margin: 1,
                width: 150,
                height: 100,
                display: "flex",
                justifyContent: "center",
                borderRadius: "5px",
                overflow: "hidden",
                fontSize: "16px",
                textAlign: "center",
                fontWeight: 900,
                "&:hover": {
                  border: "2px solid white",
                },
              }}
            >
              Kids
            </MenuItem>
            <MenuItem
              sx={{
                backgroundImage: `url("https://m.media-amazon.com/images/G/01/digital/video/web_cats/Amazon-Originals.png")`,
                margin: 1,
                width: 150,
                height: 100,
                display: "flex",
                justifyContent: "center",
                borderRadius: "5px",
                overflow: "hidden",
                fontSize: "16px",
                textAlign: "center",
                fontWeight: 900,
                "&:hover": {
                  border: "2px solid white",
                },
              }}
            >
              Recently Added <br /> Movies
            </MenuItem>
            <MenuItem
              sx={{
                backgroundImage: `url("https://m.media-amazon.com/images/G/01/digital/video/web_cats/Amazon-Originals.png")`,
                margin: 1,
                width: 150,
                height: 100,
                display: "flex",
                justifyContent: "center",
                borderRadius: "5px",
                overflow: "hidden",
                fontSize: "16px",
                textAlign: "center",
                fontWeight: 900,
                "&:hover": {
                  border: "2px solid white",
                },
              }}
            >
              Recently added <br /> TV
            </MenuItem>
          </Box>
          <SeperatorDiv></SeperatorDiv>
          <Box
            sx={{
              display: "flex",
              alignItems: "start",
              justifyContent: "center",
              height: "100%",
              flexWrap: "wrap",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <Typography
                  padding={2}
                  variant="h6"
                  fontWeight={700}
                  component="h3"
                >
                  Genres
                </Typography>
                <Typography
                  padding={1}
                  variant="body1"
                  textAlign="left"
                  color="#8197a4"
                  sx={{
                    transition: "all .3s ",
                    cursor: "pointer",
                    "&:hover": {
                      color: "white",
                    },
                  }}
                >
                  <Link
                    className="categories"
                    style={{
                      color: "#8197a4",
                      padding: 1,
                      textAlign: "left",
                      textTransform: "capitalize",
                      transition: "all .3s",
                    }}
                    to="/categories/action"
                  >
                    Action and adventure
                  </Link>
                </Typography>
                <Typography
                  padding={1}
                  variant="body1"
                  textAlign="left"
                  color="#8197a4"
                  sx={{
                    transition: "all .3s ",
                    cursor: "pointer",
                    "&:hover": {
                      color: "white",
                    },
                  }}
                >
                  <Link
                    className="categories"
                    style={{
                      color: "#8197a4",
                      padding: 1,
                      textAlign: "left",
                      textTransform: "capitalize",
                    }}
                    to="/categories/comedy"
                  >
                    Comedy
                  </Link>
                </Typography>
                <Typography
                  padding={1}
                  variant="body1"
                  textAlign="left"
                  color="#8197a4 "
                  sx={{
                    transition: "all .3s ",
                    cursor: "pointer",
                    "&:hover": {
                      color: "white",
                    },
                  }}
                >
                  <Link
                    className="categories"
                    style={{
                      color: "#8197a4",
                      padding: 1,
                      textAlign: "left",
                      textTransform: "capitalize",
                    }}
                    to="/categories/drama"
                  >
                    Drama
                  </Link>
                </Typography>
                <Typography
                  padding={1}
                  variant="body1"
                  textAlign="left"
                  color="#8197a4"
                  sx={{
                    transition: "all .3s ",
                    cursor: "pointer",
                    "&:hover": {
                      color: "white",
                    },
                  }}
                >
                  <Link
                    className="categories"
                    style={{
                      color: "#8197a4",
                      padding: 1,
                      textAlign: "left",
                      textTransform: "capitalize",
                    }}
                    to="/categories/documentary"
                  >
                    Documentary
                  </Link>
                </Typography>
                <Typography
                  padding={1}
                  variant="body1"
                  textAlign="left"
                  color="#8197a4"
                  sx={{
                    transition: "all .3s ",
                    cursor: "pointer",
                    "&:hover": {
                      color: "white",
                    },
                  }}
                >
                  <Link
                    className="categories"
                    style={{
                      color: "#8197a4",
                      padding: 1,
                      textAlign: "left",
                      textTransform: "capitalize",
                    }}
                    to="/categories/fantasy"
                  >
                    Fantasy
                  </Link>
                </Typography>
                <Typography
                  padding={1}
                  variant="body1"
                  textAlign="left"
                  color="#8197a4"
                  sx={{
                    transition: "all .3s ",
                    cursor: "pointer",
                    "&:hover": {
                      color: "white",
                    },
                  }}
                >
                  <Link
                    className="categories"
                    style={{
                      color: "#8197a4",
                      padding: 1,
                      textAlign: "left",
                      textTransform: "capitalize",
                    }}
                    to="/categories/horror"
                  >
                    Horror
                  </Link>
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Menu>
    </>
  );
};

export default Categories;
