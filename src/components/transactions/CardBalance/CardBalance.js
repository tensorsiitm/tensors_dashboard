import React, {useState} from 'react';
import Button from '../Button/Button';
import './cardBalance.css';
import ModalForm from '../ModalForm/ModalForm';

const CardBalance = () => {
  //maintaining every state here and passing the required to modal for form validation
  const [totalSavings, setTotalSavings] = useState(100);
  const [modalShow, setModalShow] = useState(false);
  const [transactionType, setTransactionType] = useState();
  const [title, setTitle] = useState();
  const [transactionTypeError, setTransactionTypeError] = useState();
  const [titleError, setTitleError] = useState();
  const [link, setLink] = useState('');
  const [amountError, setAmountError] = useState('');
  const [amount, setAmount] = useState();

  //func executed when trying to exit the modal (clicking x, clicking cancel button, clicking overlay)
  const onClose = () => {
    setTitle();
    setAmount();
    setTransactionType();
    setModalShow(false);
    setTitleError();
    setAmountError();
    setTransactionTypeError();
  };

  return (
    <div
      className="card-balance d-flex flex-column justify-content-center mb-3 align-items-evenly "
      style={{backgroundColor: '#0B795F', borderRadius: '7px'}}>
      <h2 className="text-light text-center">₹ {totalSavings}</h2>
      <ModalForm
        transactionTypeError={transactionTypeError}
        setTransactionTypeError={setTransactionTypeError}
        titleError={titleError}
        setTitleError={setTitleError}
        amountError={amountError}
        setAmountError={setAmountError}
        totalSavings={totalSavings}
        setTotalSavings={setTotalSavings}
        transactionType={transactionType}
        setTransactionType={setTransactionType}
        title={title}
        setTitle={setTitle}
        amount={amount}
        setAmount={setAmount}
        link={link}
        setLink={setLink}
        show={modalShow}
        onHide={onClose}
      />
      <div className="d-flex justify-content-center">
        <Button color="#3B647B" onClick={() => setModalShow(true)}>
          Add a Transaction
        </Button>
      </div>
    </div>
  );
};

export default CardBalance;
