import React, { useState, useEffect,useRef } from "react";
import {MenuItem, Paper,MenuList } from "@mui/material";
import InputAdornment from '@mui/material/InputAdornment';
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";


const Search = ({openSearch}) => {

  const ref = useRef();
  const [query,setQuery]=useState('')
  const [queryResult,setQueryResult]=useState([])
  useEffect(()=>{
    window.addEventListener('mousedown',handleClickOutSide)
    
    return ()=>{
      window.removeEventListener('mousedown',handleClickOutSide)
    }
  },[])
  useEffect(()=>{
      if(query !== '' && query !== ' '){
        setTimeout(() => {
          axios.get(`${process.env.REACT_APP_SEARCH_MOVIE}?api_key=${process.env.REACT_APP_API_KEY}&query=${query}&page=1`).then(res=>{
            const data =  res.data.results
           setQueryResult(data.slice(0,10));
        })
        }, 5000);
      }
  return ()=> clearTimeout()

  },[query])

  const handleClickOutSide =(e)=>{
    if(ref && ref.current.contains(e.target)){
      setQuery('')
    }
  }
  return (
    <>
    <form style={{position:"relative"}} >
   {
    <TextField 
    placeholder="Search"
      onChange={(e)=>{setQuery(e.target.value)}}
      InputProps={{
        startAdornment: (
          <InputAdornment position="end">
            <SearchIcon sx={{color:'white'}}/>
          </InputAdornment>
        ),
      }}
      sx={{
      
        width:'300px',
        display:{xs:'none' ,sm:'block'},
     
        padding:'10px',
        borderRadius:'none',
        '& .MuiOutlinedInput-root':{
          borderColor:"white",
          color:"white",
          '& fieldset':{
            borderColor:"white",
          color:"white",
          
          },
          '&:hover fieldset':{
            borderColor:"white",
            color:"white",
          }
        },
        '& label.Mui-focused':{
          borderColor:"white",
          color:"white",
        }
      }}
    />
    }

{
  query && 

  <Paper 
   sx={{
    position:'absolute',
    width:'100%',
    height:'max-content',
    top:'87%',
    left:0,
    zIndex:50,
    backgroundColor:'#344150'
  }}>
    <MenuList>
      {queryResult.map((a,index)=>{
        return (
          <MenuItem ref={ref} key={index} sx={{borderBottom:'1px solid gray',backgroundColor:'#344150' ,color:'white',fontSize:'16px',fontWeight:400 ,transition:'all 1s',padding:'10px' ,"&:hover":{
            backgroundColor:'#566b84',
          }}}>{<a style={{color:'white'}} href={`/films/${a.id}`}>{a.title}</a>  }</MenuItem>
        )
      })}
    </MenuList>
  </Paper>
}

    </form>
    
      
      
    
  
            </>
  );
};

export default Search;

