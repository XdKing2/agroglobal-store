import React from "react";
import { useParams } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Homemade Nutritional Feed Mix",
    price: 15,
    description: "Cost-effective feed mix made from local grains and natural supplements to boost stock health.",
  },
  {
    id: 2,
    name: "Natural Stock Medicine",
    price: 25,
    description: "Homemade herbal remedies to improve livestock immunity and reduce veterinary expenses.",
  },
  {
    id: 3,
    name: "Organic Mineral Supplement",
    price: 10,
    description: "A blend of natural minerals essential for animal growth and productivity.",
  },
];

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return <h2>Product not found</h2>;

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <button>Add to Cart</button>
    </div>
  );
}
