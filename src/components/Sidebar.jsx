import React from 'react'
import { Link } from "react-router-dom"
import DolceGabbana from './dolceGabbana/DolceGabbana'

const Sidebar = () => {
  return (
    <div>
         <div className="border w-[13rem] rounded-[4px] bg-[#F9F1F6] h-[25rem] mt-[10px] text-sm">
          <div className="flex p-[5px] mt-[7px] text-[#4B444D]">
            <p className="text-xs ml-[1px]">Clothes</p>
          </div>

          <div className="flex text-[#4B444D] mt-2 p-[4px]">
            <Link to="/DolceGabbana" className="text-xs ml-[3px]">Dolce&Gabbana</Link>

            <p className="ml-[71px] text-xs">999+</p>
          </div>

          <div className="flex text-[#4B444D]  mt-2 p-[5px]">
            <Link className="text-xs ml-[3px]">Gucci</Link>

            <p className="ml-[130px] text-xs">999+</p>
          </div>

          <div className="flex text-[#4B444D] mt-3">
            <Link className="ml-[7px] text-xs">Louis Vuiton</Link>

            <p className="ml-[95px] text-xs">999+</p>
          </div>

          <div className="flex text-[#4B444D] mt-[8.5px] p-[5px]">
            <button className="text-xs ml-[3px]">Primark</button>

            <p className="ml-[120px] text-xs">999+</p>
          </div>

          <div className="flex text-[#4B444D] mt-[8px]">
            <Link className="ml-[8px] text-xs">Local Stores</Link>

            <p className="ml-[93px] text-xs">999+</p>
          </div>

          <div className="border border-black mt-[12px]"></div>

          <div className="flex text-[#4B444D] mt-2 ml-[4px]">
            <p className="text-xs ml-[3px]">Shoes and accessories</p>
          </div>

          <div className="flex text-[#4B444D] p-2 mt-2">
            <Link className="text-xs">Adidas</Link>

            <p className="ml-[125px] text-xs">999+</p>
          </div>

          <div className="flex text-[#4B444D] mt-2">
            <Link className="ml-[7px] text-xs">Ego</Link>

            <p className="ml-[143px] text-xs">999+</p>
          </div>

          <div className="flex text-[#4B444D] mt-2 p-2">
            <Link className="text-xs">Jordans</Link>

            <p className="ml-[119px] text-xs">999+</p>
          </div>

          <div className="flex text-[#4B444D] mt-[1px] p-2">
            <Link className="text-xs">Nike</Link>

            <p className="ml-[138px] text-xs">999+</p>
          </div>

          <div className="flex text-[#4B444D] mt-[6px]">
            <Link className="ml-[8px] text-xs">Local Stores</Link>

            <p className="ml-[93px] text-xs">999+</p>
          </div>
        </div>
    </div>
  )
}

export default Sidebar