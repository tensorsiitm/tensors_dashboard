import React from 'react';
import  {DEADLINE}  from "../assets/dummy";

import {Button, CardText, CardTitle} from 'reactstrap';

console.log (DEADLINE);

DEADLINE.sort((a,b) => (a.year > b.year) ? 1: (a.year === b.year ) ? ((a.month > b.month) ? 1: (a.month === b.month) ? ((a.date > b.date) ? 1:-1):-1 ):-1);

console.log (DEADLINE);

export const deadline = DEADLINE.map((dead) => {
    return (
      <div>
        <CardTitle tag="h5"><a href="/" >{dead.title}</a></CardTitle>
        <CardText>Due {dead.date}/{dead.month}/{dead.year}  </CardText>
        <hr/>
      </div>
    );
} );



