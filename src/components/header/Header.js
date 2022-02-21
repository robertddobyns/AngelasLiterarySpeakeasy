import React from 'react';
import {styled, Box, Typography} from "@mui/material";

const Root = styled('div')(({theme}) => ({
  margin: '0 auto',
  textAlign: 'center',
  marginBottom: '30px',
}))

const TitleContainer = styled('div')(({theme}) => ({
  fontWeight: 'bold',
  margin: '20px',
  [theme.breakpoints.down('sm')]: {
    fontSize: '25px'
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '40px'
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '50px'
  }
}));

const SubtitleContainer = styled('div')(({theme}) => ({
  textAlign: 'center',
  paddingBottom: '10px',
  [theme.breakpoints.down('sm')]: {
    fontSize: '15px'
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '20px'
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '30px'
  }
}));

const Header = () => {
  return (
    <Root>
      <TitleContainer>
        Angela's Literary Speakeasy
      </TitleContainer>
      <SubtitleContainer>
        An ever growing list of books banned in schools and communities across the United States
      </SubtitleContainer>
      <Typography variant={'subtitle2'} sx={{textAlign: 'center'}}>The checkboxes are only there for your use right now. I do not want any of your personal information so I do not save them.</Typography>
    </Root>
  )
  
}

export default Header;