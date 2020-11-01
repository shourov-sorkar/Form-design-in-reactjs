import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form"
import Header from "./layout/Header"
import { NavLink } from "react-router-dom";
import TextInput from "../node_modules/react-textinput-field";
const Second = () => {
  return (
    <>
      <Header />
      <Container fluid>

        <Row>
          <Col md={{ span: 6, offset: 3 }} className="first-phase">
            <h1>Amar iSchool: Internship Program</h1>
            <p>The name and photo associated with your Google account will be recorded when you upload files and submit this form. Not <span>rshourov156@gmail.com?</span> <NavLink to="/">Switch account</NavLink> </p>
            <p>Required*</p>
          </Col>
          <Col md={{ span: 6, offset: 3 }} className="first-phase">
            <Form>
              {['checkbox'].map((type) => (
                <div key={`default-${type}`} className="mb-6">
                  <Form.Check
                    type={type}
                    id={`default-${type}`}
                    label={`Social Media Team`}
                  />
                  <Form.Check
                    type={type}
                    id={`default-${type}`}
                    label={`Content Development Team`}
                  />
                  <Form.Check
                    type={type}
                    id={`default-${type}`}
                    label={`Project Team`}
                  />
                </div>
              ))}
            </Form>
          </Col>
          
        </Row>
      </Container>
    </>
  );
};

export default Second; 