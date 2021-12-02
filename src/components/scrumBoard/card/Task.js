import React from "react";
import "./Task.css";
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  CardText,
  Button,
} from "reactstrap";
import { Draggable } from "react-beautiful-dnd";
const Task = (props) => {
  return (
    <Draggable draggableId={props.task.id} index={props.index}>
      {(provided) => (
        <>
          <div
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            <Card key={props.task.id}>
              <CardHeader>{props.task.task_name}</CardHeader>
              <CardBody>
                <CardTitle>
                  <span>{props.task.priority}</span>
                </CardTitle>
                <CardText>{props.task.assign}</CardText>
              </CardBody>
              <Button onClick={() => props.handleDelete(props.task.id)}>
                Delete
              </Button>
            </Card>
          </div>
        </>
      )}
    </Draggable>
  );
};
export default Task;
