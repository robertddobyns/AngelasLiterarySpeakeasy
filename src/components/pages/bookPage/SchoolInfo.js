import React from 'react';
import {styled, Box, Typography} from "@mui/material";

const Root = styled('div')(({theme}) => ({
	marginTop: '10px'
}))

const SchoolInfo = (props) => {
	const name = props.name || ''
	const city = props.city || ''
	const state = props.state || ''
	const year = props.year || ''
	const reasons = props.reasons || []

	return (
		<Root>
			<Typography variant={'h6'}>{name}</Typography>
			<Typography>{city}, {state}</Typography>
			<Typography>Year: {year}</Typography>
			<Typography>Reasons: {reasons.map(item => <Typography>&emsp;{item}</Typography>)}</Typography>
			<hr/>
		</Root>
	)
}

export default SchoolInfo;