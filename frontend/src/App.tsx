import React from 'react';
import './App.css';
import { BrowserRouter ,Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home/Home"

function App() {
  return (
   <>
   <BrowserRouter>
          <Routes>
            <Route index path="/" element={<Home /> } />
            </Routes>
    </BrowserRouter>

             
  </>
  )
}

export default App;
