import { Box } from '@mui/material'
import React from 'react'
import logo from '../assets/logo.svg'

const Footer = () => {
  return (
    <Box sx={{display:'flex',alignItems:'center', flexDirection:'column',marginTop:'20px',paddingTop:'10px'}}> 
      <Box sx={{width:'200px',height:'100px',overflow:'hidden'}}>
        <img src={logo} style={{objectFit:'contain',width:'100%',height:'100%'}}/>
      </Box>
        Orkun Oci tarafindan clone web uygulamasi ornek proje olarak kodlanmstir 
      <Box>
      </Box>
    </Box>
  )
}

export default Footer