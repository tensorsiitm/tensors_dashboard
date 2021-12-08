import React from "react";
import { Component } from "react";
import Task from "../card/Task";
import "./Column.css";
import { Droppable } from "react-beautiful-dnd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderPlus } from "@fortawesome/free-solid-svg-icons";
import Modal_Form from "../modal_form";
import { Button } from "reactstrap";
class Column extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }
  handleClick = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  handleState = (newTask) => {
    newTask.columnId = this.props.column.id;
    newTask.id = "task-" + String(this.props.tasks.length + 1);
    this.props.addTask(newTask);
  };
  render() {
    return (
      <>
        <div className="container div2">
          <h1 className="text-center bg-info text-white p-3">
            {this.props.column.title}
            <button className="btn btn-info">
              <FontAwesomeIcon icon={faFolderPlus} onClick={this.handleClick} />
            </button>
            <Button
              onClick={() => this.props.handleDeleteBoard(this.props.column.id)}
            >
              Delete
            </Button>
          </h1>

          <Droppable droppableId={this.props.column.id} type="task">
            {(provided) => (
              <div
                style={{ flexGrow: 1, minHeight: "100px" }}
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
      </>
    );
  }
}
export default Column;
