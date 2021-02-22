import "./PageHeader.css";
import { Row, Col } from "react-bootstrap";


const PageHeader = ({ mainHeader, subHeader }) => {
  return (
    <div >
      <Row className="page-header">
        <Col>
          <p id="main-header"> {mainHeader} </p>
          <p id="sub-header"> {subHeader} </p>
        </Col>
      </Row>

    </div>
  )
}

export default PageHeader;