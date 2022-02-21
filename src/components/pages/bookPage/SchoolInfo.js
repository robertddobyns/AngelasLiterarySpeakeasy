import React from 'react';
import {styled, Box, Typography} from "@mui/material";

const Root = styled('div')(({theme}) => ({
	marginTop: '10px'
}))

const SchoolInfo = (props) => {

	return (
		<Root>
			<Typography variant={'h6'}>{props.name}</Typography>
			<Typography>{props.city}, {props.state}</Typography>
			<Typography>Year: {props.year}</Typography>
			<Typography>Reasons: {props.reasons.map(item => <Typography>&emsp;{item}</Typography>)}</Typography>
			<hr/>
		</Root>
	)
}

export default SchoolInfo;