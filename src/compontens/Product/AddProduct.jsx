import React, { useState } from "react";
import { useProducts } from "../Context/ProductContextProvider";

const AddProduct = () => {
  const [product, setProduct] = useState({
    title: "",
    pic1: "",
    pic2: "",
    pic3: "",
    category: "",
  });

  const { addProduct } = useProducts();

  return <div>AddProduct</div>;
};

export default AddProduct;
