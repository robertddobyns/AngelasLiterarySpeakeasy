import React from 'react';
import {styled} from '@mui/material';
import PropTypes from 'prop-types';

const References = () => {
	
	const Root = styled('div')(({theme}) => ({
		maxWidth: '1000px',
		margin: '0 auto',
		padding: '0 10px',
		minHeight: '55vh',
		paddingTop: '200px'
	}));
	
	return (
		<Root>
			In the near future I will update this page with all references used to collect the data as well as
			any of the people that want to be identified as having helped collate all the data to make this site
			possible.
		</Root>
	)
	
}

References.propTypes = {}

export default References;