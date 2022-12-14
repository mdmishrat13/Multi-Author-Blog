import React from "react";
import { Container, Form, Button, Card } from "react-bootstrap";

const Login = () => {
  return (
    <Container className="main-container">
      <Card>
        <Card.Body>
        <Form className="">
        <h1 className="p-3 text-center">Please Login Here</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Login;
