import React from "react";
import Img1 from "../product/shirt.jpg";

const PlaceOrder = ({ pd, visible, onClose }) => {
  if (!visible) return null;

  const handleOnClose = (e) => {
    if (e.target.id === "container") onClose();
  };



  return (
    <>
    
    <div
      id="container"
      onClick={handleOnClose}
      className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-40 top-[1px] border"
    >
      <div className="bg-[#FFF7FC] p-2 rounded">
        <div className="bg-[#FFF7FC] border">
          <div className="flex justify-end mt-[22px]">
            <button onClick={onClose}>x</button>
          </div>

          <div className="flex bg-[#FFF7FC]">
            <div>
              <div className="border ml-[2.5rem] mt-[1.5rem]">
                <img src={Img1} alt="shirt" className="w-[20rem]" />
              </div>

              <div className="text-base ml-[10px] mt-[5px]">
                <p>Black plain button-down shirt</p>
                <p>#17,000</p>
              </div>
            </div>

            <div className="border-2 ml-[2.4rem]">
              <p className="ml-[15px] text-sm mt-[4rem]">
                Color : <span className="ml-[26px] font-bold">Black</span>{" "}
              </p>

              <div className="text-sm flex">
                <p className="ml-[1rem] mt-[25px]">Size : </p>
                <p className="border-solid border-2 border-black-500 w-[60px] flex items-center ml-[2.4rem] p-[4px] mt-[10px]">
                  M
                </p>
                <p className="border-solid border-2 w-[60px] flex items-center ml-[0.5rem] p-[4px] mt-[10px]">
                  L
                </p>
                <p className="border-solid border-2 border-black-500 w-[60px] flex items-center ml-[0.5rem] p-[4px] mt-[10px]">
                  XL
                </p>
              </div>

              <div className="text-sm flex">
                <p className="ml-[1rem] mt-[25px]">Quantity</p>
                <button className="border-solid border-2 border-black-500 w-[60px] flex items-center ml-[1.4rem] p-[4px] mt-[10px]">
                  -
                </button>
                <button className="border-solid border-2 border-black-500 w-[60px] flex items-center ml-[1.4rem] p-[4px] mt-[10px]">
                  1
                </button>
                <button className="border-solid border-2 border-black-500 w-[60px] flex items-center ml-[1.4rem] p-[4px] mt-[10px]">
                  +
                </button>
              </div>

              <div className="text-base">
                <p className="ml-[1rem] mt-[4rem]">
                  Call us for bulk purchases
                </p>
                <p className="ml-[1rem] mt-[4px] font-bold">
                  Click here to show contact details
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    </>
  );
};

export default PlaceOrder;
