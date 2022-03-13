import React from 'react';
import {styled} from '@mui/material';
import PropTypes from 'prop-types';

const PrivacyPolicy = () => {
	
	const Root = styled('div')(({theme}) => ({
		maxWidth: '1000px',
		margin: '0 auto',
		padding: '0 10px',
		minHeight: '55vh',
		paddingTop: '200px'
	}));
	
	return (
		<Root>
			This is going to be easy. I don't collect any data. I'm not going to sell any information because I don't collect
			any information.
			I have Google Analytics installed just so I can see how many people are visiting my site in a given period. This
			will help when speaking with people and indie book stores interested in teaming up to make this site even more successful. I don't
			collect user data and have no desire ever to.
		</Root>
	)
	
}

PrivacyPolicy.propTypes = {}

export default PrivacyPolicy;