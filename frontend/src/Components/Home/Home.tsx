import React from 'react'
import Header from '../Customheader/Header';
import Fillter from '../Filter Screen/Fillter';
import ProductContainer from '../ProductsContainer/ProductContainer';

export default function Home() {
  return (
   <>
   <Header/>
   <Fillter/>
   <ProductContainer/>
   </>
  )
}
