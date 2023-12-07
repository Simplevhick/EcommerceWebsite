import React, { useState } from "react";
import productDatas from "../../productDatas";
import { useParams } from "react-router-dom";
import ProductFooter from "../productFooter/productFooter";


const ProductDetail = () => {
  // const [ newPage, setNewPage ] = useState(false)


  const { id } = useParams();

  const filteredProduct = productDatas.filter((product) => product.id == id);

  return (
    <div>
      {filteredProduct.map((product) => (
        <>
          {" "}
          <div className=" flex w-[78rem] ml-[14px]" key={product.id}>
            <div className="border mt-[10px] w-[37rem] ml-[10px] rounded-lg bg-[#FFF7FC]">
              <img src={product.img} alt="img" className="mt-[10px]" />
            </div>

            <div>
              <div className="border ml-[20px] mt-[10px] w-[38rem] rounded-lg bg-[#FFF7FC]">
                <p className="ml-[21px] text-sm mt-[40px]">
                  Color : <span className="ml-[15rem] text-sm font-bold">{product.color}</span>
                </p>
                <div className="flex">
                  <p className="text-sm mt-[25px] ml-[22px]">Size :</p>
                  <p className="border-2 w-[3rem] mt-[20px] p-1 text-sm ml-[15.4rem] text-[#1D1B1E]">M</p>
                  <p className="border-2 w-[3rem] ml-[10px] p-1 text-sm mt-[20px] text-[#1D1B1E]">L</p>
                  <p className="border-2 w-[3rem] ml-[10px] p-1 text-sm mt-[20px] text-[#1D1B1E]">XL</p>
                  <p className="border-2 w-[3rem] ml-[10px] p-1 text-sm mt-[20px] text-[#1D1B1E]">XXL</p>
                  <p className="border-2 w-[3rem] p-1 ml-[10px] text-sm mt-[20px] text-[#1D1B1E]">XXXL</p>
                </div>
                <div className="">
                  <div className="flex">
                      <p className="text-sm mt-[22px] ml-[22px]">Quantity :</p>
                      <button className="border w-[7rem] mt-[20px] p-1 text-sm ml-[13.7rem]">-</button>
                      <p className="border w-[3rem] mt-[20px] p-1 text-sm ml-[0.55rem]">1</p>
                      <button className="border w-[7rem] mt-[20px] p-1 text-sm ml-[0.55rem]">+</button>
                  </div>

                  <div className="ml-[20px] mt-[40px]">
                    <div className="text-[#1D1B1E]">{product.name}</div>
                    <div className="font-bold text-[#4B444D]">{product.price}</div>
                  </div>
                </div>
              </div>

              <div className="border ml-[20px] mt-[10px] w-[38rem] rounded-lg bg-[#FFF7FC]">
                  <div>
                    <p className="ml-[20px] mt-[10px] text-[2.3rem] text-[#4B444D]">Customer Details :</p>
                  </div>

                  <div className="mt-[10px]">
                     <label className="text-[1.3rem] ml-[18px]"> Fullname : *</label>
                      <p className="ml-[18px]">____________________________________________________________________</p>
                  </div>

                  <div className="">
                     <label className="text-[1.3rem] ml-[18px] text-[#4B444D]"> Email : *</label>
                      <p className="ml-[18px]">____________________________________________________________________</p>
                  </div>

                  <div className="">
                     <label className="text-[1.3rem] ml-[18px] text-[#4B444D]"> Phone Number : *</label>
                      <p className="ml-[18px]">____________________________________________________________________</p>
                  </div>

                  <div className="">
                     <label className="text-[1.3rem] ml-[18px] text-[#4B444D]"> Delivery address : *</label>
                      <p className="ml-[18px]">____________________________________________________________________</p>
                  </div>

                  <div>
                    <input type="radio" name="answer" className="ml-[26px] mt-[3px]"/>
                    <label className="ml-[5px]">Payment on delivery</label>
                 
                    <input type="radio" name="answer" className="ml-[80px] mt-[3px]"/>
                    <label className="ml-[5px] bg-[#FFFFFF]">Other Payment Options</label>
                  </div>

                      <button className="border mt-[15px] w-[35rem] ml-[20px] rounded-[2rem] bg-[#9500D7]">Order Now</button>
                <div>
                                  
                </div>
              </div>
            </div>
          </div>

            <ProductFooter />
        </>
      ))}
    </div>
  );
};

export default ProductDetail;
