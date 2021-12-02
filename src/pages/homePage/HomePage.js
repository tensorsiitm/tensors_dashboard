import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import SampleCard from '../../components/sampleCard/SampleCard';
import Transactions from '../../components/transactions/Transactions';
function HomePage() {
  return (
    <>
      <Transactions />
    </>
  );
}

export default HomePage;
