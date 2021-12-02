import React, { Component } from "react";
import "react-datepicker/dist/react-datepicker.css";
import {
  Modal,
  ModalBody,
  ModalHeader,
  Col,
  Row,
  FormFeedback,
  FormGroup,
  Form,
  Input,
  Label,
  Button,
} from "reactstrap";
import DatePicker from "react-datepicker";
class Modal_Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task_name: "",
      assign: "THARUN.V",
      deadline: "",
      public: false,
      description: "",
      priority: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDatePicker = this.handleDatePicker.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.handleClick();
    this.props.handleState(this.state);
    this.setState({
      task_name: "",
      assign: "THARUN.V",
      deadline: "",
      public: false,
      description: "",
      priority: "",
    });
  }
  handleChange(e) {
    let value = e.target.name == "public" ? e.target.checked : e.target.value;
    this.setState({ [e.target.name]: value });
  }
  handleDatePicker(date) {
    this.setState({ deadline: date });
  }
  handlePublic() {
    let value = this.state.public ? (
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
    ) : (
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
    );
    return value;
  }
  render() {
    return (
      <Modal isOpen={this.props.isOpen}>
        <ModalHeader toggle={this.props.handleClick}>
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
              </Col>
            </FormGroup>
            <FormGroup row check>
              <Label md={{ offset: 3 }} check>
                <Input
                  type="checkbox"
                  id="public"
                  name="public"
                  value={this.state.public}
                  onChange={this.handleChange}
                />{" "}
                Public
              </Label>
            </FormGroup>
            {this.handlePublic()}
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
                />
              </Col>
            </FormGroup>
            <Button className="mt-1">Add!!</Button>
          </Form>
        </ModalBody>
      </Modal>
    );
  }
}
export default Modal_Form;
