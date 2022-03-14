import React, {useContext, useState} from 'react';
import {Button, styled, TextareaAutosize, TextField} from '@mui/material';
import {UserContext} from "../../security/UserContext";
import axios from "axios";
import {Link} from "react-router-dom";

const Root = styled('div')(({theme}) => ({
	width: '1000px',
	margin: '0 auto',
	padding: '0 10px',
	display: 'flex',
	flexDirection: 'column',
	minHeight: '56vh',
	paddingTop: '200px',
	backgroundColor: 'white'
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

const AddBook = () => {
	
	const [name, setName] = useState('');
	const [url, setUrl] = useState('');
	const [author, setAuthor] = useState('');
	const [imageUrl, setImageUrl] = useState('');
	const [amazon, setAmazon] = useState('');
	const [bn, setBn] = useState('');
	const [description, setDescription] = useState('')
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
				bn: bn,
				description: description
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
	
	const handleClearForm = () => {
		setName('')
		setUrl('')
		setAuthor('')
		setAmazon('')
		setBn('')
		setImageUrl('')
		setDescription('')
	}
	
	
	return (
		<Root >
			<Form onSubmit={handleSubmit}>
				<TextField value={name || ''} required variant={'standard'} label={'Book Name'}  onChange={(e) => setName(e.target.value)}/>
				<TextField value={url || ''} required variant={'standard'} label={'Site Url'} onChange={(e) => setUrl(e.target.value)}/>
				<TextField value={author || ''} required variant={'standard'} label={'Author'} onChange={(e) => setAuthor(e.target.value)}/>
				<TextField value={imageUrl || ''} variant={'standard'} label={'Image Url'} onChange={(e) => setImageUrl(e.target.value)}/>
				<TextField value={amazon || ''} variant={'standard'} label={'Amazon Url'} onChange={(e) => setAmazon(e.target.value)}/>
				<TextField value={bn || ''} variant={'standard'} label={'Barns & Noble Url'} onChange={(e) => setBn(e.target.value)}/>
				<TextareaAutosize placeholder={'Description'} minRows={3} value={description || ''} onChange={e => setDescription(e.target.value)}/>
				<ButtonContainer>
					<Button type={'submit'} sx={{marginRight: '20px'}}>Submit</Button>
					<Button onClick={handleClearForm}>Clear Form</Button>
				</ButtonContainer>
			</Form>
			<div>
				<Link to={'/addlocation'}>+Add Location</Link>
			</div>
		</Root>
	)
	
}

export default AddBook;