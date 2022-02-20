import React, {useState} from 'react';
import {
  Checkbox,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAmazon} from "@fortawesome/free-brands-svg-icons";
import {faBook} from "@fortawesome/free-solid-svg-icons";
import bookInfo from '../../bannedBooks.json';
import {Link} from "react-router-dom";


const Home = () => {
  const[savedBooks, setSavedBooks] = useState([])
  
  const handleSave = (id) => {
    const oldBooks = savedBooks;
    let newBooks;
    if(oldBooks.includes(id.toString())) {
      newBooks =  oldBooks.filter(i => i !== id.toString())
    } else {
      newBooks = oldBooks;
      newBooks.push(id.toString());
    }
    setSavedBooks(newBooks);
    localStorage.setItem('savedBooks', newBooks.toString())
  }
  
  
  
  return (
    <TableContainer>
      <Table sx={{maxWidth: '1000px', margin: '0 auto'}}>
        <TableHead>
          <TableRow>
            <TableCell>Purchased</TableCell>
            <TableCell>Book</TableCell>
            <TableCell align={'center'}>Amazon</TableCell>
            <TableCell align={'center'}>Barnes & Noble</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            bookInfo.map(b => (
              <TableRow key={b.id}>
                {savedBooks.includes(b.id.toString())?<TableCell><Checkbox onChange={ () => handleSave(b.id)} checked /></TableCell>: <TableCell><Checkbox onChange={ () => handleSave(b.id)} /></TableCell>}
                <TableCell><Link to={'/page/' + b.url}>{b.name}</Link></TableCell>
                <TableCell align={'center'}><IconButton href={b.amazon} target={'_blank'}><FontAwesomeIcon icon={faAmazon} /></IconButton></TableCell>
                <TableCell align={'center'}><IconButton href={b.bn} target={'_blank'}><FontAwesomeIcon icon={faBook} /></IconButton></TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </TableContainer>
  )
  
}


export default Home;