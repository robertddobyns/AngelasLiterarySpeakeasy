import React from 'react';
import {styled, Box, Typography} from "@mui/material";
import config from '../../config.json';

const Root = styled('div')(({theme}) => ({
	backgroundColor: '#570861',
	padding: '10px',
	minHeight: '100%'
}));
const FooterStatement = styled('div')(({theme}) => ({
	color: 'white',
	textAlign: 'center',
	margin: '0 auto',
	marginBottom: '20px',
	maxWidth: '1000px'
}));
const LinksContainer = styled('div')(({theme}) => ({
	color: 'white',
	display: 'flex',
	[theme.breakpoints.down('sm')]: {
		flexDirection: 'column',
		alignItems: 'center',
		height: '150px'
	},
	[theme.breakpoints.up('sm')]: {
		justifyContent: 'space-around',
		height: '100px',
		margin: '0 auto',
		maxWidth: '1000px'
	},
	
}));

const InfoContainer = styled('div')(({theme}) => ({
	color: 'white'
}))

const Footer = () => {
	
	
	return (
		<Root>
			<FooterStatement>
				I have done my best to track down the truth on these pages. It is absolutely possible that there were errors made. If so, please email me and let me know.
				If you would like to help me out and you know the specifics of a banned book, please send an email to <a href={'mailto:literaryspeakeasy@gmail.com'} style={{color: 'lightyellow'}}>LiterarySpeakeasy@gmail.com</a> with
				the location, reason, and book name. If I can verify it, I will add it to the list.
			</FooterStatement>
			<Typography sx={{color: 'yellow', textAlign: 'center'}}>Coming Soon</Typography>
			<LinksContainer>
				<Box>About Us</Box>
				<Box>Contact Us</Box>
				<Box>FAQs</Box>
				<Box>Privacy Policy</Box>
				<Box>References</Box>
				<Box>Donations</Box>
			</LinksContainer>
			<InfoContainer>
				Version: {config.VERSION} | Last Updated {config.PUBLISH_DATE}
			</InfoContainer>
		</Root>
	)
	
}

export default Footer;