import React from 'react';

const RecentUi = (props) => {
  //this component is used to create a basic ui for each entry in the recent transactions
  return (
    //give green colour for amount if its income, else give red
    //maybe truncate the text based on length and add '...' to end, and adding option to edit and delete entry
    //add date selector react library and sort the entries from newest to oldest

    <div
      className="d-flex px-4 pt-3 align-items-center my-1 justify-content-between"
      style={{backgroundColor: '#E8F0E9', borderRadius: '7px'}}>
      <div className="d-flex flex-column ">
        <h3 style={{fontSize: '1.26rem'}} className="my-0 ">
          {props.title}
        </h3>
        <p style={{fontSize: '0.8rem'}} className="my-0 pb-2 text-secondary">
          {props.user} - {props.date}
        </p>
      </div>
      <h5 style={{fontSize: '1.16rem'}}>{props.amount}</h5>
    </div>
  );
};

export default RecentUi;
