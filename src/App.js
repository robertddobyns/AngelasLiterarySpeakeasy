import React, {useState} from "react";
import {Routes, Route} from "react-router-dom";
import Home from "./components/pages/home/Home";
import BookPage from "./components/pages/bookPage/BookPage";
import About from "./components/footer/about/About";
import FAQs from "./components/footer/faqs/FAQs";
import Contact from "./components/footer/contact/Contact";
import PrivacyPolicy from "./components/footer/privacy/PrivacyPolicy";
import References from "./components/footer/references/References";
import Donations from "./components/footer/donations/Donations";
import Test from './components/security/Test';
import AddBook from "./components/pages/addData/AddBook";
import AddLocation from "./components/pages/addData/AddLocation";
import Layout from "./Layout";
import RequireAuth from "./components/security/RequireAuth";

function App() {
	
	return (
		<Routes>
			<Route path={'/'} element={<Layout/>}>
				{/*Public Routes*/}
				<Route path={'/page/:bookName'} element={<BookPage/>}/>
				<Route path={'/about'} element={<About/>}/>
				<Route path={'/contact'} element={<Contact/>}/>
				<Route path={'/faqs'} element={<FAQs/>}/>
				<Route path={'/privacypolicy'} element={<PrivacyPolicy/>}/>
				<Route path={'/references'} element={<References/>}/>
				<Route path={'/donations'} element={<Donations/>}/>
				<Route path={'/'} element={<Home/>}/>
			</Route>
			<Route element={<RequireAuth allowedRoles={['ROLE_ADMIN', 'ADMIN']}/>}>
				{/*Admin Only Routes */}
					<Route path={'/test'} element={<Test/>}/>
					<Route path={'/addbook'} element={<AddBook/>}/>
					<Route path={'/addlocation'} element={<AddLocation/>}/>
			</Route>
		</Routes>
	);
}

export default App;
