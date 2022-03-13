import React, {useContext, useEffect, useState} from 'react';
import {styled, Button, TextField, Modal, Link, IconButton} from "@mui/material";
import {Link as RRLink} from 'react-router-dom';
import {UserContext} from '../security/UserContext';
import axios from "axios";
import {useNavigate} from "react-router";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHome} from "@fortawesome/free-solid-svg-icons";

const Root = styled('div')(({theme}) => ({
  textAlign: 'center',
  position: 'fixed',
  width: '100%',
  backgroundColor: '#F6F1D1',
  zIndex: 1,
  boxShadow: '1px 0 20px black',
}))

const TitleContainer = styled('div')(({theme}) => ({
  fontWeight: 'bold',
  margin: '20px',
  [theme.breakpoints.down('sm')]: {
    fontSize: '25px'
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '40px'
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '50px'
  }
}));

const SubtitleContainer = styled('div')(({theme}) => ({
  textAlign: 'center',
  paddingBottom: '10px',
  [theme.breakpoints.down('sm')]: {
    fontSize: '15px'
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '20px'
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '30px'
  }
}));

const LoginContainer = styled('div')(({theme}) => ({
  [theme.breakpoints.down('sm')] : {
    padding: '0 10px'
  },
  [theme.breakpoints.up('sm')] : {
    padding: '10px',
  },
  position: 'absolute',
  top: 0,
  right: 0,
}));

const ModalContainer = styled('div')(({theme}) => ({
  [theme.breakpoints.down('sm')] : {
    margin: '0 5px',
    position: 'absolute',
    top: '45%',
    transform: 'translate(-50% -50%)',
    width: '90%',
    padding: '10px'
  },
  [theme.breakpoints.up('sm')] : {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    position: 'absolute',
    width: 400,
    padding: theme.spacing(2, 4, 3),
  },
  backgroundColor: theme.palette.background.paper,
  border: '2px solid #000',
  boxShadow: theme.shadows[5],
}))

const FormContainer = styled('form')(({theme}) => ({
  display: 'flex',
  flexDirection: 'column'
}))

const LogoutContainer = styled('div')(({theme}) => ({
  position: 'absolute',
  top: 0,
  right: 0,
  padding: '10px'
}))

const HomeButtonContainer = styled('div')(({theme}) => ({
  position: 'absolute',
  [theme.breakpoints.down('sm')] : {
    top: 0,
    left: 0,
  },
  [theme.breakpoints.up('sm')] : {
    top: '10px',
    left: '10px'
  }
}))

const NavBarContainer = styled('div')(({theme}) => ({
  background: '#570861',
  color: 'white',
  padding: '5px 0'
}))

const Header = () => {
  
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [usernameText, setUsernameText] = useState('');
  const [passwordText, setPasswordText] = useState('');
  const {user, setUser} = useContext(UserContext);
  const navigate = useNavigate();
  
  const handleLoginModalOpen = () => {
    setLoginModalOpen(true);
  }
  
  const handleLoginModalClose = () => {
    setLoginModalOpen(false);
    setUsernameText('');
    setPasswordText('');
  }
  
  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user')
    navigate("/", {replace: true})
  }
  
  const getLoginData = (event) => {
    event.preventDefault();
    axios.post(process.env.REACT_APP_API_BASE + "login", {
        username: usernameText,
        password: passwordText
      })
      .then((response) => {
        response.headers.authorization ? setUser(response.headers.authorization)  : console.log("item not found");
        response.headers.authorization && localStorage.setItem('user', response.headers.authorization)
        handleLoginModalClose();
      })
      .catch(e => {
        console.log(e);
      })
  }

  const LoginLong = () => {
    return (
      <LoginContainer>
        <Button variant={'text'} onClick={handleLoginModalOpen}>Log In</Button>
      </LoginContainer>
    )}
  
  const loginModal = (
    <ModalContainer >
      <FormContainer noValidate autoComplete={'off'}>
        <TextField id={'username'} label={'Username'} value={usernameText} onChange={(e) => setUsernameText(e.target.value)} autoFocus sx={{marginBottom: '10px'}}/>
        <TextField id={'password'} label={'Password'} type={'password'} value={passwordText} onChange={(e) => setPasswordText(e.target.value)}/>
        <Button variant={'contained'} color={'primary'} style={{marginTop: '10px'}} disableElevation onClick={getLoginData} type={"submit"}>Submit</Button>
      </FormContainer>
    </ModalContainer>
  )
  
  useEffect(() => {
    const getUser = () => {
      localStorage.getItem('user') && setUser(localStorage.getItem('user'))
    }
    getUser()
  }, [])
  
  return (
    <Root>
      <HomeButtonContainer>
        <IconButton href={"/"} sx={{color: '#570861'}}><FontAwesomeIcon icon={faHome}/></IconButton>
      </HomeButtonContainer>
      { user ?
        <LogoutContainer>
          <RRLink to={'/addbook'}>+Book</RRLink>
          <Button variant={'text'} onClick={handleLogout} sx={{marginLeft: '20px'}}>Log Out</Button>
        </LogoutContainer> :
        <LoginLong/>}
      <Modal
        open={loginModalOpen}
        onClose={handleLoginModalClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {loginModal}
      </Modal>
      <TitleContainer>
        <Link href={'/'} sx={{textDecoration: 'none', color: '#8C7284'}}>Angela's Literary Speakeasy</Link>
      </TitleContainer>
      <SubtitleContainer>
        An ever growing list of books banned in schools and communities across the United States
      </SubtitleContainer>
      <NavBarContainer>
      
      </NavBarContainer>
    </Root>
  )
  
}

export default Header;