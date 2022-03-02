import React, {useContext} from 'react';
import {Outlet} from 'react-router'
import Home from "../pages/home/Home";
import {UserContext} from "./UserContext";

const useAuth = () => {
	console.log(useContext(UserContext))
	const user = useContext(UserContext).user ? {loggedIn: true} : {loggedIn: false}
	return user && user.loggedIn
}

const ProtectedRoutes = () => {
	const isAuth = useAuth();
	return isAuth ? <Outlet/> : <Home/>
}

export default ProtectedRoutes;