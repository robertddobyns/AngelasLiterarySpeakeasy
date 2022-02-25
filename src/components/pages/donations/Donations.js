import React from 'react';
import {styled, Typography} from '@mui/material';
import PropTypes from 'prop-types';

const Donations = () => {
	
	const Root = styled('div')(({theme}) => ({
		maxWidth: '1000px',
		margin: '0 auto',
		padding: '0 10px',
		minHeight: '55vh'
	}));
	
	
	return (
		<Root>
			<Typography sx={{marginBottom: '40px'}}>
				I don't yet know how I want to set up donations but I think it'll be in two ways. The first will be
				donations given in support of local, independent bookstores. In this instance I would love to collect
				money for a community where a book is banned and use that money to buy copies of the book to be given
				out to the community at no expense.
			</Typography>
			
			<Typography variant={'h4'}>
				Donations to Schools / Community
			</Typography>
			<p style={{marginBottom: '40px'}}>
				As soon as I figure out if this site is even used and people are interested, I'll set up a donation
				fund to buy banned books in the communities in which they are banned. I will also post receipts of
				all purchases to prove that 100% of the money is going to it's intended purpose.
			</p>
			<Typography variant={'h4'}>Donations to Support Me</Typography>
			<p>Websites take time and money. If it happens that you want to support me, that's cool. I would rather
			the money go to the donation spot above but if people are interested in supporting me doing this, I'll
			use the money to keep the website running, buy Angela a coffee, and maybe a fancy dinner. I have no idea.
			Seriously, just donate to the option above if you want to donate.</p>
		</Root>
	)
	
}

Donations.propTypes = {}

export default Donations;