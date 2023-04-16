import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { LinkContainer } from "react-router-bootstrap";
import { useState, useEffect } from 'react';
import UserInfo from './UserInfo';

function MyNavbar() {
  const [isAdmin, setIsAdmin] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/userInfo", {
      method: "POST",
      crossDomain:true,
      headers: {
        "Content-Type":"application/json",
        Accept:"application/json",
      },
      body:JSON.stringify({
        token:window.localStorage.getItem("token"),
      }),
    }).then((res) => res.json())
    .then((data) => {
      setIsAdmin(data.data.admin);
    })
  }, []);

  

const navbarTitle = {
  color: "white",
  fontFamily: "Gluten",
  fontSize: "25px"
  
}

const dropdown = {
  backgroundColor: "#2613fe"
};

const dropdownItem = {
  color: "white",
  backgroundColor: "#2613fe",
  fontFamily: "Gluten"
 
};

const navLink = {
  color: "white",
  fontFamily: "Gluten",
  fontSize: "18px",  
  flexDirection: "column"
  
};

const linkContainer = {
  flexDirection: "column",
  justifyContent: "center",
  display: "flex",
  alignItems: "center"
};

const navbarStyle = {
  backgroundColor: '#2613fe',
  height: "80px"
};

  return (
    <Navbar style={navbarStyle} expand="lg">
      <Container>
        <LinkContainer to="/welcome" style={navbarTitle}><Navbar.Brand style={navbarTitle}>Gator Security Fundamentals</Navbar.Brand></LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav class="navbar-nav ms-auto mb-2 mb-lg-0" style={{color:'white'}}>            
            <LinkContainer to="/learn" style={navLink}><Nav.Link style={navLink} eventKey={1}> <div style={linkContainer}><div>Learn</div><img src='./bookIcon.png' alt=''/></div></Nav.Link></LinkContainer>                 
            <LinkContainer to="/game" style={navLink}><Nav.Link style={navLink} eventKey={2} ><div style={linkContainer}><div>Game</div><img src='./gameIcon.png' alt=''/></div></Nav.Link></LinkContainer>
            {isAdmin && (<LinkContainer to="/admin" style={navLink}><Nav.Link style={navLink} eventKey={3} ><div style={linkContainer}><div>Admin</div><img src='./adminIcon.png' alt=''/></div></Nav.Link></LinkContainer>)}
            <NavDropdown style={dropdown} eventKey={4} title={<img src='./profileIcon.png' alt=''/>}>
                <LinkContainer to="/myprofile" style={dropdownItem}><NavDropdown.Item style={dropdownItem} eventKey={4.1}>My Profile</NavDropdown.Item></LinkContainer>
                <NavDropdown.Item style={dropdownItem} eventKey={4.2}>Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;