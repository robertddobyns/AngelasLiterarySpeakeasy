import React, {useEffect, useState} from 'react';
import {Box, styled} from '@mui/material';
import pageData from '../../bannedBooks.json';
import {useParams} from "react-router-dom";

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
    <Box>
      The information page for {page.name} will be coming shortly.
    </Box>
  )
  
}

BookPage.propTypes = {}

export default BookPage;