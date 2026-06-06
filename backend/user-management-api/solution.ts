type User = {
  id: string;
  name: string;
  email: string;
  role: "admin" | "user" | "moderator";
  createdAt: string;
};

type GetUserQuery = {
  page: number;
  limit: number;
  search: string;
  role: "admin" | "user" | "moderator";
  sortBy: string;
};

type GetUserResponse<T> = {
  success: boolean;
  error?: string;
  data: T;
};