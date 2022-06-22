import React, {useContext, useState} from 'react';
import {styled, Box, Typography, Button, TextField} from "@mui/material";
import ReasonList from "./ReasonList";

const Root = styled('div')(({theme}) => ({
	marginTop: '10px'
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
	const [reasonText, setReasonText] = useState('')
	
	const AddReasonsButton = () => {
		return (
			<Button variant={'text'}>
				+ Reason
			</Button>
		)
	}




	return (
		<Root key={id}>
			<NameRow>{name}</NameRow>
			<TextRow>{city}, {state}</TextRow>
			<TextRow>Year: {year}</TextRow>
			<TextRow>Status: {status}</TextRow>
			{reasons && <ReasonList locationId={id} reasons={reasons} />}
			<hr style={{width: '300px', height:'3px',borderWidth: '0',backgroundColor:'#570861'}}/>
		</Root>
	)
}

export default SchoolInfo;