import React, {useEffect, useState} from 'react';
import {styled} from '@mui/material';
import axios from "axios";

import Book from "./Book";

const Root = styled('div')(({theme}) => ({
  maxWidth: '1000px',
  margin: '0 auto',
  padding: '0 10px',
  minHeight: '56vh'
}));


const Home = () => {
  const [bookInfo, setBookInfo] = useState([])
  
  useEffect(() => {
    const getData = () => {
      axios.get(process.env.REACT_APP_API_BASE + 'books')
        .then(res => setBookInfo(res.data))
    }
    getData()
  }, [])

  return (
    <Root>
      {bookInfo.map(item =>
        <Book
          id={item.id}
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