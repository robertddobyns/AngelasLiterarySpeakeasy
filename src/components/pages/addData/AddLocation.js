import React, {useContext, useEffect, useState} from 'react';
import {Button, MenuItem, Select, styled, TextField} from '@mui/material';
import {UserContext} from "../../security/UserContext";
import axios from "axios";
import {Link} from "react-router-dom";

const Root = styled('div')(({theme}) => ({
	width: '1000px',
	margin: '0 auto',
	padding: '0 10px',
	display: 'flex',
	flexDirection: 'column',
	minHeight: '56vh'
}))

const Form = styled('form')(({theme}) => ({
	width: '1000px',
	margin: '0 auto',
	padding: '0 10px',
	display: 'flex',
	flexDirection: 'column',
}));

const ButtonContainer = styled('div')(({theme}) => ({
	display: 'flex',
	justifyContent: 'center',
	marginTop: '20px'
}))

const AddLocation = () => {
	const [booksArray, setBooksArray] = useState([])
	const [book, setBook] = useState({})
	const [locationName, setLocationName] = useState('');
	const [locationCity, setLocationCity] = useState('');
	const [locationState, setLocationState] = useState('');
	const [locationStatus, setLocationStatus] = useState('');
	const [locationYear, setLocationYear] = useState('');
	const user = useContext(UserContext) || null;
	
	useEffect(() => {
		const getBooks = () =>{
			axios.get(
				process.env.REACT_APP_API_BASE + 'books'
				)
				.then(res =>
					setBooksArray(res.data)
				)
		}
		getBooks()
	}, [])
	
	const handleSubmit = (e) => {
		e.preventDefault()
		axios.post(process.env.REACT_APP_API_BASE + 'locations/bookId',
				{
					bookId: book,
					name: locationName,
					city: locationCity,
					state: locationState,
					status: locationStatus,
					year: locationYear,
				}, {
					headers: {
						'Authorization': user.user
					}
				}
			)
			.then(
				handleClearForm
			)
			.catch(
				e => console.log(e.message)
			)
	}
	
	const handleSelect = (e) => {
		e.preventDefault()
		setBook(e.target.value)
	}
	
	const handleClearForm = () => {
		setLocationYear('')
		setLocationStatus('')
		setLocationCity('')
		setLocationState('')
		setLocationName('')
	}
	
	return (
		<Root >
			<Select
				labelId={'state-label'}
				onChange={handleSelect}
				value={book.name}
				label={'Select State'}
				defaultValue={''}
			>
				{booksArray?.map(item => item && <MenuItem key={item.id || 0} value={item.id || ''}>{item.name || ''}</MenuItem>)}
			</Select>
			<Form onSubmit={handleSubmit}>
				<TextField value={locationName || ''} variant={'standard'} label={'Location Name'} onChange={(e) => setLocationName(e.target.value)}/>
				<TextField value={locationCity || ''} variant={'standard'} label={'City/County'} onChange={(e) => setLocationCity(e.target.value)}/>
				<TextField value={locationState || ''} variant={'standard'} label={'State'} onChange={(e) => setLocationState(e.target.value)}/>
				<TextField value={locationStatus || ''} variant={'standard'} label={'Status'} onChange={(e) => setLocationStatus(e.target.value)}/>
				<TextField value={locationYear || ''} variant={'standard'} label={'Year'} onChange={(e) => setLocationYear(e.target.value)}/>
				<input type={'hidden'} value={book}/>
				<ButtonContainer>
					<Button type={'submit'}>Submit</Button>
					<Button onClick={handleClearForm} sx={{marginLeft: '40px'}}>Clear Form</Button>
				</ButtonContainer>
			</Form>
		</Root>
	)
	
}

export default AddLocation;