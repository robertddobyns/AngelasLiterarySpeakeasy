import React from 'react';
import {styled} from '@mui/material';
import PropTypes from 'prop-types';

const FAQs = () => {
	
	const Root = styled('div')(({theme}) => ({
		maxWidth: '1000px',
		margin: '0 auto',
		padding: '0 10px',
		minHeight: '55vh'
	}));
	
	return (
		<Root>
			Eventually as emails come in, if it sounds a good question to answer publicly I'll post the questions
			and answers here.
		</Root>
	)
	
}

FAQs.propTypes = {}

export default FAQs;