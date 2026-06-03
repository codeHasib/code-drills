type TaskQuery = {
  page?: number;
  limit?: number;
  status?: "pending" | "completed";
  priority?: "high" | "medium" | "low";
  search?: string;
};

type Task = {
  id: string;
  title: string;
  desc: string;
  status: "pending" | "completed";
  priority: "high" | "medium" | "low";
};

type TaskResponse<T> = {
  success: boolean;
  data: T;
  error?: string;
};
