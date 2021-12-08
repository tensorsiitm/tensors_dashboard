const initialData = {
  tasks: {
    // "task-1": {
    //   id: "task-1",
    //   task_name: "React_DND",
    //   assign: "THARUN.V",
    //   deadline: "29th Nov",
    //   description: "Just Do It",
    //   priority: "HIGH",
    //   columnId: "column-1",
    // },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "To do",
      taskIds: [], //taskIds:["task-1"]
    },
    "column-2": {
      id: "column-2",
      title: "In progress",
      taskIds: [],
    },
    "column-3": {
      id: "column-3",
      title: "Done",
      taskIds: [],
    },
  },
  columnOrder: ["column-1", "column-2", "column-3"],
};

export default initialData;
