import React from 'react'
import { Container } from 'react-bootstrap'
import ProductCard from '../Product card/ProductCard'
import "./ProductContainer.css"
const ProductContainer = () => {
  return (
    
      <Container className='p_container'>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
      </Container>
    
  )
}

export default ProductContainer