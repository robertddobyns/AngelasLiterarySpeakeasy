import React from 'react';
import {Outlet} from 'react-router'
import Home from "../pages/home/Home";

const useAuth = () => {
	const user = {loggedIn: true}
	return user && user.loggedIn
}

const ProtectedRoutes = () => {
	const isAuth = useAuth();
	return isAuth ? <Outlet/> : <Home/>
}

export default ProtectedRoutes;