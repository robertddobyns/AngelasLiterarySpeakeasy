import {createContext, useEffect, useState} from "react";

const AuthContext = createContext({})

export const AuthProvider = ({children}) => {
  const [auth, setAuth] = useState({})

  useEffect(() => {
    setAuth({
      token: localStorage.getItem('token'),
      username: localStorage.getItem('username'),
      authorities: localStorage.getItem('authorities')
    })

  },[])

  return (
      <AuthContext.Provider value={{auth, setAuth}}>
        {children}
      </AuthContext.Provider>
  )
}

export default AuthContext