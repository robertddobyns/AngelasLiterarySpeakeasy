import React, {useEffect, useState} from 'react';
import {IconButton, styled} from '@mui/material';
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAmazon} from "@fortawesome/free-brands-svg-icons";
import {faBook} from "@fortawesome/free-solid-svg-icons";
import noImage from '../../../images/NoImage.jpg'

const Root = styled('div')(({theme}) => ({
	display: 'flex',
	marginBottom: '20px',
	border: '1px solid black',
	position: 'relative',
	height: '300px',
	color: 'black'
}))

const Title = styled('div')(({theme}) => ({
	fontWeight: 'bold',
	[theme.breakpoints.down('sm')] : {
		fontSize: '20px'
	},
	[theme.breakpoints.up('sm')] : {
		fontSize: '30px'
	}
}))

const Author = styled('div')(({theme}) => ({
	[theme.breakpoints.down('sm')] : {
		fontSize: '12px'
	},
	[theme.breakpoints.up('sm')] : {
		fontSize: '20px'
	}
}))

const DetailContainer = styled('div')(({theme}) => ({
	display: 'flex',
	flexDirection: 'column',
	padding: '10px',
	alignItems: 'center',
	width: '100%',
}))

const StatusContainer = styled('div')(({theme}) => ({
	width: '100%',
	display: 'flex',
	flexDirection: 'column',
	lineHeight: '12px'
}))

const Book = (props) => {
	
	const locations = props.locations || []
	const tags = props.tags || []
	const image = props.imageUrl || noImage
	const [banned, setBanned] = useState(0)
	const [restricted, setRestricted] = useState(0)
	const [challenged, setChallenged] = useState(0)
	const [failed, setFailed] = useState(0)
	
	useEffect(() => {
		const parseData = () => {
			let tempBanned = []
			let tempRestricted = []
			let tempChallenged = []
			let tempFailed = []
			tempBanned = locations.filter(location => location.status === 'Banned')
			tempRestricted = locations.filter(location => location.status === 'Restricted')
			tempChallenged = locations.filter(location => location.status === 'Challenged')
			tempFailed = locations.filter(location => location.status === 'Ban Failed')
			tempBanned && setBanned(tempBanned.length)
			tempRestricted && setRestricted(tempRestricted.length)
			tempChallenged && setChallenged(tempChallenged.length)
			tempFailed && setFailed(tempFailed.length)
		}
		parseData()
	}, [])
	
	return (
		<Link to={'/page/' + props.url} style={{textDecoration: 'none'}}>
			<Root key={props.id}>
					<div style={{width: '200px', margin: 'auto 0'}}>
						<img
							src={image}
							onError={({currentTarget}) => {
								currentTarget.onerror = null
								currentTarget.src = noImage
							}}
							alt={props.name}
							style={{marginRight: '10px', height: 'auto', width: '100%'}}/>
					</div>
					<DetailContainer>
						<Title>{props.name}</Title>
						<Author>by: {props.author}</Author>
						<StatusContainer>
							<p><span style={{fontWeight: 'bold', color: 'red'}}>Banned</span>: {banned}</p>
							<p><span style={{fontWeight: 'bold', color: 'orange'}}>Restricted</span>: {restricted}</p>
							<p><span style={{fontWeight: 'bold', color: 'blue'}}>Challenged</span>: {challenged}</p>
							<p><span style={{fontWeight: 'bold', color: 'green'}}>Ban Failed</span>: {failed}</p>
							<p>Tags: {tags.map((item, index) => <span key={index} style={{color:'red'}}>{ (index ? ', ' : '') + item }</span>)} </p>
						</StatusContainer>
					</DetailContainer>
			</Root>
		</Link>
	)
	
}

Book.propTypes = {}

export default Book;