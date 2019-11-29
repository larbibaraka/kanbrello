import React from "react";
import { Card, Button, Form, Row, Col } from "react-bootstrap";

const Login: React.FC = () => {
  return (
    <Row>
      <Col
        xs
        sm={{ span: 4, offset: 2 }}
        md={{ span: 8, offset: 3 }}
        lg={{ span: 8, offset: 4 }}
      >
        <Card style={{ width: "25rem" }}>
          <Card.Body>
            <Card.Title className="text-center">
              Se connecter à Kanbrello
            </Card.Title>
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                type="email"
                placeholder="Saisissez votre adresse e-email"
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Control
                type="password"
                placeholder="Saisir votre mot de passe"
              />
            </Form.Group>
            <Button
              className="text-center"
              variant="info"
              type="submit"
              size="lg"
              block
            >
              Se connecter
            </Button>
            <p className="text-center font-weight-light mt-3">Ou</p>
            <Button
              className="text-center"
              variant="light"
              type="submit"
              size="lg"
              block
            >
              Se connecter avec Github
            </Button>
            <hr />
            <div className="text-center">
              <a href="#" className="font-weight-bold">
                Vous n'arrivez pas à vous connecter?
              </a>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default Login;
