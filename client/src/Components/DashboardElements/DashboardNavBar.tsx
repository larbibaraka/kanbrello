import React from "react";
import {
  Navbar,
  Form,
  FormControl,
  Button,
  Nav,
  NavDropdown,
  Accordion,
  Card
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faPlus, faStar, faStopwatch, faBookmark, faInfo, faInfoCircle, faBell, faUser, faAddressCard } from "@fortawesome/free-solid-svg-icons";
import NavbarAcordion from "./navbarElements/NavbarAcordion";

const DashboardNavBar: React.FC = () => {
  return (
    <Navbar collapseOnSelect expand="lg">
      <Navbar.Brand href="/dashboard">
        <span className="home-navbar"><FontAwesomeIcon icon={faHome} /></span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <NavDropdown title="Boards" id="collasible-nav-dropdown">
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <NavDropdown.Divider />
            <NavbarAcordion title="STARRED BOARDS" icon={faStar} body="...." />
            <NavbarAcordion title="RECENT BOARD" icon={faStopwatch} body="...." />
            <NavbarAcordion title="PERSONAL BOARD" icon={faBookmark} body="...." /> 
            <NavDropdown.Divider />
           <div className="links-boards">
                <Button variant="info" block>Create new Board...</Button>
                <Button variant="info" block>See Closed Boards...</Button>
           </div>
          </NavDropdown>
          <FormControl type="text" placeholder="Search" className="ml-10" />
        </Nav>
        <Nav>
          <Nav.Link href="#"><Button variant="light"><FontAwesomeIcon icon={faPlus}/></Button></Nav.Link>
          <Nav.Link href="#"><Button variant="light"><FontAwesomeIcon icon={faInfoCircle}/></Button></Nav.Link>
          <Nav.Link href="#"><Button variant="light"><FontAwesomeIcon icon={faBell}/></Button></Nav.Link>
          <Nav.Link href="#"><Button variant="light"><FontAwesomeIcon icon={faUser}/></Button></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default DashboardNavBar;
