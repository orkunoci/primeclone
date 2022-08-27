import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Container from "@mui/material/Container";
import { Icon, styled } from "@mui/material";
import logo from "../assets/logo.svg";
import MobileDropDown from "./MobileDropDown";
import Categories from "./Categories";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Search from "./Search";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
const Navbar = () => {
  const NavText = styled(Typography)(({ theme }) => ({
    color: "white",
    marginLeft: 10,
    fontSize: 17,
    fontWeight: 400,
  }));
  const StyledIcon = styled(Icon)(({ theme }) => ({
    [theme.breakpoints.up("sm")]: {
      width: 100,
      height: 50,
      padding: 5,
    },
    [theme.breakpoints.down("sm")]: {
      width: 100,
      height: 50,
      paddingX: 5,
      paddingY: 2,
    },
  }));
  const [openSearch, setOpenSearch] = useState(true);
  const handleSearch = () => {
    setOpenSearch(!openSearch);
  };

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{ background: "#1B2530"  }} // overflow: "hidden"
    >
      <Container maxWidth="disabled" paddingLeft={10} paddingRight={10}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <StyledIcon sx={{}}>
              <img
                src={logo}
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
            </StyledIcon>
            <NavText variant="body2" display={{ xs: "none", sm: "block" }}>
              <Link style={{ color: "white", textDecoration: "none" }} to="/">
                Home
              </Link>
            </NavText>
            <NavText variant="body2" display={{ xs: "none", sm: "block" }}>
              <Link
                style={{ color: "white", textDecoration: "none" }}
                to="/tvlist"
              >
                TV Shows
              </Link>
            </NavText>
            <NavText variant="body2" display={{ xs: "none", sm: "block" }}>
              <Link style={{ color: "white", textDecoration: "none" }} to="/">
                Movies
              </Link>
            </NavText>
            <MobileDropDown />
            <Categories />
          </Box>
        <Box sx={{display:'flex',alignItems:'center'}}> 
        <IconButton onClick={handleSearch}>
        {openSearch ? (
          <CloseIcon
            sx={{
              color: "#fff",
              display: {
                xs: `${openSearch ? "block" : "none"}`,
                sm: "none",
                
              },
              order:1,
              position: "absolute",
              right: 0,
              zIndex: 5,
            }}
          />
        ) : (
          <SearchIcon
            sx={{
              color: "#fff",
              display: {
                xs: `${openSearch ? "none" : "block"}`,
                sm: "none",
              },
            }}
            onClick={handleSearch}
          />
        )}
      </IconButton>
     {openSearch ? <Search  /> : null}
      <Box sx={{ display: "flex", alignItems: "center", marginRight: 2 }}>
        <AccountCircleIcon sx={{ marginX: 2 ,order:2}} paddingRight={2} /> 
        <Typography
          paddingRight={2}
          variant="body2"
          display={{ xs: "none" }}
        >
          User Name
        </Typography>
      </Box>
        </Box>
        </Box>
      </Container>
    </AppBar>
  );
};

export default Navbar;
