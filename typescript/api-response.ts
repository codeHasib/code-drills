type ApiResponse<T> = {
  success: boolean;
  error?: string;
  data: T;
};

type Role = "admin" | "user" | "guest";

type User = {
  id: string;
  name: string;
  email: string;
  age: number;
  role: Role;
};

type Status = "success" | "pending" | "rejected";

type Product = {
  id: string;
  name: string;
  price: number;
  inStock: boolean;
  status: Status;
};

const users: User[] = [
  {
    id: "1522aa",
    name: "Hasib",
    email: "mohammadhasib22@gmail.com",
    age: 54,
    role: "admin",
  },
];

const products: Product[] = [
  {
    id: "2aksldjf",
    name: "PS5",
    price: 450,
    inStock: false,
    status: "pending",
  },
];

async function fetchUsers(): Promise<ApiResponse<User[]>> {
  return {
    success: true,
    data: users,
  };
}

async function getUsers() {
  const res = await fetchUsers();
  if (!res.success) {
    console.log(res.error);
    return res.error;
  } else {
    console.log(res.data);
    return res.data;
  }
}

getUsers();

async function fetchProducts(): Promise<ApiResponse<Product[]>> {
  return {
    success: true,
    data: products,
  };
}

async function getProducts() {
  const res = await fetchProducts();
  if (!res.success) {
    console.log(res.error);
    return res.error;
  } else {
    console.log(res.data);
    return res.error;
  }
}

getProducts()

