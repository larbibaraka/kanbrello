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
import { faHome, faPlus, faStar, faStopwatch, faBookmark, faInfo, faInfoCircle, faBell, faUser } from "@fortawesome/free-solid-svg-icons";

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
            <Accordion defaultActiveKey="0" style={{width : '25rem'}}>
              <Card>
                <Card.Header>
                <h6 style={{lineHeight :2.2}}><FontAwesomeIcon icon={faStar} /> STARRED BOARDS <Accordion.Toggle as={Button} variant="light" eventKey="0" style={{float: 'right'}}>
                   <FontAwesomeIcon icon={faPlus} />
                  </Accordion.Toggle></h6>
                  
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>Hello! I'm the body</Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>                    
            <Accordion   style={{width : '25rem'}}>
              <Card>
                <Card.Header>
                <h6 style={{lineHeight :2.2}}><FontAwesomeIcon icon={faStopwatch} /> RECENT BOARD <Accordion.Toggle as={Button} variant="light" eventKey="0" style={{float: 'right'}}>
                   <FontAwesomeIcon icon={faPlus} />
                  </Accordion.Toggle></h6>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>Hello! I'm the body</Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion> 
            <Accordion  style={{width : '25rem'}}>
              <Card>
                <Card.Header>
                <h6 style={{lineHeight :2.2}}><FontAwesomeIcon icon={faBookmark} /> PERSONAL BOARD <Accordion.Toggle as={Button} variant="light" eventKey="0" style={{float: 'right'}}>
                   <FontAwesomeIcon icon={faPlus} />
                  </Accordion.Toggle></h6>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>Hello! I'm the body</Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion> 
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
