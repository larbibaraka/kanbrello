import React from 'react';

import {
    Button,
    Accordion,
    Card
  } from "react-bootstrap";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import { faHome, faPlus, faStar, faStopwatch, faBookmark, faInfo, faInfoCircle, faBell, faUser } from "@fortawesome/free-solid-svg-icons";
  import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface Props {
    title : string,
    icon :  IconProp,
    body : string
}


const NavbarAcordion :React.FC<Props> = ({title , icon, body})=> {
    return(
        <Accordion style={{width : '25rem'}}>
        <Card>
          <Card.Header>
          <h6 style={{lineHeight :2.2}}><FontAwesomeIcon icon={icon} /> {title} <Accordion.Toggle as={Button} variant="light" eventKey="0" style={{float: 'right'}}>
             <FontAwesomeIcon icon={faPlus} />
            </Accordion.Toggle></h6>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>{body}</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion> 
    )
} 

export default NavbarAcordion;