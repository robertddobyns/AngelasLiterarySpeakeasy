import React, {useContext, useEffect, useState} from 'react';
import {InputLabel, MenuItem, Select, styled, Typography} from '@mui/material';
import {Link, useParams} from "react-router-dom";
import SchoolInfo from "./SchoolInfo";
import axios from "axios";
import {Helmet} from "react-helmet";
import noImage from "../../../images/NoImage.jpg";

const BookPage = () => {
	
	const [page, setPage] = useState([]);
	const [statesArray, setStatesArray] = useState([])
	const [stateFilter, setStateFilter] = useState('All')
	const [filteredStates, setFilteredStates] = useState(['moo'])
	const [token, setToken] = useState(null)
	let pageUrl = useParams();
	
	useEffect(() => {
		const data = () => {
			axios.get(process.env.REACT_APP_API_BASE + 'books/url/' + pageUrl.bookName)
				.then(res => (
					setPage(res.data)
				))
				.catch(e => e.message)
		}
		const stateData = () => {
			axios.get(process.env.REACT_APP_API_BASE + 'books/locationState/' + pageUrl.bookName)
				.then(res =>
					setStatesArray(res.data)
				)
				.catch(e => e.message)
		}
		data()
		stateData()
	}, [pageUrl.bookName])
	
	useEffect(() => {
		localStorage.getItem('token') && setToken(localStorage.getItem('token'))
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
				key={item.id}
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
				key={item.id}
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
			<Helmet>
				<title>{page ? page.name + ' | ' + page.author : 'LiterarySpeakeasy'}</title>
				<meta
					name={'description'}
					content={'The history of ' + page.name + ' being banned'}
				/>
			</Helmet>
			<ContentDiv>
				<BookPhotoContainer>
					<BookPhoto
						src={page.imageUrl || noImage}
						onError={({ currentTarget }) => {
							currentTarget.onerror = null
							currentTarget.src = noImage
						}}
						alt={page.name}
					/>
				</BookPhotoContainer>
				<DescriptionDiv>
					<Typography variant={'h3'}
											component={'h1'}
											sx={{ textAlign: 'center', fontStyle: 'italic' }}
					>
						{page.name}
					</Typography>
					<Typography
						variant={'h5'}
						sx={{ textAlign: 'center', marginBottom: '30px' }}
					>
						By: {page.author}
					</Typography>
					<Typography>{page.description}</Typography>
				</DescriptionDiv>
			</ContentDiv>
			{token && <Link to={'/addlocation'}>+Location</Link>}
			{page.locations?.length > 0 && <BannedListContainer>
				<BannedListTitleContainer>
					{page.locations?.length > 0 &&
						<Typography variant={'h4'} sx={{ marginRight: '20px' }}>Banned Locations</Typography>}
					<div style={{ display: 'flex', flexDirection: 'column' }}>
						<InputLabel id={'state-label'}>Select State</InputLabel>
						<Select
							labelId={'state-label'}
							onChange={handleStateChange}
							value={stateFilter}
							label={'Select State'}
						>
							<MenuItem key={0} value={'All'}>All</MenuItem>
							{statesArray?.map(item => item && <MenuItem key={item || 0} value={item || ''}>{item || ''}</MenuItem>)}
						</Select>
					</div>
				</BannedListTitleContainer>
				{stateFilter !== 'All' ? filteredList() : unfilteredList()
				}
			</BannedListContainer>}
		</Root>
	)
	
}

const Root = styled('div')(({ theme }) => ({
	maxWidth: '1000px',
	margin: '0 auto',
	minHeight: '60vh',
	padding: '0 10px',
	paddingTop: '20px',
	marginBottom: '0',
	backgroundColor: 'white'
}))

const ContentDiv = styled('div')(({ theme }) => ({
	display: 'flex',
	[theme.breakpoints.down('sm')]: {
		flexDirection: 'column',
		marginBottom: '20px'
	},
	[theme.breakpoints.up('sm')]: {
		flexDirection: 'row'
	}
	
}))
const DescriptionDiv = styled('div')(({ theme }) => ({
	width: '100%'
}))
const BookPhotoContainer = styled('div')(({ theme }) => ({
	[theme.breakpoints.down('sm')]: {
		width: '100%'
	},
	[theme.breakpoints.up('sm')]: {
		marginRight: '10px',
		width: '300px'
	}
}))
const BookPhoto = styled('img')(({ theme }) => ({
	width: '100%',
	height: 'auto',
	
}))

const BannedListContainer = styled('div')(({ theme }) => ({}));

const BannedListTitleContainer = styled('div')(({theme}) => ({
	display: 'flex',
	alignItems: 'center'
}));

BookPage.propTypes = {}

export default BookPage;