import React from 'react';
import './App.css';
import { BrowserRouter ,Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home/Home"
import YourOrders from './Components/YourOrders/YourOrders';
import Header from './Components/Customheader/Header';
import Cart from './Components/Cart/Cart';
function App() {
  return (
   <>
   <BrowserRouter>
         
   <Header/>
          <Routes>
            <Route index path="/" element={<Home /> } />
            <Route index path="/history" element={<YourOrders /> } />
            <Route index path="/cart" element={<Cart /> } />
            
            </Routes>
    </BrowserRouter>

             
  </>
  )
}

export default App;
