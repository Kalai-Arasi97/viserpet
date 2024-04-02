import React from 'react'
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import {BrowserRouter,Route,Routes} from "react-router-dom";
// import Home from '../Page/Home';
import About from '../Page/About';
import Main from '../Page/Main'
import Login from "../Page/Login";
import Contact from '../Page/Contact';
import Product from '../Page/Product';
import Blog from "../Page/Blog"
import RegistrationPage from '../Component/Registration/Registration';
const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/register" element={<RegistrationPage/>}/>
          <Route path='/login' element={<Login/>} />
          <Route path='/about' element={<About/>}/>
          <Route path="/product" element={<Product/>}/>
          <Route path="/blog" element={<Blog/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Router
