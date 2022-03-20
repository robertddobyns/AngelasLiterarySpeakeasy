import {Button, styled, TextField} from "@mui/material";

const Form = styled('form')(({theme}) =>({
	display: 'flex',
	[theme.breakpoints.down('sm')] : {
		width: '100%',
		maxWidth: '300px',
		flexDirection: 'column',
	},
	[theme.breakpoints.up('sm')]: {
		maxWidth: '500px',
		flexDirection: 'row'
	},
	
	alignItems: 'center',
	justifyContent: 'space-around',
	width: '100%',
	marginBottom: '10px'
}))

const TextFieldContainer = styled(TextField)(({theme}) => ({
	[theme.breakpoints.down('sm')]: {
		width: '100%',
		marginBottom: '10px'
	},
	[theme.breakpoints.up('sm')]: {
		marginBottom: '0'
	}
}))

const ButtonContainer = styled('div')(({theme}) => ({
	[theme.breakpoints.down('sm')] : {
		display: 'flex',
		justifyContent: 'space-around',
		width: '100%'
	},
	[theme.breakpoints.up('sm')] : {
		display: 'flex',
		justifyContent: 'space-between',
		width: '50%'
	}

}))

const Search = () => {
	const search = new URLSearchParams(window.location.search).get('search');
	
	const handleClearForm = () => {
		window.location = window.location.pathname;
	}
	
	return (
		<Form action="/" method="get" className={"search-form"}>
			<TextFieldContainer
				variant={'filled'}
				size={'small'}
				sx={{backgroundColor: 'white'}}
				id="search"
				placeholder="Search for books"
				name="search"
				defaultValue={search}
				hiddenLabel
			/>
			<ButtonContainer>
				<Button variant={'contained'} sx={{backgroundColor: '#570861'}} type="submit">Search</Button>
				<Button variant={'contained'} sx={{backgroundColor: '#570861'}} type="reset" onClick={handleClearForm}>Clear Search</Button>
			</ButtonContainer>
		</Form>
	)
	
}

export default Search;