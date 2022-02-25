import React from 'react';
import {styled, Typography} from '@mui/material';

const Root = styled('div')(({theme}) => ({
	maxWidth: '1000px',
	margin: '0 auto',
	minHeight: '55vh'
}));

const Quote = styled('div')(({theme}) => ({
	fontWeight: 'bold',
	fontStyle: 'italic',
	marginBottom: '20px'
}))

const BodyParagraph = styled('div')(({theme}) => ({
	marginBottom: '20px'
}));

const About = () => {
	
	
	return (
		<Root>
			<Quote>
				"...What I tell kids is, Don't get mad, get even. Don't spend time waving signs or carrying petitions
				around the neighborhood. Instead, run, don't walk, to the nearest non-school library or to the local bookstore
				and get whatever it was that they banned. Read whatever they're trying to keep out of your eyes and your
				brain, because that's exactly what you need to know.” - Stephen King
			</Quote>
			<BodyParagraph>
				When books are removed from school, it's incredibly important that every parent, student, and citizen looks
				at that book and critically question why it is being targeted. Often words such as vulgar, profane,
				inappropriate, and dangerous are used to strike fear in parents that don't know better and want to do right by
				their children. The world is not a beautiful paradise and the best way to learn about the real world is found
				in a book.
			</BodyParagraph>
			<BodyParagraph>
				Many times, there are ulterior motives to ban a book, especially from children. Each motive ultimately boils down
				to one reason: control. Control of a narrative, control of an ideology, control of belief. It is very important
				that when you hear a book is being banned that you ask yourself, "What would a person gain or benefit from this
				book being banned and not being read?"
			</BodyParagraph>
			<BodyParagraph>
				A book has never killed a person. Learning more about the world has never killed a person. People have died when
				they sought knowledge by people that are afraid of that knowledge being released. Learning the thoughts and
				beliefs of others only makes a person more empathetic and a member of the entire world. To restrict knowledge
				is to control through ignorance. Not every book is good, but every book has a voice that wants to be heard.
			</BodyParagraph>
			<Quote>
				"Censorship is the child of fear and the father of ignorance." - Laurie Halse Anderson, Speak
			</Quote>
		</Root>
	)
	
}

About.propTypes = {}

export default About;