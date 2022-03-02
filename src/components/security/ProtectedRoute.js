import React, {useContext} from 'react';
import {Outlet} from 'react-router'
import Home from "../pages/home/Home";
import {UserContext} from "./UserContext";

const useAuth = () => {
	// const user = useContext(UserContext).user ? {loggedIn: true} : {loggedIn: false}
	const user = {loggedIn: true}
	return user && user.loggedIn
}

const ProtectedRoutes = () => {
	const isAuth = useAuth();
	return isAuth ? <Outlet/> : <Home/>
}

export default ProtectedRoutes;