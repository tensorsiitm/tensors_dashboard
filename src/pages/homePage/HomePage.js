import React from "react";
import { Container, Row, Col } from "reactstrap";
import SampleCard from "../../components/sampleCard/SampleCard";
import {Card, CardHeader, CardBody, CardText, CardTitle, Button} from 'reactstrap'
import {deadline} from "../../components/deadlinebar";
function HomePage() {
  return (
    <>
      <Container>
        <Row>
          <Col md={10}>
            <Container fluid>
              <Row>
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
          <Col>
            <Card>
              <CardHeader>Upcoming Deadlines</CardHeader>
              <CardBody>
                {deadline}
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default HomePage;

/*<CardTitle tag="h5"><a href="#" >Tensor Dashboard</a></CardTitle>
                <CardText>Due 25/10/21</CardText>
                <hr/>
                <CardTitle tag="h5"><a href="#" >Jee Question Paper</a></CardTitle>
                <CardText>Due 26/11/21</CardText>
                <hr/>
                <CardTitle tag="h5"><a href="#" >Tensor Dashboard</a></CardTitle>
                <CardText>Due 12/12/21</CardText>*/
