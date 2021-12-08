import React from "react";
import { Component } from "react";
import {
  addTask,
  reoder,
  addStage,
  deleteTask,
  deleteBoard,
} from "../../../redux/ActionCreators";
import Column from "../board/Column";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderPlus, faPlus } from "@fortawesome/free-solid-svg-icons";
import "./scrum_board.css";
import { DragDropContext } from "react-beautiful-dnd";
import {
  Form,
  Label,
  Modal,
  ModalBody,
  ModalHeader,
  Col,
  Input,
  FormGroup,
  Button,
  FormText,
} from "reactstrap";
const mapStateToProps = (state) => ({
  initialData: state,
});
const mapDispatchToProps = (dispatch) => ({
  addTask: (card) => dispatch(addTask(card)),
  reoder: (result) => dispatch(reoder(result)),
  addStage: (result) => dispatch(addStage(result)),
  deleteTask: (result) => dispatch(deleteTask(result)),
  deleteBoard: (result) => dispatch(deleteBoard(result)),
});
class SrcumBoard extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false, stage: "" };
  }
  handleClick = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  handleDelete = (result) => {
    let delTask = Object.values(this.props.initialData.tasks).filter(
      (task) => task.id == result
    )[0];
    delete this.props.initialData.tasks[delTask.id];
    let targetColumn = this.props.initialData.columns[delTask.columnId];
    targetColumn.taskIds = targetColumn.taskIds.filter(
      (taskId) => taskId != delTask.id
    );
    let newState = {
      ...this.props.initialData,
      columns: {
        ...this.props.initialData.columns,
        [targetColumn.id]: {
          ...targetColumn,
        },
      },
    };
    this.props.deleteTask(newState);
  };
  handleDeleteBoard = (id) => {
    delete this.props.initialData.columns[id];
    let newcolumnOrder = this.props.initialData.columnOrder.filter(
      (column) => column != id
    );
    let newState = {
      ...this.props.initialData,
      columnOrder: newcolumnOrder,
    };
    this.props.deleteBoard(newState);
  };
  handleChange = (e) => this.setState({ stage: e.target.value });
  handleSubmit = (e) => {
    e.preventDefault();
    let result = {};
    result.title = this.state.stage;
    result.id =
      "column" + String(this.props.initialData.columnOrder.length + 1);
    result.taskIds = [];
    this.props.addStage(result);
    this.setState({ isOpen: false, stage: "" });
  };
  onDrag = (result) => {
    const { destination, source, draggableId } = result;
    if (
      !destination ||
      (destination.index == source.index &&
        destination.droppableId == source.droppableId)
    ) {
      return;
    }
    let column = this.props.initialData.columns[source.droppableId];
    let columnEnd = this.props.initialData.columns[destination.droppableId];
    if (column == columnEnd) {
      let newTaskId = column.taskIds;
      newTaskId.splice(source.index, 1);
      newTaskId.splice(destination.index, 0, draggableId);
      let newColumn = {
        ...column,
        taskIds: newTaskId,
      };
      let newState = {
        ...this.props.initialData,
        columns: {
          ...this.props.initialData.columns,
          [newColumn.id]: newColumn,
        },
      };
      this.props.reoder(newState);
      return;
    }
    let newTaskId1 = column.taskIds;
    let newTaskId2 = columnEnd.taskIds;
    newTaskId1.splice(source.index, 1);
    newTaskId2.splice(destination.index, 0, draggableId);
    let newColumn1 = {
      ...column,
      taskIds: newTaskId1,
    };
    let newColumn2 = {
      ...columnEnd,
      taskIds: newTaskId2,
    };
    let newTask = {
      ...this.props.initialData.tasks[draggableId],
      columnId: newColumn2.id,
    };
    let newStatE = {
      ...this.props.initialData,
      columns: {
        ...this.props.initialData.columns,
        [newColumn1.id]: newColumn1,
        [newColumn2.id]: newColumn2,
      },
      tasks: {
        ...this.props.initialData.tasks,
        [newTask.id]: newTask,
      },
    };
    this.props.reoder(newStatE);
  };
  render() {
    return (
      <div className="div0">
        <div className="bg-success p-3">
          <div className="container">
            <div className="row">
              <div className="col-10">
                <h1 className="text-center text-white">Srcum Board</h1>
              </div>
              <div className="col-2 ">
                <button
                  className="btn btn-info"
                  style={{ borderRadius: "50%" }}
                >
                  <FontAwesomeIcon icon={faPlus} onClick={this.handleClick} />
                </button>
              </div>
            </div>
          </div>
        </div>
        <DragDropContext onDragEnd={this.onDrag}>
          <div className="div1">
            {this.props.initialData.columnOrder.map((columnId, index) => {
              const column = this.props.initialData.columns[columnId];
              const tasks = column.taskIds.map(
                (taskId) => this.props.initialData.tasks[taskId]
              );
              return (
                <Column
                  index={index}
                  column={column}
                  tasks={tasks}
                  addTask={(task) => this.props.addTask(task)}
                  handleDelete={this.handleDelete}
                  handleDeleteBoard={this.handleDeleteBoard}
                />
              );
            })}
          </div>
        </DragDropContext>
        <Modal isOpen={this.state.isOpen}>
          <ModalHeader
            className="bg-primary text-white"
            toggle={this.handleClick}
          >
            Add a Stage !!!
          </ModalHeader>
          <ModalBody>
            <Form onSubmit={this.handleSubmit}>
              <FormGroup row>
                <Label htmlFor="stage" xs={3}>
                  Stage Title
                </Label>
                <Col xs={6}>
                  <Input
                    type="text"
                    value={this.state.stage}
                    onChange={this.handleChange}
                    invalid={!this.state.stage}
                    valid={this.state.stage}
                  />
                </Col>
                <Col xs={3}>
                  <FormText>{!this.state.stage ? "Required" : ""}</FormText>
                </Col>{" "}
                <Col xs={3}>
                  <Button
                    disabled={!this.state.stage}
                    className="mt-1 bg-danger"
                  >
                    Add!!
                  </Button>
                </Col>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SrcumBoard);
