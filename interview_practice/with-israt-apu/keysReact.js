import React from "react";

const keysReact = () => {
  const arr = [
    { name: "Hasib", age: 26, city: "Chittagong" },
    { name: "Israt", age: 26, city: "Dhaka" },
    { name: "Mizan", age: 26, city: "Dhaka" },
    { name: "Tonmoy", age: 26, city: "Gopalgonj" },
  ];
  return (
    <div>
      {arr.map((item, ind) => (
        <div key={ind}>
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  );
};

export default keysReact;
