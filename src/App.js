import React from "react";
import Header from "./components/header/Header";
import {Routes, Route} from "react-router-dom";
import Home from "./components/pages/home/Home";
import BookPage from "./components/pages/bookPage/BookPage";
import Footer from "./components/footer/Footer";
import About from "./components/pages/about/About";
import FAQs from "./components/pages/faqs/FAQs";
import Contact from "./components/pages/contact/Contact";
import PrivacyPolicy from "./components/pages/privacy/PrivacyPolicy";
import References from "./components/pages/references/References";
import Donations from "./components/pages/donations/Donations";

function App() {

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path={'/page/:bookName'} element={<BookPage/>}/>
        <Route path={'/about'} element={<About/>}/>
        <Route path={'/contact'} element={<Contact/>}/>
        {/*<Route path={'/faqs'} element={<FAQs/>}/>*/}
        <Route path={'/privacypolicy'} element={<PrivacyPolicy/>}/>
        {/*<Route path={'/references'} element={<References/>}/>*/}
        {/*<Route path={'/donations'} element={<Donations/>}/>*/}
        <Route path={'/'} element={<Home/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
