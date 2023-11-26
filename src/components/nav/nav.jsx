import { useState } from "react";
import { LiaEllipsisVSolid } from "react-icons/lia"
import { PiCaretDownBold } from "react-icons/pi";
import { PiCaretUpBold } from "react-icons/pi";


function Nav() {
    const [isValid, setIsValid] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const [isActive, setIsActive] = useState(false)
    const [isClicked, setIsClicked] = useState(false)
    const [isPressed, setIsPressed] = useState(false)
    const [isShowing, setIsShowing] = useState(false)
    const [isShown, setIsShown] = useState(false)
    const [isAlerted, setIsAlerted] = useState(false)



  return (
    <nav>
        <div className="flex border bg-[#EADFEA] h-8 relative z-10">
            <div className="ml-[78px] text-[#4B444D] mt-[6px]">
                <button> All Catergories </button>
            </div>

            <div className='ml-[10px] mt-[5px] font-bold text-2xl'> 
                <LiaEllipsisVSolid/> 
            </div>

            <div className="flex ">
                <div>
                    
                    <div className="ml-[40px] text-[#4B444D] mt-[6px]">
                        <p> Home </p>
                    </div>

                </div>

                        
                <div className="flex relative z-20">
                    
                    <div className="ml-[55px] mt-[6px] text-[#4e4d4e]">
                        <p> Bags </p>
                    </div>

                    <div>
                        <button 
                            onClick={() => setIsOpen((prev) => !prev)}
                            className=""
                            > 
                            {!isOpen ? (
                            <PiCaretDownBold className="mt-[9px] ml-[8px]" />
                            ) : (
                             <PiCaretUpBold className="mt-[9px] ml-[8px]" />
                            )}
                            </button>

                            {isOpen && (
                            <div className="py-1 bg-[#eee] h-[125px] rounded-lg w-[5.5rem]">
                                <ul>
                                    <li className="ml-1.5">All Bags </li>
                                    <li className="ml-1.5">Dolce</li>
                                    <li className="ml-1.5"> &Gabbana </li>
                                    <li className="ml-1.5">Gucci</li>
                                    <li className="ml-1.5">Ego</li>
                                </ul>
                            </div>
                        )}    
                    </div>           
                </div>

                
                <div className="flex relative z-20">
                    
                    <div className="ml-[35px] mt-[6px] text-[#4B444D]">
                        <p> Dresses </p>
                    </div>

                    <div>
                        <button 
                            onClick={() => setIsValid((prev) => !prev)}
                            className=""
                        > 
                        {!isValid ? (
                            <PiCaretDownBold className="mt-[9px] ml-[8px]" />
                        ) : (
                            <PiCaretUpBold className="mt-[9px] ml-[8px]" />
                        )}
                        </button>

                            {isValid && (
                        <div className="py-1 bg-[#eee] h-[149px] rounded-lg w-[7rem]">
                            <ul>
                                <li className="ml-1.5">All Dresses</li>
                                <li className="ml-1.5">Gucci</li>
                                <li className="ml-1.5">Primark</li>
                                <li className="ml-1.5">Louis Vuitton</li>
                                <li className="ml-1.5">Dolce & Gabbana </li>
                            </ul>
                        </div>
                        )}
                    </div>           
                </div>
                
                
                <div className="flex relative z-20">
                    
                    <div className="ml-[35px] mt-[6px] text-[#4B444D]">
                        <p> Hats </p>
                    </div>

                    <div>
                        <button 
                            onClick={() => setIsActive((prev) => !prev)}
                            className=""
                        > 
                        {!isActive ? (
                            <PiCaretDownBold className="mt-[9px] ml-[8px]" />
                        ) : (
                            <PiCaretUpBold className="mt-[9px] ml-[8px]" />
                        )}
                        </button>

                            {isActive && (
                        <div className="py-0.2 bg-[#eee] h-[145px] rounded-lg w-[5.1rem]">
                            <ul>
                                <li className="ml-1.5">All Hats </li>
                                <li className="ml-1.5">Ego</li>
                                <li className="ml-1.5">Nike</li>
                                <li className="ml-1.5">Zara </li>
                                <li className="ml-1.5">Local Stores </li>
                            </ul>
                        </div>
                        )}
                    </div>           
                </div>

                <div className="flex relative z-20">
                    
                    <div className="ml-[35px] mt-[6px] text-[#4B444D]">
                        <p> Shades </p>
                    </div>

                    <div>
                        <button 
                            onClick={() => setIsClicked((prev) => !prev)}
                            className=""
                        > 
                        {!isClicked ? (
                            <PiCaretDownBold className="mt-[9px] ml-[8px]" />
                        ) : (
                            <PiCaretUpBold className="mt-[9px] ml-[8px]" />
                        )}
                        </button>
                            {isClicked && (
                        <div className="py-0.2 bg-[#eee] h-[145px] rounded-lg w-[8.4rem]">
                            <ul>
                                <li className="ml-1">All Shades </li>
                                <li className="ml-1">Ego</li>
                                <li className="ml-1">Dolce & Gabbana </li>
                                <li className="ml-1">Nike</li>
                                <li className="ml-1">Zara</li>
                                <li className="ml-1">Local Stores</li>
                            </ul>
                        </div>
                        )}
                    </div>            
                </div>

                <div className="flex relative z-20">
                    
                        <div className="ml-[35px] mt-[6px] text-[#4B444D]">
                            <p> Shirts </p>
                        </div>

                    <div>
                        <button 
                            onClick={() => setIsPressed((prev) => !prev)}
                            className=""
                        > 
                        {!isPressed ? (
                            <PiCaretDownBold className="mt-[9px] ml-[8px]" />
                        ) : (
                            <PiCaretUpBold className="mt-[9px] ml-[8px]" />
                        )}
                        </button>
                            {isPressed && (
                        <div className="py-0.2 bg-[#eee] h-[170px] rounded-lg w-[5.3rem]">
                            <ul>
                                <li className="ml-1">All Shirts </li>
                                <li className="ml-1">Dolce & Gabbana </li>
                                <li className="ml-1">Gucci</li>
                                <li className="ml-1">Primark </li>
                                <li className="ml-1"> Louis Vuition </li>
                            </ul>
                        </div>
                        )}    
                    </div>           
                </div>

                <div className="flex relative z-20">
                    
                    <div className="ml-[35px] mt-[6px] text-[#4B444D]">
                        <p> Shoes </p>
                    </div>

                    <div className="">
                        <button 
                            onClick={() => setIsShowing((prev) => !prev)}
                            className=""
                        > 
                        {!isShowing ? (
                            <PiCaretDownBold className="mt-[9px] ml-[8px]" />
                        ) : (
                            <PiCaretUpBold className="mt-[9px] ml-[8px]" />
                        )}
                        </button>
                            {isShowing && (
                        <div className="py-0.2 bg-[#eee] h-[146px] rounded-lg w-[5.3rem]">
                            <ul>
                                <li className="ml-1">All Shoes </li>
                                <li className="ml-1">Adidas </li>
                                <li className="ml-1">Jordan</li>
                                <li className="ml-1">Nike </li>
                                <li className="ml-1"> Local Stores </li>
                            </ul>
                        </div>
                        )}    
                    </div>           
                </div>

                <div className="flex relative z-20">
                    
                    <div className="ml-[35px] mt-[6px] text-[#4B444D]">
                        <p> Skirts </p>
                    </div>

                    <div>
                        <button 
                            onClick={() => setIsShown((prev) => !prev)}
                            className=""
                        > 
                        {!isShown ? (
                            <PiCaretDownBold className="mt-[9px] ml-[8px]" />
                        ) : (
                            <PiCaretUpBold className="mt-[9px] ml-[8px]" />
                        )}
                        </button>
                            {isShown && (
                        <div className="py-0.2 bg-[#eee] h-[100px] rounded-lg w-[8.5rem]">
                            <ul>
                                <li className="ml-1">All Shirts </li>
                                <li className="ml-1">Dolce & Gabbana </li>
                                <li className="ml-1">Gucci</li>
                                <li className="ml-1"> Louis Vuition </li>
                            </ul>
                        </div>
                        )}   
                    </div>            
                </div>

                <div className="flex relative z-20">
                    
                    <div className="ml-[1.7rem] mt-[6px] text-[#4B444D]">
                        <p> Trouser </p>
                    </div>

                    <div>
                        <button 
                            onClick={() => setIsAlerted((prev) => !prev)}
                            className=""
                        > 
                        {!isAlerted ? (
                            <PiCaretDownBold className="mt-[9px] ml-[8px]" />
                        ) : (
                            <PiCaretUpBold className="mt-[9px] ml-[8px]" />
                        )}
                        </button>
                            {isAlerted && (
                        <div className="py-0.2 bg-[#eee] h-[125px] rounded-lg w-[8.5rem]">
                            <ul>
                                <li className="ml-1">All Trousers </li>
                                <li className="ml-1">Dolce & Gabbana </li>
                                <li className="ml-1">Gucci</li>
                                <li className="ml-1">Primark </li>
                                <li className="ml-1"> Louis Vuition </li>
                            </ul>
                        </div>
                        )}
                    </div>            
                </div>

            </div>
        </div>
    </nav>
  )
}

export default Nav;