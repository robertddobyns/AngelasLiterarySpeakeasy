import React from 'react';
import {styled} from '@mui/material';
import PropTypes from 'prop-types';

const Root = styled('div')(({theme}) => ({
	maxWidth: '1000px',
	margin: '0 auto',
	padding: '0 10px',
	minHeight: '55vh'
}))

const Contact = () => {
	
	
	return (
		<Root>
			<h3 style={{textAlign: 'center'}}>LiterarySpeakeasy@gmail.com</h3>
			<p style={{textAlign: 'center'}}>
				We would love to hear from you. We honestly don't track any user information with this site. It could have 1
				user or a million users and we would never know. Please let us know if the site is useful and what you would like
				to change or update.
			</p>
			<p>
				<h4>Indie Bookstores</h4>
				If you are a small bookstore and you would love to have our traffic directed to your store in order to buy
				these books, please let us know. There's no charge. I would love to eventually allow site users search small
				bookstores by state when viewing and buying the books. I can't do that without help. Email us at the above
				address and let's work this out.
			</p>
			<p>
				<h4>I need your help</h4>
				I can only do so much on my own. The internet is a powerful, equalizing force but I need help finding the truth.
				I want to add all instances of books either banned, restricted, or attempted to be banned throughout the US. I
				want to present it as factually as possible to avoid any critique of politicisation. In order to do that, if you
				can provide proof to me of a book being banned or even being discussed being banned, please send me an email
				with as much verifiable information as you can. It's time to call out the people that are doing this. The time
				of anonymity is over and you'll see that cockroaches tend to scatter when bathed in light.
			</p>
		</Root>
	)
	
}

Contact.propTypes = {}

export default Contact;