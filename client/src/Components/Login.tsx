import React from "react";
import { Card, Button, Form } from "react-bootstrap";

const Login: React.FC = () => {
  return (
    <div className="loginBox">
      <Card className="loginBox-card">
          <Card.Body>
            <Card.Title className="text-center">
              Se connecter à Kanbrello
            </Card.Title>
            <Form.Group controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Saisissez votre adresse e-email" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Saisir votre mot de passe" />
            </Form.Group>
            <Button className="text-center" variant="info" type="submit" size="lg" block>Se connecter</Button>
            <p className="text-center font-weight-light mt-3">Ou</p>
            <Button className="text-center google-button" variant="light" type="submit" size="lg" block>Se connecter avec Github</Button>
            <hr/>
            <div className="text-center">
            <a href="#" className="font-weight-bold ">Vous n'arrivez pas à vous connecter?</a>
            </div>
          </Card.Body>
        </Card>
    </div>
  );
};

export default Login;
