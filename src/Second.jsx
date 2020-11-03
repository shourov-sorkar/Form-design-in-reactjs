import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form"
import Header from "./layout/Header"
import { NavLink } from "react-router-dom";

const Second = () => {
  const [data, setData] = useState({
    name: "shourov",
    universityname: "IUBAT",
    dept: "CSE",
    semester: "9th",
    blood: "AB+",
    birth: "12.08.1999",
    phone: "01303499315",
    alterphone: "01737278333",
    mail: "rshourov156@gmail.com",
    facebook: "https://www.facebook.com/shourov.cse1810",
    linedIn: "https://www.linkedin.com/in/shourov-cse-1810/",
    activities: "adsfdsfa",
    organizations: "vgddsvvd",
    cv: "",
  });
  const InputEvent = (event) => {
    const { name, value } = event.target;

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };

    });
  };
  const formSubmit = (a) => {
    a.preventDefault();
    console.log(data.name)
    
  };
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
          <form onSubmit={formSubmit}>
            <Col md={{ span: 6, offset: 3 }} className="first-phase name ">
              <label for="exampleFormControlInput1" class="form-label">Name *</label>
              <input type="text" class="form-control" id="exampleFormControlInput1" name="name" value={data.name} onChange={InputEvent} placeholder="Your Answer" required />
              <span className="border"></span>
            </Col>
            <Col md={{ span: 6, offset: 3 }} className="first-phase name ">
              <label for="exampleFormControlInput1" class="form-label">University Name *</label>
              <input type="text" class="form-control" id="exampleFormControlInput1" name="universityname" value={data.universityname} onChange={InputEvent} placeholder="Your Answer" required />
              <span className="border"></span>
            </Col>
            <Col md={{ span: 6, offset: 3 }} className="first-phase name ">
              <label for="exampleFormControlInput1" class="form-label">Department & Program *</label>
              <input type="text" class="form-control" id="exampleFormControlInput1" name="dept" value={data.dept} onChange={InputEvent} placeholder="Your Answer" required />
              <span className="border"></span>
            </Col>
            <Col md={{ span: 6, offset: 3 }} className="first-phase name ">
              <label for="exampleFormControlInput1" class="form-label">Year & Semester *</label>
              <input type="text" class="form-control" id="exampleFormControlInput1" name="semester" value={data.semester} onChange={InputEvent} placeholder="Your Answer" required />
              <span className="border"></span>
            </Col>
            <Col md={{ span: 6, offset: 3 }} className="first-phase name ">
              <label for="exampleFormControlInput1" class="form-label">Blood Group *</label>
              <input type="text" class="form-control" id="exampleFormControlInput1" name="blood" value={data.blood} onChange={InputEvent} placeholder="Your Answer" required />
              <span className="border"></span>
            </Col>
            <Col md={{ span: 6, offset: 3 }} className="first-phase name ">
              <label for="exampleFormControlInput1" class="form-label">Birth Date *</label>
              <input type="date" class="form-control" id="exampleFormControlInput1" name="birth" value={data.birth} onChange={InputEvent} placeholder="Your Answer" required />
              <span className="border"></span>
            </Col>
            <Col md={{ span: 6, offset: 3 }} className="first-phase name ">
              <label for="exampleFormControlInput1" class="form-label">Phone No *</label>
              <input type="text" class="form-control" id="exampleFormControlInput1" name="phone" value={data.phone} onChange={InputEvent} placeholder="Your Answer" required />
              <span className="border"></span>
            </Col>
            <Col md={{ span: 6, offset: 3 }} className="first-phase name ">
              <label for="exampleFormControlInput1" class="form-label">Alternative Phone No *</label>
              <input type="text" class="form-control" id="exampleFormControlInput1" name="alterphone" value={data.alterphone} onChange={InputEvent} placeholder="Your Answer" required />
              <span className="border"></span>
            </Col>
            <Col md={{ span: 6, offset: 3 }} className="first-phase name ">
              <label for="exampleFormControlInput1" class="form-label">E-mail *</label>
              <input type="email" class="form-control" id="exampleFormControlInput1" name="mail" value={data.mail} onChange={InputEvent} placeholder="Your Answer" required />
              <span className="border"></span>
            </Col>
            <Col md={{ span: 6, offset: 3 }} className="first-phase name ">
              <label for="exampleFormControlInput1" class="form-label">Facebook Profile link *</label>
              <input type="url" class="form-control" id="exampleFormControlInput1" name="facebook" value={data.facebook} onChange={InputEvent} placeholder="Your Answer" required />
              <span className="border"></span>
            </Col>
            <Col md={{ span: 6, offset: 3 }} className="first-phase name ">
              <label for="exampleFormControlInput1" class="form-label">LinkedIn Profile link *</label>
              <input type="url" class="form-control" id="exampleFormControlInput1" name="linedIn" value={data.linedIn} onChange={InputEvent} placeholder="Your Answer" required />
              <span className="border"></span>
            </Col>
            <Col md={{ span: 6, offset: 3 }} className="first-phase name ">
              <label for="exampleFormControlTextarea1" class="form-label">Co-Curricular Activities and Achievements (if any)</label>
              <textarea class="form-control" id="exampleFormControlTextarea1" name="activities " value={data.activities} onChange={InputEvent} placeholder="Your Answer" rows="3"></textarea>
              <span className="border"></span>
            </Col>
            <Col md={{ span: 6, offset: 3 }} className="first-phase name ">
              <label for="exampleFormControlTextarea1" class="form-label">Are you involved with different organizations? If the answer is Yes. Please write it below with your position title including, the Company or Organization name. (Ex: Intern at YZ Company/ Campus Ambassador of ZZ organization/ Executive at YY Club etc.)</label>
              <textarea class="form-control" id="exampleFormControlTextarea1" name="organizations " value={data.organizations} onChange={InputEvent} rows="3"></textarea>
              <span className="border"></span>
            </Col>
            <Col md={{ span: 6, offset: 3 }} className="first-phase name "> <br />
              <label for="exampleFormControlInput1" class="form-label">Attach your CV/Resume here *</label>

              <input type="file" class="form-control" id="exampleFormControlInput1" name="cv " value={data.cv} onChange={InputEvent} placeholder="Your Answer"  />

            </Col>
            <Col md={{ span: 6, offset: 3 }}>
              <NavLink to="/Home" className="btn">Back</NavLink>
              <button class="btn btn-primary" type="submit">Submit</button>
            </Col>
          </form>
        </Row>
      </Container>
    </>
  );
};

export default Second; 