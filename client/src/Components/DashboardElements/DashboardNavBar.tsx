import React from "react";
import {
  Navbar,
  FormControl,
  Button,
  Nav,
  NavDropdown,
  Dropdown,
  DropdownButton
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faPlus, faStar, faStopwatch, faBookmark, faInfo, faInfoCircle, faBell, faUser, faAddressCard } from "@fortawesome/free-solid-svg-icons";
import NavbarAcordion from "./navbarElements/NavbarAcordion";

const DashboardNavBar: React.FC = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-info">
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
          <Nav.Link href="#">
          <DropdownButton id="dropdown-item-button" title="Boards">
            <div>
              <h6 className="text-center">Create</h6>
              <hr/>
            </div>
            <Dropdown.Item as="button">Create Board</Dropdown.Item>
            <Dropdown.Item as="button">Create Team</Dropdown.Item>
          </DropdownButton>
          </Nav.Link>
          <Nav.Link href="#"><Button variant="light"><FontAwesomeIcon icon={faInfoCircle}/></Button></Nav.Link>
          <Nav.Link href="#"><Button variant="light"><FontAwesomeIcon icon={faBell}/></Button></Nav.Link>
          <Nav.Link href="#"><Button variant="light"><FontAwesomeIcon icon={faUser}/></Button></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default DashboardNavBar;
