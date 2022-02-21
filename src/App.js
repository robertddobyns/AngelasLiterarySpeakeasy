import React from "react";
import Header from "./components/header/Header";
import {Routes, Route} from "react-router-dom";
import Home from "./components/pages/home/Home";
import BookPage from "./components/pages/bookPage/BookPage";
import Footer from "./components/footer/Footer";

function App() {

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path={'/'} element={<Home/>}/>
        <Route path={'/page/:bookName'} element={<BookPage/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
