import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from '../Button/Button';
import './modalForm.scss';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
//npm i react-datepicker

function ModalForm(props) {
  // onClick for ok in modal : form validation
  const onTransaction = () => {
    if (!props.title) {
      props.setTitleError('Too short');
    } else {
      props.setTitleError();
    }

    if (!props.amount) {
      //checking transaction type

      //for displaying error message if no transaction type is chosen
      if (!props.transactionType) {
        props.setTransactionTypeError('Please select the type of transaction');
      } else {
        props.setTransactionTypeError();
      }
      //checking amount

      props.setAmountError('Enter the amount');
    } else if (
      Number(props.amount) <= 0 ||
      typeof Number(props.amount) != 'number' ||
      isNaN(Number(props.amount))
    ) {
      console.log(Number(props.amount), typeof Number(props.amount));

      props.setAmountError('Amount should be number and > 0');
    }
    //now finally if number is acceptable, and the other 2 blanks are filled then evaluation is done
    else if (props.title && props.transactionType) {
      props.setAmountError();
      if (props.transactionType == 'Expense' && typeof props) {
        props.setTotalSavings(
          (totalSavings) => totalSavings - Number(props.amount),
        );
      } else if (props.transactionType == 'Income') {
        props.setTotalSavings(
          (totalSavings) => totalSavings + Number(props.amount),
        );
      }
      props.onHide();
    }
  };

  // to change the heading to Income/expense (and its bg color) based on user input
  const typeClickHandler = (e) => {
    const clickedButton = document.getElementById(e.target.id);
    const parentElement = document.getElementById('transaction-type');

    clickedButton.style.transform = 'translate(-600px,-200px)';
    clickedButton.style.transitionDuration = '1s';

    setTimeout(() => {
      parentElement.style.display = 'none';
      props.setTransactionType(e.target.innerText);
    }, 250);
  };

  //for maintning state for the calendar
  const [startDate, setStartDate] = useState(new Date());

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
      <div
        className="px-4 d-flex align-items-center"
        id="contained-modal-title-vcenter"
        style={{
          backgroundColor: '#064700',
          padding: '1.3rem 0',
        }}>
        <h2 className="text-light m-0">
          {props.transactionType || 'Transaction'}
        </h2>
      </div>

      <Modal.Body>
        <div
          className="justify-content-center "
          id="transaction-type"
          style={{display: 'flex'}}>
          <Button
            color="white"
            id="expense"
            backgroundColor="#238F96"
            onClick={typeClickHandler}>
            Expense
          </Button>
          <Button
            id="income"
            color="white"
            backgroundColor="#238F96"
            onClick={typeClickHandler}>
            Income
          </Button>
        </div>
        <p className="text-danger text-center m-0" id="type-error">
          {props.transactionTypeError}
        </p>
        <div
          className="form-wrapper d-flex flex-column justify-content-center pt-4 px-5"
          style={{backgroundColor: '', borderRadius: '7px'}}>
          {/* adding form */}
          <form action="">
            <div className="input-group">
              <input
                id="user"
                style={{marginBottom: '15px'}}
                // pass value from authentication
                value="Admin"
              />
              <label htmlFor="user">User</label>
            </div>

            <div className="input-group">
              <input
                id="title"
                required
                value={props.title}
                onChange={(e) => props.setTitle(e.target.value)}
              />
              <label htmlFor="title" className="text-secondary">
                Title
              </label>
              <p className="text-danger error-message">{props.titleError}</p>
            </div>

            <div className="input-group">
              <input
                id="amount"
                required
                value={props.amount}
                onChange={(e) => props.setAmount(e.target.value)}
              />
              <label htmlFor="amount" className="text-secondary">
                Amount
              </label>
              <p className="text-danger error-message">{props.amountError}</p>
            </div>
            <div className="input-group">
              <input id="link" required />
              <label htmlFor="link" className="text-secondary">
                Link
              </label>
            </div>
          </form>
          <div className="d-flex justify-content-between align-items-center">
            <p className="m-0">Date</p>
            <DatePicker
              dateFormat="dd/MM/yyyy"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </div>
        </div>
      </Modal.Body>
      <div
        className="d-flex align-items-center justify-content-end py-3 pe-4 align-items-center"
        style={{backgroundColor: '#F5F5F5'}}>
        <Button fontsize="1 rem" onClick={props.onHide}>
          Cancel
        </Button>
        <Button
          fontsize="1 rem"
          color="white"
          backgroundColor="#258054"
          onClick={onTransaction}>
          Submit
        </Button>
      </div>
    </Modal>
  );
}

export default ModalForm;
