import React, {useEffect, useState} from 'react';
import {Box, styled, Typography} from '@mui/material';
import pageData from '../../bannedBooks.json';
import {useParams} from "react-router-dom";
import SchoolInfo from "./SchoolInfo";

const Root = styled('div')(({theme}) =>({
  maxWidth: '1000px',
  margin: '0 auto',
  minHeight: '60vh',
  padding: '0 10px'
}))

const BannedListContainer = styled('div')(({theme}) => ({
  [theme.breakpoints.down('sm')] : {
  
  }
}));

const BookPage = () => {
  const [page, setPage] = useState([]);
  let pageUrl = useParams();
  
  useEffect(() => {
    const data = () => {
      const info = pageData.find(i => i.url === pageUrl.bookName);
      setPage(info);
    }
    
    data()
  }, [])
  
  return (
    <Root>
      <Typography variant={'h3'} component={'h1'} sx={{textAlign: 'center', fontStyle: 'italic'}}>{page.name}</Typography>
      <Typography variant={'h5'} sx={{textAlign: 'center', marginBottom: '30px'}}>By: {page.author}</Typography>
      <BannedListContainer>
        {page.locations?.length > 0 && <Typography variant={'h4'}>Banned Locations</Typography>}
        {page.locations?.map(item => (
          <SchoolInfo
            name={item.name}
            city={item.city}
            state={item.state}
            reasons={item.reasons}
            year={item.year}
          />))}
      </BannedListContainer>
    </Root>
  )
  
}

BookPage.propTypes = {}

export default BookPage;