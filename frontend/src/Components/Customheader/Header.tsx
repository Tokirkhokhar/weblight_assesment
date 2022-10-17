import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import "./Header.css"
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <Navbar className='nav navbar-dark'>
    <Container className='container'>
    <Link to="./" style={{textDecoration:"none"}}><Navbar.Brand >Ecom</Navbar.Brand></Link>
      <Navbar.Toggle />
      <Navbar.Collapse>
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <Link className="nav-link" to="./history">History  <span className="sr-only">(current)</span></Link>
        </li>
      </ul>
      </Navbar.Collapse>
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text className='icon'>
        <i className="fa-solid fa-user"></i>
        </Navbar.Text>
        <Navbar.Text className='icon'>
          <Link to="./cart">
          <i className="fa-solid fa-basket-shopping"></i>
          </Link>
        </Navbar.Text>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header