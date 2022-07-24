import React, {useEffect, useState} from 'react';
import {styled} from '@mui/material';
import axios from "axios";
import {Helmet} from "react-helmet";

import Book from "./Book";
import Search from '../../search/Search';

const Home = () => {
	const [bookInfo, setBookInfo] = useState([])
	const search = new URLSearchParams(window.location.search).get('search');
	
	useEffect(() => {
		const getData = () => {
			if ( search ) {
				axios.get(process.env.REACT_APP_API_BASE + 'books?search=' + search)
					.then(res => setBookInfo(res.data))
			} else {
				axios.get(process.env.REACT_APP_API_BASE + 'books')
					.then(res => setBookInfo(res.data))
			}
		}
		getData()
	}, [])
	
	return (
		<Root>
			<Helmet>
				<title>Angela's Literary Speakeasy</title>
				<meta
					name={'description'}
					content={'A central location for learning about banned books in North America'}
				/>
			</Helmet>
			{/*<StatsContainer>*/}
			{/*  <Typography>Number of books (currently): {bookInfo.length} </Typography>*/}
			{/*</StatsContainer>*/}
			<Search/>
			{bookInfo.length > 0 ?
				bookInfo.map(book =>
					<Book
						key={book.id}
						id={book.id}
						imageUrl={book.imageUrl}
						url={book.url}
						name={book.name}
						amazon={book.amazon}
						author={book.author}
						bn={book.bn}
						tags={book.tags || []}
						locations={book.locations}
					/>)
				:
				<NothingFoundContainer>Nothing Found</NothingFoundContainer>
			}
		
		</Root>
	)
	
}

const Root = styled('div')(({ theme }) => ({
	maxWidth: '1000px',
	margin: '0 auto',
	padding: '0 10px',
	minHeight: '56vh',
}));

const StatsContainer = styled('div')(({ theme }) => ({
	borderTop: '1px solid black',
	borderBottom: '1px solid black',
	padding: '10px 0',
	marginBottom: '20px'
}))

const NothingFoundContainer = styled('div')(({ theme }) => ({
	width: '100%',
	textAlign: 'center',
	color: 'white'
}))


export default Home;