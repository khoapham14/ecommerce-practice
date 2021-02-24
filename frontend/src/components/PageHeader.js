import "./PageHeader.css";
import { Row, Col, Container } from "react-bootstrap";


const PageHeader = ({ mainHeader, subHeader }) => {
  return (
    <Container>
      <Row className="page-header">
        <Col md="12" sm="12" xs="12">
          <p id="main-header"> {mainHeader} </p>
          <p id="sub-header"> {subHeader} </p>
        </Col>
      </Row>
    </Container>
  )
}

export default PageHeader;