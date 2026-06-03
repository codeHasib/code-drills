type Product = {
  id: string;
  name: string;
  brand: "Nike" | "Adidas" | "Puma";
  price: number;
};

const products: Product[] = [
  {
    id: "p1",
    name: "Air Max 90",
    brand: "Nike",
    price: 120,
  },
  {
    id: "p2",
    name: "Ultraboost 22",
    brand: "Adidas",
    price: 180,
  },
  {
    id: "p3",
    name: "RS-X",
    brand: "Puma",
    price: 110,
  },
  {
    id: "p4",
    name: "Air Force 1",
    brand: "Nike",
    price: 100,
  },
  {
    id: "p5",
    name: "NMD R1",
    brand: "Adidas",
    price: 140,
  },
  {
    id: "p6",
    name: "Suede Classic",
    brand: "Puma",
    price: 90,
  },
  {
    id: "p7",
    name: "Pegasus 40",
    brand: "Nike",
    price: 130,
  },
];

const groupedByCategory = products.reduce(
  (acc, product) => {
    const brand = product.brand;

    if (!acc[brand]) {
      acc[brand] = [];
    }

    acc[brand].push(product);

    return acc;
  },
  {} as Record<string, typeof products>,
);

console.log(groupedByCategory);