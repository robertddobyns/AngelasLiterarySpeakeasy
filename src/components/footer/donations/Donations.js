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
	
	const TextBlock = styled('div')(({theme}) => ({
		marginBottom: '40px'
	}))
	
	
	return (
		<Root>
			<TextBlock>
				<p>
					This is all new to me. I'm not asking for donations of any kind but I know when people believe in something
					they want to help out. I am not doing this to make money in anyway. This is a project of love for my wife
					and we aren't doing it to get rich. Below I hope to lay out where I see any potential money coming in going
					and what expenses are occurring. I want to be as transparent as possible.
				</p>
			</TextBlock>
			<TextBlock>
				<Typography variant={'h4'}>
					Affiliates Programs
				</Typography>
				<p>
					Next to each book you'll notice that I have, at least as of 3/6/11, included links to purchase each book
					through Amazon and Barnes & Noble. I am currently an Affiliate with Amazon and applied to be the same for
					B&N. My plan is for every book bought through my link, I will get a small portion of the money. I will
					use that money to cover the cost running the site. Anything made beyond the cost of running the site will
					donated to a local library or Indie bookstore. I'll figure out the logistics of that if I do actually make
					 some money. Please do not feel like you have to buy through my affiliate links to support me. Indie book stores
					are wonderful, magical places that need as much support as possible. If any indie stores have an online
					presence where I can post links to their site instead, I would love to do that. Email me.
				</p>
			</TextBlock>
			<TextBlock>
				<Typography variant={'h4'}>
					Donations to Schools / Community
				</Typography>
				<p>
					As soon as I figure out if this site is even used and people are interested, I'll set up a donation
					fund to buy banned books in the communities in which they are banned. I don't know how to do that yet
					but if I hear that people are interested in doing this, I'll figure out the logistics. Again, I have no
					need nor desire for any of the money myself and I will always post all monetary transactions, down to the
					penny, here to keep everything transparent.
				</p>
			</TextBlock>
			<TextBlock>
				<Typography variant={'h4'}>Donations to Support Me</Typography>
				<p>Websites take time and money. If it happens that you want to support me, that's cool. I would rather the money
					go to the donation spot above but if people are interested in supporting me doing this, I'll use the money to
					keep the website running, buy Angela a coffee, and maybe a fancy dinner. I have no idea. Seriously, just donate
					to the option above if you want to donate. I don't even plan on setting up this functionality unless someone
					emails me to tell me that they are interested.
				</p>
			</TextBlock>
		</Root>
	)
	
}

Donations.propTypes = {}

export default Donations;