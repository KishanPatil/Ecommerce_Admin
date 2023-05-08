import React, { useState } from "react";
import axios from "axios";

const AddToCart = ({ customerId }) => {
  const [productId, setProductId] = useState("");
  const [count, setCount] = useState(1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`/cart/cart/${customerId}`, {
        productId,
        count,
      });
      console.log(response.data); // successful response message
    } catch (error) {
      console.error(error.response.data); // error response message
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Product Id:
        <input
          type="text"
          value={productId}
          onChange={(e) => setProductId(e.target.value)}
        />
      </label>
      <br />
      <label>
        Count:
        <input
          type="number"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Add to Cart</button>
    </form>
  );
};

export default AddToCart;
