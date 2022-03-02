import React, {useContext, useState} from 'react';
import {Button, Link, styled, TextField} from '@mui/material';
import {UserContext} from "../../security/UserContext";
import axios from "axios";

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

const AddBook = () => {
	
	const [name, setName] = useState('');
	const [url, setUrl] = useState('');
	const [author, setAuthor] = useState('');
	const [imageUrl, setImageUrl] = useState('');
	const [amazon, setAmazon] = useState('');
	const [bn, setBn] = useState('');
	const user = useContext(UserContext) || null;
	
	const handleSubmit = (e) => {
		e.preventDefault()
		axios.post(process.env.REACT_APP_API_BASE + 'books',
			{
				name: name,
				url: url,
				author: author,
				imageUrl: imageUrl,
				amazon: amazon,
				bn: bn
			}, {
				headers: {
					'Authorization': user.user
				}
			}
		)
			.then(
				res => console.log(res.data)
			)
			.catch(
				e => console.log(e.message)
			)
	}
	
	return (
		<Root onSubmit={handleSubmit}>
			<Form>
				<TextField required variant={'standard'} label={'Book Name'} onChange={(e) => setName(e.target.value)}/>
				<TextField required variant={'standard'} label={'Site Url'} onChange={(e) => setUrl(e.target.value)}/>
				<TextField required variant={'standard'} label={'Author'} onChange={(e) => setAuthor(e.target.value)}/>
				<TextField variant={'standard'} label={'Image Url'} onChange={(e) => setImageUrl(e.target.value)}/>
				<TextField variant={'standard'} label={'Amazon Url'} onChange={(e) => setAmazon(e.target.value)}/>
				<TextField variant={'standard'} label={'Barns & Noble Url'} onChange={(e) => setBn(e.target.value)}/>
				<Button type={'submit'}>Submit</Button>
			</Form>
			<div>
				<Link>+Add Location</Link>
			</div>
		</Root>
	)
	
}

export default AddBook;