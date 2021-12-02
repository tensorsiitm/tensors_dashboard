import React from "react";
import "./button.css";
const Button = (props) => {
  const buttonStyles = {
    borderRadius: "5px",
    backgroundColor: props.backgroundColor || "white",
    color: props.color || "black",
    display: "flex",
    minWidth: "75px",
    justifyContent: "center",
    alignItems: "center",
    margin: "5px",
    padding: 5,
    fontSize: props.fontsize || "20px",
  };

  return (
    <div
      onClick={props.onClick}
      id={props.id}
      style={buttonStyles}
      className="Button"
    >
      {props.children}
    </div>
  );
};

export default Button;
