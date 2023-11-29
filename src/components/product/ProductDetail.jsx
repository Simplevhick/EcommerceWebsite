import React from "react";
import Header from "../header/header";
import productDatas from "../../productDatas";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();

  const filteredProduct = productDatas.filter((product) => product.id == id);

  return (
    <div>
      {filteredProduct.map((product) => (
        <>
          {" "}
          <div key={product.id}>
            <img src={product.img} alt="" />
            <div>{product.name}</div>
          </div>
          <div></div>
        </>
      ))}
    </div>
  );
};

export default ProductDetail;
