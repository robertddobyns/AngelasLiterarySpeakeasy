import React from 'react';
import {IconButton, styled, Typography} from '@mui/material';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAmazon} from "@fortawesome/free-brands-svg-icons";
import {faBook} from "@fortawesome/free-solid-svg-icons";

const Book = (props) => {
	
	const Root = styled('div')(({theme}) => ({
		display: 'flex',
		marginBottom: '20px',
		padding: '10px 0'
	}))
	
	const Title = styled('div')(({theme}) => ({
		[theme.breakpoints.down('sm')] : {
			fontSize: '20px'
		},
		[theme.breakpoints.up('sm')] : {
			fontSize: '25px'
		}
	}))
	
	const Author = styled('div')(({theme}) => ({
		[theme.breakpoints.down('sm')] : {
			fontSize: '12'
		},
		[theme.breakpoints.up('sm')] : {
			fontSize: '20px'
		}
	}))
	
	const InfoContainer = styled('div')(({theme}) => ({
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between'
	}));
	
	const IconContainer = styled('div')(({theme}) => ({
		display: 'flex'
	}));
	
	return (
		<Root>
			<img src={props.imageUrl} alt={props.name} style={{marginRight: '10px'}}/>
			<InfoContainer>
				<Title><Link to={'/page/' + props.url}>{props.name}</Link></Title>
				<Author>By: {props.author}</Author>
				<IconContainer>
					<IconButton href={props.amazon} target={'_blank'}><FontAwesomeIcon icon={faAmazon} /></IconButton>
					<IconButton href={props.bn} target={'_blank'}><FontAwesomeIcon icon={faBook} /></IconButton>
				</IconContainer>
			</InfoContainer>
		</Root>
	)
	
}

Book.propTypes = {}

export default Book;