import logo from "../../assets/logo.png";
import { BsPerson } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { useState } from "react";
import { PiCaretDownBold } from "react-icons/pi";
import { PiCaretUpBold } from "react-icons/pi";
import { FaQuestion } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isValid, setIsValid] = useState(false);

  return (
    <header>
      <div className="md:flex w-[80rem] h-[95px] bg-[#FFF7FC] relative z-30">
        <div>
          <Link to="/">
            <img
              src={logo}
              alt="logo"
              className="w-[160px] h-[90px] mt-2 ml-10 "
            />
          </Link>
        </div>

        <div className="space-x-6">
          <form action="" className="w-full max-w-md">
            <div className="relative flex items-center text-gray-400 focus-within:text-gray-600">
              <BsSearch className="w-[18px] h-5 absolute ml-[100px] mt-7 pointer-events-none" />
              <input
                type="text"
                name="search"
                autoComplete="off"
                placeholder="Search Products"
                className="pr-3 pl-10  py-2 font-bold placeholder-grey-500 text-black rounded-3xl border-none ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2 ml-[90px] mt-6 bg-[#F1E5E7]"
              />
            </div>
          </form>
        </div>

        <div className="flex">
          <div>
            <BsPerson className="ml-[80px] mt-[32px] font-bold text-lg" />
          </div>

          <div>
            <p className="ml-[28px] mt-[28px] font-bold text-lg">Account</p>
          </div>

          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="ml-4 h-8 "
          >
            {!isOpen ? (
              <PiCaretDownBold className="h-8 mt-[27.5px]" />
            ) : (
              <PiCaretUpBold className="h-8 mt-[27.5px]" />
            )}
          </button>
          {isOpen && (
            <div className=" bg-[#eee] h-[109px] rounded-lg w-[105px] ml-[5px]">
              <ul>
                <li className="px-2 hover:bg-indigo-500 ">My Account</li>
                <li className="px-2 hover:bg-indigo-500">Saved Items</li>
                <li className="px-2 hover:bg-indigo-500">Others</li>
              </ul>
              <button className="w-[90px] ml-2 bg-[#9500D7] p-1 text-white rounded-full">
                Sign Up
              </button>
            </div>
          )}
        </div>

        <div className="flex">
          <div>
            <FaQuestion className="ml-[4rem] mt-[30px] font-bold text-lg" />
          </div>

          <div>
            <p className="ml-[10px] mt-[28px] font-bold text-lg">Help</p>
          </div>

          <button
            onClick={() => setIsValid((prev) => !prev)}
            className="ml-4 h-8"
          >
            {!isValid ? (
              <PiCaretDownBold className="h-8 mt-[27.5px]" />
            ) : (
              <PiCaretUpBold className="h-8 mt-[27.5px]" />
            )}
          </button>
          {isValid && (
            <div className=" py-1 bg-[#eee] h-[100px] rounded-lg w-[8.6rem]">
              <ul>
                <li className="px-1.5 py-0.1 hover:bg-indigo-500 ">
                  Help Center
                </li>
                <li className="px-1.5 hover:bg-indigo-500">Place an order</li>
                <li className="px-1.5 hover:bg-indigo-500">Track an order</li>
                <li className="px-1.5 hover:bg-indigo-500">Cancel an order</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
