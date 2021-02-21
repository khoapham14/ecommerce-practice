import "./PageHeader.css";
import { Row, Col } from "react-bootstrap";


const PageHeader = ({ mainHeader, subHeader }) => {
  return (
    <div >
      <Row className="page-header">
        <Col md="2" sm="2">
        </Col>
        <Col md="6" sm="6">
          <p id="main-header"> {mainHeader} </p>
          <p id="sub-header"> {subHeader} </p>
        </Col>
        <Col md="4" sm="4">
        </Col>
      </Row>

    </div>
  )
}

export default PageHeader;