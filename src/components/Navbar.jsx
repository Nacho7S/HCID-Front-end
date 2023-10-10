import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { useState } from "react";
import { useDispatch } from "react-redux"
import { fetchProducts } from '../store/Actions/actionCreator';

export default function NavbarComponents() {
  const [search, setSearch] = useState({
    search: ''
  })
  const dispatch = useDispatch()
  const changeSearch = (e) => {
    const { name, value } = e.target
    console.log(search);
    setSearch({...search, [name]: value})
  }

  const searchSubmit = async (e) => {
    e.preventDefault()
    dispatch(fetchProducts(search.search))

  }

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">HC.ID</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavLink className=" nav-link" to='/' href="#action1" style={({ isActive }) => {
                    return {
                      fontWeight: isActive ? "bold" : "",
                      color: isActive ? "black" : "black",
                    };
                  }}>Home</NavLink>
            <NavLink className=" nav-link" to='/products' href="#action1" style={({ isActive }) => {
                    return {
                      fontWeight: isActive ? "bold" : "",
                      color: isActive ? "black" : "black",
                    };
                  }}>Products</NavLink>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              name='search'
              value={search.search}
              onChange={changeSearch}
            />
            <Button variant="outline-success" onClick={searchSubmit}>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}