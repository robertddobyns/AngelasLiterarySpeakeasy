import React, {useContext, useEffect, useState} from 'react';
import {Box, Input, InputLabel, MenuItem, Select, styled, Typography} from '@mui/material';
import pageData from '../../bannedBooks.json';
import {Link, useParams} from "react-router-dom";
import SchoolInfo from "./SchoolInfo";
import axios from "axios";
import {UserContext} from "../../security/UserContext";

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

const BannedListTitleContainer = styled('div')(({}) => ({
  display: 'flex',
  alignItems: 'center'
}));

const BookPage = () => {
  const [page, setPage] = useState([]);
  const [locationArray, setLocationArray] = useState([])
  const [stateFilter, setStateFilter] = useState('All')
  const [filteredStates, setFilteredStates] = useState(['moo'])
  const user = useContext(UserContext);
  let pageUrl = useParams();
  
  useEffect(() => {
    const data = () => {
      axios.get(process.env.REACT_APP_API_BASE + 'books/url/' + pageUrl.bookName)
        .then(res => (
          setPage(res.data),
          setLocationArray(res.data.locations)
        ))
        .catch(e => e.message)
    }
    data()
  }, [])
  
  const displayBannedStates = (state) => {
    let stateArray = page.locations.filter(item => item.state === state);
    setFilteredStates(stateArray);
  }
  
  const handleStateChange = (e) => {
    const state = e.target.value;
    setStateFilter(state)
    displayBannedStates(state)
  }
  
  const filteredList = () => {
    return filteredStates.map(item =>
      <SchoolInfo
        id={item.id}
        name={item.name}
        city={item.city}
        state={item.state}
        reasons={item.reasons}
        year={item.year}
        status={item.status}
      />) || ''
  }
  
  const unfilteredList = () => {
    return page.locations?.map(item =>
      <SchoolInfo
        id={item.id}
        name={item.name}
        city={item.city}
        state={item.state}
        status={item.status}
        reasons={item.reasons}
        year={item.year}
      />
    )
  }

  
  return (
    <Root>
      <Typography variant={'h3'} component={'h1'} sx={{textAlign: 'center', fontStyle: 'italic'}}>{page.name}</Typography>
      <Typography variant={'h5'} sx={{textAlign: 'center', marginBottom: '30px'}}>By: {page.author}</Typography>
      {user.user && <Link to={'/addlocation'}>+Location</Link>}
      {page.locations?.length > 0 && <BannedListContainer>
        <BannedListTitleContainer>
          {page.locations?.length > 0 && <Typography variant={'h4'} sx={{marginRight: '20px'}}>Banned Locations</Typography>}
          <div style={{display: 'flex', flexDirection: 'column'}}>
            <InputLabel id={'state-label'}>Select State</InputLabel>
              <Select
                labelId={'state-label'}
                onChange={handleStateChange}
                value={stateFilter}
                label={'Select State'}
              >
                <MenuItem key={0} value={'All'}>All</MenuItem>
                {locationArray?.map(item => item && <MenuItem key={item.id} value={item.state || ''}>{item.state || ''}</MenuItem>)}
              </Select>
          </div>
        </BannedListTitleContainer>
        {stateFilter !== 'All' ? filteredList() : unfilteredList()
        }
      </BannedListContainer>}
    </Root>
  )
  
}

BookPage.propTypes = {}

export default BookPage;