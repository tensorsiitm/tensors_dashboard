import React, { Component } from "react";
import "./Task.css";
import {
  Card,
  CardBody,
  CardHeader,
  CardText,
  Modal,
  ModalBody,
  ModalHeader,
  Form,
  FormGroup,
  Col,
  Button,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Draggable } from "react-beautiful-dnd";
const Card_ = (result) => {
  const colorCode = {
    HIGH: "bg-danger",
    LOW: "bg-primary",
    MEDIUM: "bg-warning",
  };
  return "col-2 offset-3 " + colorCode[result];
};
class Task extends Component {
  state = {
    isOpen: false,
  };
  handleClick = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <>
        <Draggable draggableId={this.props.task.id} index={this.props.index}>
          {(provided) => (
            <>
              <div
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                ref={provided.innerRef}
              >
                <Card key={this.props.task.id} className="div5">
                  <CardHeader
                    className="bg-success text-white card_header"
                    style={{ borderRadius: "16px 16px 0px 0px" }}
                  >
                    <div className="row">
                      <div className="col-7">{this.props.task.task_name}</div>
                      <div
                        className={Card_(this.props.task.priority)}
                        style={{
                          width: "24px",
                          height: "24px",
                          borderRadius: "50%",
                        }}
                      ></div>
                    </div>
                  </CardHeader>
                  <CardBody>
                    <CardText>
                      {this.props.task.assign}
                      <div className="text-muted">
                        {this.props.task.deadline.toDateString()}
                      </div>
                      <div className="row">
                        <div className="col-2 offset-9">
                          <button
                            style={{ borderRadius: "50%" }}
                            className="btn btn-danger"
                            onClick={this.handleClick}
                          >
                            <FontAwesomeIcon icon={faTimes} />
                          </button>
                        </div>
                      </div>
                    </CardText>
                  </CardBody>
                </Card>
              </div>
            </>
          )}
        </Draggable>
        <Modal isOpen={this.state.isOpen}>
          <ModalHeader
            toggle={this.handleClick}
            className="bg-warning text-white"
          >
            Warning
          </ModalHeader>
          <ModalBody>
            <Form onSubmit={() => this.props.handleDelete(this.props.task.id)}>
              <FormGroup row>
                <Col xs={9}>
                  <div>Are You Sure You Want To Delete</div>
                </Col>
                <Col xs={3}>
                  {" "}
                  <Button className="mt-1 bg-danger">Delete</Button>
                </Col>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </>
    );
  }
}
export default Task;
