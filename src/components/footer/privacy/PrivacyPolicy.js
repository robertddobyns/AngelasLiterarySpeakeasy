import React from 'react';
import {styled} from '@mui/material';
import PropTypes from 'prop-types';

const PrivacyPolicy = () => {
	
	const Root = styled('div')(({theme}) => ({
		maxWidth: '1000px',
		margin: '0 auto',
		padding: '0 10px',
		minHeight: '55vh'
	}));
	
	return (
		<Root>
			This is going to be easy. I don't collect any data. At all. This is why when you click a checkbox and refresh
			the page, the check mark is no longer there. This is also why there's no login that saves your information
			when you return to the site. At some point I might save checked boxes to your local computer but I'll never save it because I have no use for it. There might be one user or a million users and I'll never
			know.
			I have Google Analytics installed just so I can see how many people are visiting my site in a given period. This
			will help when speaking with people and indie book stores interested in teaming up to make this site even more successful. I don't
			collect user data and have no desire ever to.
		</Root>
	)
	
}

PrivacyPolicy.propTypes = {}

export default PrivacyPolicy;