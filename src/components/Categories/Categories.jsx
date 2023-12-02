import React from 'react'
import Sidebar from '../Sidebar'
import { useParams } from 'react-router-dom';
import productDatas from '../../productDatas';
import { Link } from "react-router-dom";

function Categories() {
  const {brand} = useParams();
  return (
 
    <div className='flex'>
        <Sidebar />

    <div className='grid grid-cols-5'>
{productDatas.filter(product => product.category == brand).map(product => {
  return (
    <div className=''>
          <div className="border  bg-[#FFF7FC] w-[12rem] rounded-[4px] mt-[15px] ml-[1.2rem] h-[15rem]"> 
                <div className="border w-[7rem] ml-[38px] mt-[1px]">
                  <img
                    src={product.img}
                    alt="shirt"
                    className="h-[7rem] w-[9rem]"
                  />
                </div>
                <p className="text-[12px] ml-[8px] mt-[15px]">
                  {product.name}
                </p>

                <p className="ml-[70px] mt-[0.15rem] text-[12px]">
                  {" "}
                  {product.price}{" "}
                </p>

                <div className="flex mt-8">
                  <div>
                    <Link
                      to
                      className=" font-bold w-[86px] p-[7px] text-[11px] border ml-[7px] bg-white text-[#9500D7] rounded-[15px]"
                    >
                      View Details
                    </Link>
                  </div>

                  <div>
                    <button
                      onClick
                      className=" border font-bold w-[86px] p-[7px] text-[11px] ml-[11px] bg-[#9500D7] text-white rounded-[15px]"
                    >
                      Place Order
                    </button>
                  </div>
                </div>
              </div>
         
    </div>
  )
  })}
</div>
    </div>

  )
}

export default Categories;