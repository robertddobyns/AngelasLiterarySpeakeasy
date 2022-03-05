import React, {useContext, useState} from 'react';
import {Button, styled, TextField} from '@mui/material';
import PropTypes from 'prop-types';
import {UserContext} from "../../security/UserContext";
import axios from "axios";

const Root = styled('div')(({theme}) => {

})

const ReasonsDiv = styled('div')(({theme}) => ({
	display: 'flex',
}));


const ReasonList = (props) => {
	const locationId = props.locationId || ''
	const reasons = props.reasons || []
	const [currentReason, setCurrentReason] = useState('')
	const user = useContext(UserContext);
	
	const handleRemoveReason = (reasonId) => {
		axios.post(process.env.REACT_APP_API_BASE + 'locations/deleteReason',
			{
				locationId: locationId,
				reasonId: reasonId
			},
			{
				headers: {
					'Authorization' : user.user
				}
			}
		)
	}
	
	const handleAddReason = () => {
		axios.post(process.env.REACT_APP_API_BASE + "reasons/location",
			{
				locationId: locationId,
				reason: currentReason
			},
			{
				headers: {
					'Authorization': user.user
				}
			})
	}
	
	return (
		<Root>
			<div>Reasons: {reasons.map(item => <div key={item.id}>&emsp;{user.user && <Button variant={'text'} onClick={() => handleRemoveReason(item.id)}>-</Button> }{item.reason}</div>)}</div>
			{user.user &&
				<ReasonsDiv>
					<TextField value={currentReason || ''} variant={'standard'} label={'Reason'} onChange={(e) => setCurrentReason(e.target.value)}/>
					<Button variant={'text'} onClick={handleAddReason}>Add Reason</Button>
				</ReasonsDiv>
			}
		</Root>
	)
	
}

ReasonList.propTypes = {}

export default ReasonList;