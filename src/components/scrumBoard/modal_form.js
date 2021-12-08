import React, { Component } from "react";
import "react-datepicker/dist/react-datepicker.css";
import {
  Modal,
  ModalBody,
  ModalHeader,
  Col,
  FormGroup,
  Form,
  Input,
  Label,
  Button,
  FormText,
} from "reactstrap";
import DatePicker from "react-datepicker";
const err = {
  task_name: "Required",
  deadline: "Required",
  description: "Required",
};
class Modal_Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task_name: "",
      assign: "THARUN.V",
      deadline: "",
      description: "",
      priority: "LOW",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDatePicker = this.handleDatePicker.bind(this);
  }
  handleError = (name, value) => {
    if (value) {
      return (err[name] = "");
    }
    return (err[name] = "Required");
  };
  handleSubmit(e) {
    e.preventDefault();
    this.props.handleClick();
    this.props.handleState(this.state);
    this.setState({
      task_name: "",
      assign: "THARUN.V",
      deadline: "",
      description: "",
      priority: "LOW",
    });
    err.task_name = "Required";
    err.deadline = "Required";
    err.description = "Required";
  }
  handleChange(e) {
    this.handleError(e.target.name, e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  }
  handleDatePicker(date) {
    this.handleError("deadline", date);
    this.setState({ deadline: date });
  }
  render() {
    console.log(err);
    return (
      <Modal isOpen={this.props.isOpen}>
        <ModalHeader
          className="bg-success text-white"
          toggle={this.props.handleClick}
        >
          Submit Comment
        </ModalHeader>
        <ModalBody>
          <Form onSubmit={this.handleSubmit}>
            <FormGroup row>
              <Label htmlFor="task_name" md={3}>
                Task_Name
              </Label>
              <Col md={9}>
                <Input
                  type="text"
                  id="task_name"
                  name="task_name"
                  placeholder="Enter The Task"
                  value={this.state.task_name}
                  onChange={this.handleChange}
                  valid={err["task_name"] == ""}
                  invalid={err["task_name"] == "Required"}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label md={3}>Deadline</Label>
              <Col md={9}>
                <DatePicker
                  selected={this.state.deadline}
                  onChange={this.handleDatePicker}
                  dateFormat="dd/MM/yyyy"
                  minDate={new Date()}
                  isClearable
                />
                <FormText>{err.deadline}</FormText>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label htmlFor="assign" md={3}>
                Assign To
              </Label>
              <Col md={9}>
                <Input
                  type="select"
                  name="assign"
                  id="assign"
                  value={this.state.assign}
                  onChange={this.handleChange}
                >
                  <option>THARUN.V</option>
                  <option>VISHNU</option>
                  <option>RISHAB</option>
                  <option>RAJESH</option>
                </Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label htmlFor="priority" md={3}>
                Priority
              </Label>
              <Col md={9}>
                <Input
                  type="select"
                  name="priority"
                  id="priority"
                  value={this.state.priority}
                  onChange={this.handleChange}
                >
                  <option>LOW</option>
                  <option>MEDIUM</option>
                  <option>HIGH</option>
                </Input>
              </Col>
            </FormGroup>

            <FormGroup row>
              <Label htmlFor="description" md={3}>
                Description
              </Label>
              <Col md={9}>
                <Input
                  type="textarea"
                  name="description"
                  id="description"
                  rows="5"
                  cols="12"
                  value={this.state.description}
                  onChange={this.handleChange}
                  valid={err["description"] == ""}
                  invalid={err["description"] == "Required"}
                />
              </Col>
            </FormGroup>
            <Button
              disabled={
                err.task_name == "Required" ||
                err.deadline == "Required" ||
                err.description == "Required"
              }
              className="mt-1 btn text-white bg-danger"
            >
              Add!!
            </Button>
          </Form>
        </ModalBody>
      </Modal>
    );
  }
}
export default Modal_Form;
