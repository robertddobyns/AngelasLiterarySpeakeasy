import {useEffect, useRef, useState} from 'react'
import axios from "axios";
import {useAuth} from '../hooks/useAuth'
import {useNavigate, Link, useLocation} from "react-router-dom";

const Login = () => {
  const {setAuth} = useAuth()

  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/'

  const userRef = useRef()
  const errRef = useRef()

  const [user, setUser] = useState('')
  const [pwd, setPwd] = useState('')
  const [errMsg, setErrMsg] = useState('')

  useEffect(() => {
    userRef.current.focus()
  }, [])

  useEffect(() => {
    setErrMsg('')
  }, [user, pwd])

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post(process.env.REACT_APP_BASE_URL + "login", {
      username: user,
      password: pwd
    })
    .then((response) => {
      console.log(response)
      response.headers.authorization ? setAuth(response.headers.authorization)
          : console.log("item not found");
      response.headers.authorization && localStorage.setItem('token',
          response.headers.authorization)
      navigate(from, {replace: true})
    })
    .catch(e => {
      setErrMsg(e.message)
    })
  }

  return (
      <section>
        <p ref={errRef} aria-live={"assertive"}>{errMsg}</p>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor={'username'}>Username</label>
          <input
              type={'text'}
              id={'username'}
              ref={userRef}
              autoComplete={'off'}
              onChange={(e) => setUser(e.target.value)}
              value={user}
              required
          />
          <label htmlFor={'password'}>Password</label>
          <input
              type={'password'}
              id={'password'}
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              required
          />
          <button>Sign In</button>
        </form>
      </section>

  )
}

export default Login