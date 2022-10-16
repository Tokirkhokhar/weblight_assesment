import React from 'react';
import './App.css';
import Header from './Components/Customheader/Header';
import Fillter from './Components/Filter Screen/Fillter';
import ProductContainer from './Components/ProductsContainer/ProductContainer';

function App() {
  return (
   <>
          <Header/>
          <Fillter/>
          <ProductContainer />    
  </>
  )
}

export default App;
