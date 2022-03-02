import React from 'react';
import {styled, Box, Typography} from "@mui/material";

const Root = styled('div')(({theme}) => ({
	margin: '20px 0'
}))

const TextRow = styled('div')(({theme}) => ({

}));

const NameRow = styled('div')(({theme}) => ({
	fontSize: '20px'
}));

const SchoolInfo = (props) => {
	const id = props.id || 99999999
	const name = props.name || ''
	const city = props.city || ''
	const state = props.state || ''
	const year = props.year || ''
	const reasons = props.reasons || ["No reasons stated"]
	const status = props.status || ''

	return (
		<Root key={id}>
			<NameRow>{name}</NameRow>
			<TextRow>{city}, {state}</TextRow>
			<TextRow>Year: {year}</TextRow>
			<TextRow>Status: {status}</TextRow>
			<div>Reasons: {reasons.map(item => <div key={item.id}>&emsp;{item.reason}</div>)}</div>
			<hr style={{width: '300px', height:'3px',borderWidth: '0',backgroundColor:'#570861'}}/>
		</Root>
	)
}

export default SchoolInfo;