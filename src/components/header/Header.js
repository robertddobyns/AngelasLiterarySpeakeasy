import React from 'react';
import {Box, Typography} from "@mui/material";

const headerStyle = {
  height: '100px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  paddingTop: '20px',
  margin: '10px',
  marginBottom: '50px'
}

const Header = () => {
  
  
  return (
    <Box>
      <Box sx={headerStyle}>
        <Typography variant={'h3'} component={'h1'} gutterBottom>Angela's Literary Speakeasy</Typography>
        <Typography variant={'subtitle1'}>An ever growing list of books banned in schools and communities across the US</Typography>
        <Typography variant={'subtitle2'}>The checkboxes are only there for your use right now. I do not want any of your personal information so I do not save them.</Typography>
      </Box>
    </Box>
  )
  
}

export default Header;