// import { PiCaretRightBold } from "react-icons/pi";
import { Link } from "react-router-dom";
import productDatas from "../../productDatas";
import Sidebar from "../Sidebar";
import { useState } from "react";
import PlaceOrder from "../product/placeOrder";

const Body = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOnClose = () => setIsModalOpen(false);

  return (
    <section>
      <div
        id="setShow"
        // style={isModalOpen ? { overflowY: "hidden" } : { overflowY: "auto" }}
        className="md:flex w-[100%]"
      >
        <Sidebar />

        {isModalOpen && (
          <PlaceOrder onClose={handleOnClose} visible={isModalOpen} />
        )}
  
        <div className="grid grid-cols-2 gap-x-[6rem] md:grid-cols-4 md:gap-x-[4rem] place-content-center">
           {productDatas.slice(0, 15).map((productData) => {
            return (
              <div className="border bg-[#FFF7FC] w-[12rem] rounded-[4px] mt-[20px] ml-[1.2rem] h-[15rem]">
                <div className="border w-[7rem] ml-[38px] mt-[1px]">
                  <img
                    src={productData.img}
                    alt="shirt"
                    className="h-[7rem] w-[9rem]"
                  />
                </div>
                <p className="text-[12px] ml-[8px] mt-[15px]">
                  {productData.name}
                </p>

                <p className="ml-[70px] mt-[0.15rem] text-[12px]">
                  {" "}
                  {productData.price}{" "}
                </p>

                <div className="flex mt-8">
                  <div>
                    <Link
                      to={`/product/${productData.id}`}
                      className=" font-bold w-[86px] p-[7px] text-[11px] border ml-[7px] bg-white text-[#9500D7] rounded-[15px]"
                    >
                      View Details
                    </Link>
                  </div>

                  <div>
                    <button
                      onClick={() => setIsModalOpen(true)}
                      className=" border font-bold w-[86px] p-[7px] text-[11px] ml-[11px] bg-[#9500D7] text-white rounded-[15px]"
                    >
                      Place Order
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="">
        <div className="flex border w-[21.1rem] ml-[30rem] mt-[40px] border-dotted">
          <button className="ml-[2px] border text-left w-[4rem] text-[12px] bg-[#7D747E] border-t-0 border-r-0 border-b-0">
            1
          </button>
          <Link to="/page">
            <button className="w-[4rem] text-left border text-[12px] border-t-0 border-r-0 border-b-0">
              2
            </button>
          </Link>
          <button className="w-[4rem] text-[12px] border-l-2 border text-left border-t-0 border-r-0 border-b-0">
            3
          </button>
          <button className="w-[4rem] text-[12px] text-left border-l-2 border border-t-0 border-r-0 border-b-0">
            4
          </button>
          <button className="border border-t-0 border-r-0 border-l-2 border-b-0 w-[4rem] text-[12px] text-left">
            5
          </button>
          {/* <p>
            {" "}
            <PiCaretRightBold className="border h-6 w-3 font-bold" />{" "}
          </p> */}
        </div>
      </div>

    </section>
  );
};

export default Body;
