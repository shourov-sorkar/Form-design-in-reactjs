import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import banner from "../img/banner.jpg";
const Header = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <Image src={banner} fluid className="banner-img"/>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Header;