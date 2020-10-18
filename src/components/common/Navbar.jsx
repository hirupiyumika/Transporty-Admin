import React from "react";
import styled from "styled-components";
import {Nav,NavDropdown} from 'react-bootstrap'
import firebaseApp from "../../firebase/firebase";
const NavBar = () => {

  const handleLogout =() =>{
    firebaseApp.auth().signOut();
    localStorage.removeItem("username");
    window.location = "/";
}

    return ( 

<Nav className="navbar navbar-dark bg-primary justify-content-end" >
<Nav.Item>
    <NavTitle title="Vehicle Management" id="basic-nav-dropdown">
        <NavDropdown.Item href="/ctb-vehicles">CTB Vehicles</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="private-vehicles">Private Vehicles</NavDropdown.Item>
      </NavTitle>
  </Nav.Item>
  <Nav.Item>
      <NavTitle title="Time Management" id="basic-nav-dropdown">
        <NavDropdown.Item href="/ctb-time">CTB Timetable</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="private-time">Private Timetable</NavDropdown.Item>
      </NavTitle>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link href="/passenger" style={{color:"white"}}>Passenger Management</Nav.Link>
  </Nav.Item>
  <Nav.Item>
  <NavTitle title="Driver Management" id="basic-nav-dropdown">
        <NavDropdown.Item href="/ctb-drivers">CTB Drivers</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="private-drivers">Private Drivers</NavDropdown.Item>
      </NavTitle>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link href="/location" style={{color:"white"}}>Location Management</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link href="/statistics" style={{color:"white"}}>Statistics</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link href="/payment" style={{color:"white"}}>Payment</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link  onClick={handleLogout} style={{color:"white"}}>Logout</Nav.Link>
  </Nav.Item>
</Nav>
     );
}
 
export default NavBar;

const NavTitle = styled(NavDropdown)`
 
a:link{
    color:white !important;
}
`;