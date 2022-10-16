import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import "./Header.css"

const Header = () => {
  const name: string = "tokir";
  return (
    <Navbar className='nav'>
    <Container className='container'>
      <Navbar.Brand href="#home">Ecom</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a className="nav-link" href="#">History  <span className="sr-only">(current)</span></a>
        </li>
      </ul>
      </Navbar.Collapse>
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text className='icon'>
        <i className="fa-solid fa-user"></i>
        </Navbar.Text>
        <Navbar.Text className='icon'>
        <i className="fa-solid fa-basket-shopping"></i>
        </Navbar.Text>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header