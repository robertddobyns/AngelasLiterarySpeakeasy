import React, {useState} from 'react';
import { styled } from '@mui/material';

import bookInfo from '../../bannedBooks.json';
import Book from "./Book";

const Root = styled('div')(({theme}) => ({
  maxWidth: '1000px',
  margin: '0 auto',
  padding: '0 10px'
}));

const Home = () => {

  return (
    <Root>
      {bookInfo.map(item =>
        <Book
          imageUrl={item.imageUrl}
          url={item.url}
          name={item.name}
          amazon={item.amazon}
          author={item.author}
          bn={item.bn}
        />)
      }
 
    </Root>
  )
  
}


export default Home;