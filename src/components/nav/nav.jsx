import { useState } from "react";
import { LiaEllipsisVSolid } from "react-icons/lia"
import { PiCaretDownBold } from "react-icons/pi";
import { PiCaretUpBold } from "react-icons/pi";
import { Link } from "react-router-dom";


function Nav({onClose}) {
    const [isValid, setIsValid] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const [isActive, setIsActive] = useState(false)
    const [isClicked, setIsClicked] = useState(false)
    const [isPressed, setIsPressed] = useState(false)
    const [isShowing, setIsShowing] = useState(false)
    const [isShown, setIsShown] = useState(false)
    const [isAlerted, setIsAlerted] = useState(false)
    const [isThere, setIsThere] = useState(false)
   
    const handleOnClose = (e) => {
        if(e.target.id == "container"){
            return (
                <>  
                  <div id="container" className="absolute group-focus:block top-full min-w-full w-max bg-white shadow-md mt-1 rounded">
                                 <ul className="text-left boreder rounded">
                                    <li className="ml-1.5">All Bags </li>
                                    <Link to="/categories/dolce&gabbana"><li className="ml-1.5 w-[2.5px] hover:bg-[#ffd7ef]">Dolce</li></Link> 
                                    <Link to="/categories/dolce&gabbana"><li className="ml-1.5 w-[2.5px] hover:bg-[#ffd7ef]">&Gabbana</li></Link> 
                                    <Link to="/categories/gucci"><li className="ml-1.5">Gucci</li> </Link>
                                    <Link to="/categories/ego"> <li className="ml-1.5">Ego</li> </Link>
                                </ul>
                    </div>
                </>
            )
        }
        else {
            return null;
        }
      };

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
                        <Link to="/"> <p> Home </p> </Link>
                    </div>

                </div>
                    
                        
                <div className="flex relative z-20">
                    <button className="relative flex justify-center items-center bg-white  shadow text-gray-600 rounded focus:ring ring-blue-200 group">  
                            <p className="px-4">Dropdown</p>
                            <span className="border-l p-2 hover:bg-green-100">
                            <PiCaretDownBold />
                            </span> 
                            {/* hidden is the text missing for it to go well in the div below*/}
                            {/* <div id="container" className="absolute group-focus:block top-full min-w-full w-max bg-white shadow-md mt-1 rounded">
                                 <ul className="text-left boreder rounded">
                                    <li className="ml-1.5">All Bags </li>
                                    <Link to="/categories/dolce&gabbana"><li className="ml-1.5 w-[2.5px] hover:bg-[#ffd7ef]">Dolce</li></Link> 
                                    <Link to="/categories/dolce&gabbana"><li className="ml-1.5 w-[2.5px] hover:bg-[#ffd7ef]">&Gabbana</li></Link> 
                                    <Link to="/categories/gucci"><li className="ml-1.5">Gucci</li> </Link>
                                    <Link to="/categories/ego"> <li className="ml-1.5">Ego</li> </Link>
                                </ul>
                            </div> */}
                    </button>
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
                             <Link to="/categories/gucci"><li className="ml-1.5">Gucci</li> </Link>
                             <Link to="/categories/primark"><li className="ml-1.5">Primark</li> </Link>
                             <Link to="/categories/louisvuitton"><li className="ml-1.5">LouisVuitton</li></Link>
                             <Link to="/categories/dolce&gabbana"><li className="ml-1.5">Dolce </li> </Link>
                             <Link to="/categories/dolce&gabbana"><li className="ml-1.5">&Gabbana </li> </Link>
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
                        <div className="py-0.2 bg-[#eee] h-[123px] rounded-lg w-[5.1rem]">
                            <ul>
                                <li className="ml-1.5">All Hats </li>
                            <Link to="/categories/ego"> <li className="ml-1.5">Ego</li> </Link>
                            <Link to="/categories/nike"> <li className="ml-1.5">Nike</li> </Link>
                            <Link to="/categories/localstores"> <li className="ml-1.5">Local Stores </li> </Link>
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
                        <div className="py-0.2 bg-[#eee] h-[120px] rounded-lg w-[7.8rem]">
                            <ul>
                                <li className="ml-1">All Shades </li>
                            <Link to="/categories/ego"> <li className="ml-1">Ego</li> </Link>
                            <Link to="/categories/dolce&gabbana"><li className="ml-1">Dolce&Gabbana </li> </Link>
                            <Link to="/categories/nike"> <li className="ml-1">Nike</li> </Link>
                            <Link to="/categories/localstores"> <li className="ml-1">Local Stores</li> </Link>
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
                                <Link to="/categories/dolce&gabbana"> <li className="ml-1">Dolce & Gabbana </li> </Link>
                                <Link to="/categories/gucci"><li className="ml-1">Gucci</li> </Link>
                                <Link to="/categories/primark"><li className="ml-1">Primark </li> </Link>
                                <Link to="/categories/louisvuitton"><li className="ml-1"> Louis Vuition </li> </Link>
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
                                <Link to="/categories/addidas">   <li className="ml-1">Adidas </li> </Link>
                                <Link to="/categories/jordan"><li className="ml-1">Jordan</li> </Link>
                                <Link to="/categories/nike"><li className="ml-1">Nike </li> </Link>
                                <Link to="/categories/localstores"><li className="ml-1"> Local Stores </li> </Link>
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
                                <Link to="/categories/dolce&gabbana"> <li className="ml-1">Dolce & Gabbana </li> </Link>
                                <Link to="/categories/gucci"> <li className="ml-1">Gucci</li> </Link>
                                <Link to="/categories/louisvuitton"> <li className="ml-1"> Louis Vuition </li> </Link>
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
                        <div className="py-0.2 bg-[#eee] h-[125px] rounded-lg w-[8rem]">
                            <ul>
                                <li className="ml-1">All Trousers </li>
                                <Link to="/categories/dolce&gabbana"><li className="ml-1">Dolce&Gabbana </li> </Link>
                                <Link to="/categories/gucci"><li className="ml-1">Gucci</li> </Link>
                                <Link to="/categories/primark"><li className="ml-1">Primark </li> </Link>
                                <Link to="/categories/louisvuitton"><li className="ml-1"> LouisVuition </li> </Link>
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


        // <div>
        //                         <button 
        //                             onClick={() => setIsOpen((prev) => !prev)}
        //                             className=""
        //                             > 
        //                             {!isOpen ? (
        //                             <PiCaretDownBold className="mt-[9px] ml-[8px]" />
        //                             ) : (
        //                              <PiCaretUpBold className="mt-[9px] ml-[8px]" />
        //                             )}
        //                             </button>

        //                             {isOpen && (
        //                             <div className="py-1 bg-[#eee] h-[125px] rounded-lg w-[5.3rem]">
        //                                 <ul>
        //                                     <li className="ml-1.5">All Bags </li>
        //                                   <Link to="/categories/dolce&gabbana"><li className="ml-1.5 w-[2.5px] hover:bg-[#ffd7ef]">Dolce</li></Link> 
        //                                   <Link to="/categories/dolce&gabbana"><li className="ml-1.5 w-[2.5px] hover:bg-[#ffd7ef]">&Gabbana</li></Link> 
        //                                   <Link to="/categories/gucci"><li className="ml-1.5">Gucci</li> </Link>
        //                                   <Link to="/categories/ego"> <li className="ml-1.5">Ego</li> </Link>
        //                                 </ul>
        //                             </div>
        //                         )}    
        //                     </div>     








    //     <div className="ml-[55px] mt-[6px] text-[#4e4d4e]">
    //     <p> Bags </p>
    // </div>