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
              <label htmlFor="checkbox">Preferred Team (Applicant may choose multiple Team) *</label>
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

          <Col md={{ span: 6, offset: 3 }} className="first-phase name ">
            <label htmlFor="input">Name *</label> <br />

            <input className="input" id="form-one" type="text" placeholder="Your answer" required />
            <span className="border"></span>
          </Col>
          <Col md={{ span: 6, offset: 3 }} className="first-phase name ">
            <label htmlFor="input">University Name  *</label> <br />

            <input className="input" id="form-one" type="text" placeholder="Your answer" required />
            <span className="border"></span>
          </Col>
          <Col md={{ span: 6, offset: 3 }} className="first-phase name ">
            <label htmlFor="input">Department & Program  *</label> <br />
            <input className="input" id="form-one" type="text" placeholder="Enter answer" required />
            <span className="border"></span>
          </Col>
          <Col md={{ span: 6, offset: 3 }} className="first-phase name ">
            <label htmlFor="input">Year & Semester *</label> <br />
            <input className="input" id="form-one" type="text" placeholder="Enter answer" required />
            <span className="border"></span>
          </Col>
          <Col md={{ span: 6, offset: 3 }} className="first-phase name ">
            <label htmlFor="input">Blood Group *</label> <br />
            <input className="input" id="form-one" type="text" placeholder="Enter answer" required />
            <span className="border"></span>
          </Col>
          <Col md={{ span: 6, offset: 3 }} className="first-phase name ">
            <label htmlFor="input">Birth Date *</label> <br />
            <input className="input" id="form-one" type="date" placeholder="Enter answer" required />
            <span className="border"></span>
          </Col>
          <Col md={{ span: 6, offset: 3 }} className="first-phase name ">
            <label htmlFor="input">Phone No *</label> <br />
            <input className="input" id="form-one" type="text" placeholder="Enter answer" required />
            <span className="border"></span>
          </Col>
          <Col md={{ span: 6, offset: 3 }} className="first-phase name ">
            <label htmlFor="input">Alternative Phone No *</label> <br />
            <input className="input" id="form-one" type="text" placeholder="Enter answer" required />
            <span className="border"></span>
          </Col>
          <Col md={{ span: 6, offset: 3 }} className="first-phase name ">
            <label htmlFor="input">Email *</label> <br />
            <input className="input" id="form-one" type="email" placeholder="Enter answer" required />
            <span className="border"></span>
          </Col>
          <Col md={{ span: 6, offset: 3 }} className="first-phase name ">
            <label htmlFor="input">Facebook ID Link *</label> <br />
            <input className="input" id="form-one" type="url" placeholder="Enter answer" required />
            <span className="border"></span>
          </Col>
          <Col md={{ span: 6, offset: 3 }} className="first-phase name ">
            <label htmlFor="input">Linkedin Profile Link *</label> <br />
            <input className="input" id="form-one" type="url" placeholder="Enter answer" required />
            <span className="border"></span>
          </Col>
          <Col md={{ span: 6, offset: 3 }} className="first-phase name ">
            <label htmlFor="input">Co-Curricular Activities and Achievements (if any)</label> <br />
            <input className="input" id="form-one" type="text" placeholder="Enter answer" />
            <span className="border"></span>
          </Col>
          <Col md={{ span: 6, offset: 3 }} className="first-phase name ">
            <label htmlFor="input">Are you involved with different organizations? If the answer is Yes. Please write it below with your position title including, the Company or Organization name. (Ex: Intern at YZ Company/ Campus Ambassador of ZZ organization/ Executive at YY Club etc.)</label> <br />
            <input className="input" id="form-one" type="text" placeholder="Enter answer" />
            <span className="border"></span>
          </Col>
          <Col md={{ span: 6, offset: 3 }} className="first-phase name "> <br />
            <label htmlFor="input">Attach your CV/Resume here *</label> <br />

            <input className="input" id="form-one" type="file" placeholder="Enter answer" required />
            <span className="border"></span>
          </Col>
          <Col md={{ span: 6, offset: 3 }}>
            <NavLink to="/Home" className="btn">Back</NavLink>
            <input className="btn submit" value="Submit" type="submit" required />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Second; 