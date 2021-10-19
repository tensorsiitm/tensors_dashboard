import React from "react";
import { Container, Row, Col } from "reactstrap";
import SampleCard from "../../components/sampleCard/SampleCard";
function HomePage() {
  return (
    <><Container>
        <Row>
          <Col md={9}>
          <Container fluid >
         <Row >
           <Col md={6}>
             <SampleCard />
           </Col>
           <Col md={6}>
             <SampleCard />
           </Col>
         </Row>
         <Row>
           <Col>
             <SampleCard />
           </Col>
         </Row>
       </Container>

          </Col>
          <Col >
            <SampleCard/>
          </Col>
        </Row>

      </Container>
      
    </>
  );
}

export default HomePage;
