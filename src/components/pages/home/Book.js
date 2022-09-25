import React, {useEffect, useState} from 'react';
import {styled, Typography} from '@mui/material';
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAmazon} from "@fortawesome/free-brands-svg-icons";
import {faBook} from "@fortawesome/free-solid-svg-icons";
import BookshopLogo from '../../../images/bookshopLogo.svg';
import noImage from '../../../images/NoImage.jpg'


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
		<Root>
			<Link to={'/page/' + props.url} style={{ textDecoration: 'none' }}>
				<BookInfo key={props.id}>
					<div style={{ width: '225px', margin: 'auto 0', paddingLeft: '10px' }}>
						<img
							src={image}
							onError={({ currentTarget }) => {
								currentTarget.onerror = null
								currentTarget.src = noImage
							}}
							alt={props.name}
							style={{ marginRight: '10px', height: 'auto', width: '100%' }}/>
					</div>
					<DetailContainer>
						<Title>{props.name}</Title>
						<Author>by: {props.author}</Author>
						<StatusContainer>
							<p><span style={{ fontWeight: 'bold', color: 'red' }}>Banned</span>: {banned}</p>
							<p><span style={{ fontWeight: 'bold', color: 'orange' }}>Restricted</span>: {restricted}</p>
							<p><span style={{ fontWeight: 'bold', color: 'blue' }}>Challenged</span>: {challenged}</p>
							<p><span style={{ fontWeight: 'bold', color: 'green' }}>Ban Failed</span>: {failed}</p>
							<p style={{ lineHeight: '18px' }}>Tags: {tags.map((item, index) => <span key={index}
																																											 style={{ color: 'red' }}>{(index ? ', ' : '') + item}</span>)} </p>
						</StatusContainer>
					</DetailContainer>
				
				</BookInfo>
			</Link>
			<PurchaseContainer>
				<PurchaseTitle variant={'h6'}>Buy It Here!</PurchaseTitle>
				<PurchaseLinkContainer>
					{props.bookshop || props.amazon ?
						<>
							{props.bookshop &&
								<a href={props.bookshop} target={'_blank'}>
									<img
										src={BookshopLogo}
										alt={'Bookshop.org logo'}
									/>
								</a>
							}
							{props.amazon &&
								<a href={props.amazon} target={'_blank'} >
									<FontAwesomeIcon icon={faAmazon} size={'2x'} />
								</a>
							}
						</>
						:
						<Typography variant={'p'}>I do not have a link to purchase at this time but I hope to soon.</Typography>
					}
				</PurchaseLinkContainer>
			</PurchaseContainer>
		</Root>
	)
	
}

const Root = styled('div')(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	marginBottom: '20px',
	border: '1px solid black',
	position: 'relative',
	minHeight: '300px',
	color: 'black',
	backgroundColor: 'white',
	boxShadow: '5px 5px 10px #555',
	maxWidth: '1000px',
	width: '100%'
}))

const BookInfo = styled('div')(({ theme }) => ({
	display: 'flex',
	
}))

const Title = styled('div')(({ theme }) => ({
	fontWeight: 'bold',
	[theme.breakpoints.down('sm')]: {
		fontSize: '20px'
	},
	[theme.breakpoints.up('sm')]: {
		fontSize: '30px'
	}
}))

const Author = styled('div')(({ theme }) => ({
	[theme.breakpoints.down('sm')]: {
		fontSize: '12px'
	},
	[theme.breakpoints.up('sm')]: {
		fontSize: '20px'
	}
}))

const DetailContainer = styled('div')(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	padding: '10px',
	alignItems: 'center',
	width: '100%',
}))

const StatusContainer = styled('div')(({ theme }) => ({
	width: '100%',
	display: 'flex',
	flexDirection: 'column',
	lineHeight: '12px'
}))

const PurchaseContainer = styled('div')(({ theme }) => ({
	borderTop: '1px solid black',
	height: '100px',
	padding: '0 10px',
}))

const PurchaseTitle = styled(Typography)(({ theme }) => ({
	width: '100%',
	textAlign: 'center'
}))

const PurchaseLinkContainer = styled('div')(({ theme }) => ({
	height: '50px',
	display: 'flex',
	justifyContent: 'space-around',
	alignItems: 'center',
	margin: '0 auto',
	maxWidth: '500px'
}))

Book.propTypes = {}

export default Book;