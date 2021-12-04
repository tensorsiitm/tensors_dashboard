import React from "react";
import { Component } from "react";
import {
  Modal,
  ModalBody,
  ModalHeader,
  Form,
  FormGroup,
  Col,
  Button,
} from "reactstrap";
import Task from "../card/Task";
import "./Column.css";
import { Droppable } from "react-beautiful-dnd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";
import Modal_Form from "../modal_form";
class Column extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false, isModalOpen: false };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.handleModalClick();
  };
  handleClick = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  handleModalClick = () => {
    this.setState({ isModalOpen: !this.state.isModalOpen });
  };
  handleState = (newTask) => {
    newTask.columnId = this.props.column.id;
    newTask.id = "task-" + String(this.props.tasks.length + 1);
    this.props.addTask(newTask);
  };
  render() {
    return (
      <>
        <div className="div2">
          <div className="header_ bg-success">
            <h4 className="text-center  text-white">
              {this.props.column.title}
            </h4>
            <div className="row">
              <div className="col-5 offset-1">
                <button
                  className="btn btn-info text-white"
                  style={{ borderRadius: "50%" }}
                >
                  <FontAwesomeIcon icon={faPlus} onClick={this.handleClick} />
                </button>
              </div>
              <div className="col-1 offset-3">
                <button
                  className="btn text-white btn-danger"
                  style={{ borderRadius: "50%" }}
                  onClick={this.handleModalClick}
                >
                  <FontAwesomeIcon icon={faTimes} />
                </button>
              </div>
            </div>
          </div>
          <Droppable droppableId={this.props.column.id} type="task">
            {(provided) => (
              <div
                style={{ backgroundColor: "transparent" }}
                className="div3"
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {this.props.tasks.map((task, index) => (
                  <Task
                    task={task}
                    index={index}
                    key={task.id}
                    handleDelete={this.props.handleDelete}
                  />
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>

        <Modal_Form
          isOpen={this.state.isOpen}
          handleClick={this.handleClick}
          handleState={this.handleState}
        />
        <Modal isOpen={this.state.isModalOpen}>
          <ModalHeader
            toggle={this.handleModalClick}
            className="bg-warning text-white"
          >
            Warning
          </ModalHeader>
          <ModalBody>
            <Form onSubmit={() => this.handleSubmit()}>
              <FormGroup row>
                <Col xs={9}>
                  <div>Are You Sure You Want To Delete</div>
                </Col>
                <Col xs={3}>
                  {" "}
                  <Button
                    onClick={() =>
                      this.props.handleDeleteBoard(this.props.column.id)
                    }
                    className="mt-1 bg-danger"
                  >
                    Delete
                  </Button>
                </Col>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </>
    );
  }
}
export default Column;
