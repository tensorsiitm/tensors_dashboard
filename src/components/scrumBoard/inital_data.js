const initialData = {
  tasks: {
    "task-1": {
      id: "task-1",
      task_name: "React_DND",
      assign: "THARUN.V",
      deadline: "29th Nov",
      public: false,
      description: "Just Do It",
      priority: "High",
      columnId: "column-1",
    },
    "task-2": {
      id: "task-2",
      task_name: "Udemy",
      assign: "THARUN.V",
      deadline: "29th Nov",
      public: false,
      description: "Just Do It",
      priority: "High",
      columnId: "column-1",
    },
    "task-3": {
      id: "task-3",
      task_name: "Coursera",
      assign: "THARUN.V",
      deadline: "29th Nov",
      public: false,
      description: "Just Do It",
      priority: "High",
      columnId: "column-1",
    },
    "task-4": {
      id: "task-4",
      task_name: "CODE",
      assign: "THARUN.V",
      deadline: "29th Nov",
      public: false,
      description: "Just Do It",
      priority: "High",
      columnId: "column-1",
    },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "To do",
      taskIds: ["task-1", "task-2", "task-3", "task-4"],
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
  // Facilitate reordering of the columns
  columnOrder: ["column-1", "column-2", "column-3"],
};

export default initialData;
