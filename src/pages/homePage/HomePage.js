import React from "react";
import { Container, Row, Col } from "reactstrap";
import Transactions from '../../components/transactions/Transactions';
import {Card, CardHeader, CardBody} from 'reactstrap'
import {deadline} from "../../components/deadlinebar";
function HomePage() {
  return (
    <>
      <Container>
        <Row>
          <Col md={10}>
          <Transactions />
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
