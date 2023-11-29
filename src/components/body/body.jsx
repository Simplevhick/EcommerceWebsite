// import { PiCaretRightBold } from "react-icons/pi";
import { Link } from "react-router-dom";
import productDatas from "../../productDatas";
import Sidebar from "../Sidebar";
import ProductDetail from "../product/ProductDetail"
import { useState } from "react";

const Body = () => {

  const [isModalOpen, setIsModalOpen] = useState(false)
  // const [showSideDrawer, setShowSideDrawer] = useState(false)

  const handleOnClose = () => setIsModalOpen(false)


  return (
    <section>
      <div id="setShow" style={isModalOpen ? {overflowY: 'hidden'}: {overflowY: 'auto'}} className="flex relative z-10">
       <Sidebar />

         {isModalOpen &&  <ProductDetail onClose={handleOnClose} visible={isModalOpen}/>}  


        <div className="grid grid-cols-5">
        {productDatas.slice(0, 15).map((productData) => {
            return (
          
            <div className="border bg-[#FFF7FC] w-[12rem] rounded-[4px] mt-[20px] ml-[1.2rem] h-[15rem]">
              <div className="border w-[7rem] ml-[38px] mt-[1px]">
                <img src={productData.img} alt="shirt" className="h-[7rem] w-[9rem]" />
              </div>
              <p className="text-[12px] ml-[8px] mt-[15px]">
                {productData.name}
              </p>

              <p className="ml-[70px] mt-[0.15rem] text-[12px]"> {productData.price} </p>

              <div className="flex mt-8">
                <div>
                  <button className=" font-bold w-[86px] p-[7px] text-[11px] border ml-[7px] bg-white text-[#9500D7] rounded-[15px]">
                    View Details
                  </button>
                </div>

                <div>
                  <button onClick={() => setIsModalOpen(true)} className=" border font-bold w-[86px] p-[7px] text-[11px] ml-[11px] bg-[#9500D7] text-white rounded-[15px]">
                    Place Order
                  </button>
                </div>
              </div>
            </div>
       
        )   
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

      <div className="border flex mt-12 bg-[#000000]">
        <div className="text-sm ml-6">
          <h5 className="text-base text-[#7B767A]">Footer Items List</h5>
          <p className="text-[#7B767A]">Footer items list</p>
          <p className="text-[#7B767A]">Footer items list</p>
          <p className="text-[#7B767A]">Footer items list</p>
          <p className="text-[#7B767A]">Footer items list</p>
          <p className="text-[#7B767A]">Footer items list</p>
          <p className="text-[#7B767A]">Footer items list</p>
        </div>

        <div className="text-sm ml-40">
          <h5 className="text-base text-[#7B767A]">Footer Items List</h5>
          <p className="text-[#7B767A]">Footer items list</p>
          <p className="text-[#7B767A]">Footer items list</p>
          <p className="text-[#7B767A]">Footer items list</p>
          <p className="text-[#7B767A]">Footer items list</p>
          <p className="text-[#7B767A]">Footer items list</p>
          <p className="text-[#7B767A]">Footer items list</p>
        </div>

        <div className="text-sm ml-40">
          <h5 className="text-base text-[#7B767A]">Footer Items List</h5>
          <p className="text-[#7B767A]">Footer items list</p>
          <p className="text-[#7B767A]">Footer items list</p>
          <p className="text-[#7B767A]">Footer items list</p>
          <p className="text-[#7B767A]">Footer items list</p>
          <p className="text-[#7B767A]">Footer items list</p>
          <p className="text-[#7B767A]">Footer items list</p>
        </div>

        <div className="text-sm ml-40">
          <h5 className="text-base text-[#7B767A]">Footer Items List</h5>
          <p className="text-[#7B767A]">Footer items list</p>
          <p className="text-[#7B767A]">Footer items list</p>
          <p className="text-[#7B767A]">Footer items list</p>
          <p className="text-[#7B767A]">Footer items list</p>
          <p className="text-[#7B767A]">Footer items list</p>
          <p className="text-[#7B767A]">Footer items list</p>
        </div>

        <div className="text-sm ml-40">
          <h5 className="text-base text-[#7B767A]">Footer Items List</h5>
          <p className="text-[#7B767A]">Footer items list</p>
          <p className="text-[#7B767A]">Footer items list</p>
          <p className="text-[#7B767A]">Footer items list</p>
          <p className="text-[#7B767A]">Footer items list</p>
          <p className="text-[#7B767A]">Footer items list</p>
          <p className="text-[#7B767A]">Footer items list</p>
        </div>
      </div>
    </section>
  );
};

export default Body;
