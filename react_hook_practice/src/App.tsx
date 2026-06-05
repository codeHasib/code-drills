import { useEffect, useMemo, useRef, useState } from "react";
import "./App.css";

const products = [
  {
    id: 1,
    name: "Nike Air Max 270",
    brand: "Nike",
    category: "Shoes",
    price: 120,
    stock: 15,
  },
  {
    id: 2,
    name: "Adidas Ultraboost 22",
    brand: "Adidas",
    category: "Shoes",
    price: 180,
    stock: 10,
  },
  {
    id: 3,
    name: "Puma Running T-Shirt",
    brand: "Puma",
    category: "Clothing",
    price: 25,
    stock: 50,
  },
  {
    id: 4,
    name: "Apple iPhone 14",
    brand: "Apple",
    category: "Electronics",
    price: 999,
    stock: 8,
  },
  {
    id: 5,
    name: "Samsung Galaxy S23",
    brand: "Samsung",
    category: "Electronics",
    price: 899,
    stock: 12,
  },
  {
    id: 6,
    name: "Levi's 501 Jeans",
    brand: "Levi's",
    category: "Clothing",
    price: 60,
    stock: 30,
  },
  {
    id: 7,
    name: "Sony WH-1000XM5 Headphones",
    brand: "Sony",
    category: "Electronics",
    price: 350,
    stock: 6,
  },
  {
    id: 8,
    name: "Dell XPS 13 Laptop",
    brand: "Dell",
    category: "Electronics",
    price: 1200,
    stock: 5,
  },
  {
    id: 9,
    name: "HP Pavilion Laptop",
    brand: "HP",
    category: "Electronics",
    price: 800,
    stock: 7,
  },
  {
    id: 10,
    name: "Adidas Hoodie",
    brand: "Adidas",
    category: "Clothing",
    price: 70,
    stock: 20,
  },
  {
    id: 11,
    name: "Nike Sports Shorts",
    brand: "Nike",
    category: "Clothing",
    price: 35,
    stock: 40,
  },
  {
    id: 12,
    name: "Puma Sneakers",
    brand: "Puma",
    category: "Shoes",
    price: 95,
    stock: 18,
  },
  {
    id: 13,
    name: "Apple AirPods Pro",
    brand: "Apple",
    category: "Electronics",
    price: 250,
    stock: 14,
  },
  {
    id: 14,
    name: 'Samsung Smart TV 55"',
    brand: "Samsung",
    category: "Electronics",
    price: 700,
    stock: 9,
  },
  {
    id: 15,
    name: "Levi's Denim Jacket",
    brand: "Levi's",
    category: "Clothing",
    price: 85,
    stock: 16,
  },
];

function App() {
  const inputRef = useRef<HTMLInputElement>(null);
  const renderCount = useRef<number>(0);
  const [count, setCount] = useState<number>(0);
  const [search, setSearch] = useState<string>("");

  const filteredProducts = useMemo(() => {
    return products.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase()),
    );
  }, [search]);

  const totalPrice = useMemo(() => {
    return filteredProducts.reduce(
      (total, product) => total + product.price,
      0,
    );
  }, [filteredProducts]);

  useEffect(() => {
    renderCount.current++;
  }, [count]);
  return (
    <>
      <h1>Practice useRef</h1>
      <div className="flex flex-col justify-center items-center gap-4">
        <input
          ref={inputRef}
          className="border-2 border-blue-500 bg-red-50 focus:border-blue-700 focus:bg-red-100"
          type="text"
        />
        <button
          onClick={() => inputRef.current?.focus()}
          className="border-2 border-blue-500 bg-red-50 focus:border-blue-700 focus:bg-red-100"
        >
          Click to focus
        </button>
      </div>
      <p>Count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
      <p>Render Count: {renderCount.current}</p>

      <h1 className="text-3xl text-center">Practice useMemo</h1>
      <p>
        The useMemo hook is used to optimize performance by memoizing the result
        of a computation.
      </p>
      <div>
        <input
          className="border-2 border-blue-500 bg-red-50 focus:border-blue-700 focus:bg-red-100"
          type="search"
          name="search"
          id="search"
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div key={product.id} className="border p-4 rounded-md shadow-md">
                <h2 className="text-xl font-bold">{product.name}</h2>
                <p className="text-gray-600">Brand: {product.brand}</p>
                <p className="text-gray-600">Category: {product.category}</p>
                <p className="text-gray-600">Price: ${product.price}</p>
                <p className="text-gray-600">Stock: {product.stock}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-600">No products found.</p>
          )}
        </div>

        <h4 className="text-xl font-bold text-white">
          Total Price: ${totalPrice}
        </h4>
      </div>
    </>
  );
}

export default App;
