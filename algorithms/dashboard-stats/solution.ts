type Task = {
  status: "pending" | "success" | "failed";
  priority: "high" | "medium" | "low";
  completed: boolean;
};

const tasks: Task[] = [
  {
    status: "pending",
    priority: "high",
    completed: false,
  },
  {
    status: "success",
    priority: "medium",
    completed: true,
  },
  {
    status: "failed",
    priority: "low",
    completed: false,
  },
  {
    status: "pending",
    priority: "medium",
    completed: false,
  },
  {
    status: "success",
    priority: "high",
    completed: true,
  },
  {
    status: "failed",
    priority: "high",
    completed: false,
  },
  {
    status: "pending",
    priority: "low",
    completed: false,
  },
  {
    status: "success",
    priority: "low",
    completed: true,
  },
  {
    status: "failed",
    priority: "medium",
    completed: false,
  },
  {
    status: "pending",
    priority: "high",
    completed: false,
  },
];

type TaskStats = {
  totalTasks: number;
  completedTasks: number;
  tasksByStatus: {
    pending: number;
    success: number;
    failed: number;
  };
  tasksByPriority: {
    high: number;
    medium: number;
    low: number;
  };
};

const tasksGrouped: TaskStats = tasks.reduce(
  (acc, current) => {
    acc.totalTasks++;

    if (current.completed) {
      acc.completedTasks++;
    }

    acc.tasksByStatus[current.status]++;

    acc.tasksByPriority[current.priority]++;

    return acc;
  },
  {
    totalTasks: 0,
    completedTasks: 0,
    tasksByStatus: {
      pending: 0,
      success: 0,
      failed: 0,
    },
    tasksByPriority: {
      high: 0,
      medium: 0,
      low: 0,
    },
  },
);

const completionPercentage: number =
  (tasksGrouped.completedTasks / tasksGrouped.totalTasks) * 100;

console.log(tasksGrouped);
console.log(completionPercentage);
