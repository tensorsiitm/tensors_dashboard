export const addTask = (task) => {
  return {
    type: "ADD_TASK",
    payload: task,
  };
};
export const reoder = (result) => {
  return {
    type: "REODER_TASK",
    payload: result,
  };
};
export const addStage = (result) => {
  return {
    type: "ADD_STAGE",
    payload: result,
  };
};
export const deleteTask = (cards) => {
  return {
    type: "DELETE_CARDS",
    payload: cards,
  };
};
export const deleteBoard = (card) => {
  return {
    type: "DELETE_BOARD",
    payload: card,
  };
};
