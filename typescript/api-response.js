"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const users = [
    {
        id: "1522aa",
        name: "Hasib",
        email: "mohammadhasib22@gmail.com",
        age: 54,
        role: "admin",
    },
];
const products = [
    {
        id: "2aksldjf",
        name: "PS5",
        price: 450,
        inStock: false,
        status: "pending",
    },
];
async function fetchUsers() {
    return {
        success: true,
        data: users,
    };
}
async function getUsers() {
    const res = await fetchUsers();
    if (!res.success) {
        return res.error;
    }
    else {
        return res.data;
    }
}
//# sourceMappingURL=api-response.js.map