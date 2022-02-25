import React, {useEffect, useState} from 'react';
import {Box, Input, InputLabel, MenuItem, Select, styled, Typography} from '@mui/material';
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

const BannedListTitleContainer = styled('div')(({}) => ({
  display: 'flex',
  alignItems: 'center'
}));

const BookPage = () => {
  const [page, setPage] = useState([]);
  const [locationArray, setLocationArray] = useState([])
  const [stateFilter, setStateFilter] = useState('All')
  const [filteredStates, setFilteredStates] = useState(['moo'])
  let pageUrl = useParams();
  
  useEffect(() => {
    
    const data = () => {
      const info = pageData.find(i => i.url === pageUrl.bookName);
      let locations = [];
      setPage(info);
     
      locations = info.locations.map(item => item.state)
      locations = locations.filter((item, index) => locations.indexOf(item) === index);
      locations = locations.sort();
      setLocationArray(locations);
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
        name={item.name}
        city={item.city}
        state={item.state}
        reasons={item.reasons}
        year={item.year}
      />) || ''
  }
  
  const unfilteredList = () => {
    return page.locations?.map(item =>
      <SchoolInfo
        name={item.name}
        city={item.city}
        state={item.state}
        reasons={item.reasons}
        year={item.year}
      />
    )
  }

  
  return (
    <Root>
      <Typography variant={'h3'} component={'h1'} sx={{textAlign: 'center', fontStyle: 'italic'}}>{page.name}</Typography>
      <Typography variant={'h5'} sx={{textAlign: 'center', marginBottom: '30px'}}>By: {page.author}</Typography>
      <BannedListContainer>
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
                <MenuItem value={'All'}>All</MenuItem>
                {locationArray?.map(item => item && <MenuItem key={item.name} value={item || ''}>{item || ''}</MenuItem>)}
              </Select>
          </div>
        </BannedListTitleContainer>
        {stateFilter !== 'All' ? filteredList() : unfilteredList()
        }
      </BannedListContainer>
    </Root>
  )
  
}

BookPage.propTypes = {}

export default BookPage;