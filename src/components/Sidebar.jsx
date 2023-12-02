import React from "react";
import { Link, NavLink } from "react-router-dom";
import Categories from "./Categories/Categories";

    // const navLinkStyles = ({ isActive }) => {
    //   return (
    //     <>
        
    //     </>
    //   )
    // }


const Sidebar = () => {
  return (
    <div>
      <div className="border w-[13rem] rounded-[4px] bg-[#F9F1F6] h-[25rem] mt-[10px] text-sm">
        <div className="flex p-[5px] mt-[7px] text-[#4B444D]">
          <p className="text-xs ml-[1px]">Clothes</p>
        </div>

        <div className="flex text-[#4B444D] mt-2 p-[4px]">
          <Link to="/categories/dolce&gabbana" className="text-xs ml-[3px]">
            Dolce&Gabbana
          </Link>

          <p className="ml-[71px] text-xs">999+</p>
        </div>

        <div className="flex text-[#4B444D]  mt-2 p-[5px]">
          <NavLink  to="/categories/gucci" className="text-xs ml-[3px]">
            Gucci
          </NavLink>

          <p className="ml-[130px] text-xs">999+</p>
        </div>

        <div className="flex text-[#4B444D] mt-3">
          <NavLink  to="/categories/louisvuitton" className="ml-[7px] text-xs">
            Louis Vuitton
          </NavLink>

          <p className="ml-[88px] text-xs">999+</p>
        </div>

        <div className="flex text-[#4B444D] mt-[8.5px] p-[5px]">
          <Link to="/categories/primark"className="text-xs ml-[3px]">Primark</Link>

          <p className="ml-[120px] text-xs">999+</p>
        </div>

        <div className="flex text-[#4B444D] mt-[8px]">
          <Link to="/" className="ml-[8px] text-xs">
            Local Stores
          </Link>

          <p className="ml-[93px] text-xs">999+</p>
        </div>

        <div className="border border-black mt-[12px]"></div>

        <div className="flex text-[#4B444D] mt-2 ml-[4px]">
          <p className="text-xs ml-[3px]">Shoes and accessories</p>
        </div>

        <div className="flex text-[#4B444D] p-2 mt-2">
          <Link to="/categories/addidas" className="text-xs">
            Adidas
          </Link>

          <p className="ml-[125px] text-xs">999+</p>
        </div>

        <div className="flex text-[#4B444D] mt-2">
          <Link to="/categories/ego" className="ml-[7px] text-xs">
            Ego
          </Link>

          <p className="ml-[143px] text-xs">999+</p>
        </div>

        <div className="flex text-[#4B444D] mt-2 p-2">
          <Link to="/categories/jordan" className="text-xs">
            Jordan
          </Link>

          <p className="ml-[119px] text-xs">999+</p>
        </div>

        <div className="flex text-[#4B444D] mt-[1px] p-2">
          <Link to="/categories/nike" className="text-xs">
            Nike
          </Link>

          <p className="ml-[138px] text-xs">999+</p>
        </div>

        <div className="flex text-[#4B444D] mt-[6px]">
          <Link to="/categories/localstores" className="ml-[8px] text-xs">
            Local Stores
          </Link>

          <p className="ml-[93px] text-xs">999+</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
