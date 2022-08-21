import React, { useState, useRef } from "react";
import Typography from "@mui/material/Typography";
import { Divider, Menu } from "@mui/material";
import { MenuItem } from "@mui/material";
import { Icon, styled } from "@mui/material";
import Categories from "./Categories";

const MobileDropDown = () => {
  const [mobileAnchorEl, setMobileAnchorEl] = useState(null);
  const [openM, setOpenM] = useState(false);
  const navRef = useRef();
  const openSub = () => {
    setOpenM(!openM);
  };
  const handleMobile = (event) => {
    setMobileAnchorEl(event.currentTarget);
  };
  const handleMobileClose = () => {
    setMobileAnchorEl(null);
  };

  const NavText = styled(Typography)(({ theme }) => ({
    color: "white",
    marginLeft: 10,
    fontSize: 17,
    fontWeight: 400,
  }));
  return (
    <>
      <NavText
        variant="body2"
        display={{ xs: "block", sm: "none" }}
        ref={navRef}
        id="mobile-menu"
        aria-controls={mobileAnchorEl ? "basic-mobile-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={mobileAnchorEl ? "true" : undefined}
        onClick={handleMobile}
        keepMounted={true}
      >
        Browse
      </NavText>
      <Menu
        MenuListProps={{
          sx: {
            width: "100%",
            textAlign: "left",
          },
        }}
        id="basic-mobile-menu"
        anchorEl={navRef}
        open={openM ? true : mobileAnchorEl}
        onClose={handleMobileClose}
        onClick={handleMobileClose}
        PaperProps={{
          sx: {
            width: "100%",
            backgroundColor: "#1b2530",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            color: "white",
            top: "40px !important",
          },
        }}
      >
        <MenuItem>Home</MenuItem>
        <MenuItem>TV Shows</MenuItem>
        <MenuItem>Movies</MenuItem>
        {<MenuItem onClick={openSub}>asdasd</MenuItem>}
        {openM ? <MenuItem>2</MenuItem> : undefined}
      </Menu>
    </>
  );
};

export default MobileDropDown;
