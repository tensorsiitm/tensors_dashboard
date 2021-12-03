import React from "react";
import Chart from "./Chart";
import CardBalance from "./CardBalance/CardBalance.js";
import { Row, Col, Container } from "react-bootstrap";
import RecentTransactions from "./RecentTransactions.js";

const Transactions = () => {
  return (
    <Container>
      <Row>
        <Col lg={6} className="d-flex flex-column justify-content-evenly">
          <Row>
            <CardBalance />
          </Row>
          <Row>
            <Chart />
          </Row>
        </Col>
        <Col lg={6}>
          <RecentTransactions />
        </Col>
      </Row>
    </Container>
  );
};

export default Transactions;
