import React from 'react'
import {Card, CardHeader, CardBody, CardText, CardTitle, Button} from 'reactstrap'


export default function SampleCard() {
    return (
        <>
            {/*A card just for the purpose of showing as a sample */}
        <Card>
          <CardHeader>Header</CardHeader>
          <CardBody>
            <CardTitle tag="h5">Test Card 1</CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional
              content.
            </CardText>
            <Button>Go somewhere</Button>
          </CardBody>
        </Card>
      </>
    );
}
