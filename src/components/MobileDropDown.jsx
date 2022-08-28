import React, { useState, useRef } from "react";
import Typography from "@mui/material/Typography";

import { MenuItem ,styled, Menu,Paper ,Box} from "@mui/material";
import { Link } from "react-router-dom";



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
        {openM ? <Paper sx={{
            height:'max-content',
            background: `radial-gradient(circle at 0% 10%, rgba(255, 244, 0, 0) 0%, rgba(0, 63, 255, 0.11) 0%, rgba(36, 61, 80, 1) 45%, rgba(36, 61, 80, 1) 100%);`

        }}>
          <Box sx={{textAlign:'left', padding:'10px 20px' }}>
          <h5 style={{color:'black',fontSize:'18px' ,padding:' 10px 0'}}>Top Categories</h5>
          <p style={{ 
            fontSize:'16px',
            fontWeight:400,
            padding:'15px 0',
            textAlign:'left'
          }}> <Link to='/'> Recently added Movies</Link></p>
          <p style={{ 
            fontSize:'16px',
            fontWeight:400,
            padding:'15px 0',
            textAlign:'left'
          }}> <Link to='/tvlist'>Recently added TV </Link> </p>
          <p style={{ 
            fontSize:'16px',
            fontWeight:400,
            padding:'15px 0',
            textAlign:'left'
          }}><Link to='/'>Kids</Link></p>
          <p style={{ 
            fontSize:'16px',
            fontWeight:400,
            padding:'15px 0',
            textAlign:'left'
          }}><Link to='/'>Amazon Originals</Link></p>
          <h5 style={{color:'black',fontSize:'18px' }}>Genres</h5>
          <p style={{ 
            fontSize:'16px',
            fontWeight:400,
            padding:'15px 0',
            textAlign:'left'
          }}>  <Link to='/categories/action'>Action & Adventure</Link></p>
          <p style={{ 
            fontSize:'16px',
            fontWeight:400,
            padding:'15px 0',
            textAlign:'left'
          }}> <Link to='/categories/comedy'>Comedy</Link> </p>
          <p style={{ 
            fontSize:'16px',
            fontWeight:400,
            padding:'15px 0',
            textAlign:'left'
          }}><Link to='/categories/drama'>Drama</Link></p>
          <p style={{ 
            fontSize:'16px',
            fontWeight:400,
            padding:'15px 0',
            textAlign:'left'
          }}><Link to='/categories/documentary'>Documentary</Link></p>
          <p style={{ 
            fontSize:'16px',
            fontWeight:400,
            padding:'15px 0',
            textAlign:'left'
          }}><Link to='/categories/fantasy'>Fantasy</Link></p>
          <p style={{ 
            fontSize:'16px',
            fontWeight:400,
            padding:'15px 0',
            textAlign:'left'
          }}><Link to='/categories/horror'>Horror</Link></p>
          </Box>
        </Paper> : undefined}
      </Menu>
    </>
  );
};

export default MobileDropDown;
