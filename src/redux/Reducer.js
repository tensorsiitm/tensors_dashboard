import initialData from "../components/scrumBoard/inital_data";
export const Reducer = (state = initialData, action) => {
  switch (action.type) {
    case "ADD_TASK": {
      console.log(state.columns[action.payload.columnId].taskIds);
      return {
        ...state,
        columns: {
          ...state.columns,
          [action.payload.columnId]: {
            ...state.columns[action.payload.columnId],
            taskIds: [
              ...state.columns[action.payload.columnId].taskIds,
              action.payload.id,
            ],
          },
        },
        tasks: { ...state.tasks, [action.payload.id]: { ...action.payload } },
      };
    }
    case "ADD_STAGE":
      return {
        ...state,
        columns: {
          ...state.columns,
          [action.payload.id]: {
            ...action.payload,
          },
        },
        columnOrder: [...state.columnOrder, action.payload.id],
      };
    case "REODER_TASK":
      return action.payload;
    case "DELETE_CARDS": {
      return action.payload;
    }
    case "DELETE_BOARD": {
      return action.payload;
    }
    default:
      return state;
  }
};
