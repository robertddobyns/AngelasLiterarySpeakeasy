import './App.css';
import {
  Box,
  TableContainer,
  Table,
  TableRow,
  TableHead,
  TableCell,
  TableBody,
  IconButton,
  Checkbox, Typography
} from "@mui/material";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAmazon} from '@fortawesome/free-brands-svg-icons';
import{faBook} from "@fortawesome/free-solid-svg-icons";
import bookInfo from './bannedBooks.json';
import {useEffect, useState} from "react";

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

function App() {
  const[savedBooks, setSavedBooks] = useState([])

  const Header = () => {
    return (
      <Box sx={headerStyle}>
        <Typography variant={'h3'} component={'h1'} gutterBottom>Angela's Literary Speakeasy</Typography>
        <Typography variant={'subtitle'}>An ever growing list of books banned in schools and communities across the US</Typography>
      </Box>
    )
  }
  
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
    <div className="App">
      <Header/>
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
                  <TableCell>{b.name}</TableCell>
                  <TableCell align={'center'}><IconButton href={b.amazon} target={'_blank'}><FontAwesomeIcon icon={faAmazon} /></IconButton></TableCell>
                  <TableCell align={'center'}><IconButton href={b.bn} target={'_blank'}><FontAwesomeIcon icon={faBook} /></IconButton></TableCell>
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default App;