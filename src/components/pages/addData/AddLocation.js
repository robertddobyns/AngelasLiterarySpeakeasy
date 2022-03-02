import React, {useEffect, useState} from 'react';
import {styled} from '@mui/material';
import PropTypes from 'prop-types';
import axios from "axios";


const Root = styled('div')(({theme}) => ({
	maxWidth: '1000px',
	margin: '0 auto',
	padding: '0 10px',
	minHeight: '56vh'
}))

const AddLocation = () => {
	
	const [books, setBooks] = useState([])

	useEffect(() => {
		const getBooks = () => {
			axios.get(process.env.REACT_APP_API_BASE + 'books')
				.then(res => console.log(res.data))
				.catch(e => console.log(e.message))
		}
		getBooks()
	}, [])
	
	return (
		<Root>
			this is the add location page
		</Root>
	)
	
}

AddLocation.propTypes = {}

export default AddLocation;