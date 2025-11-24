import React from "react";
import { Link } from "react-router-dom";

const products = [
  { id: 1, name: "Organic Fertilizer", price: 20 },
  { id: 2, name: "Green Seeds", price: 10 },
];

export default function Home() {
  return (
    <div>
      <h1>Agro-Global Products</h1>
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            <Link to={`/product/${p.id}`}>{p.name}</Link> - ${p.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
