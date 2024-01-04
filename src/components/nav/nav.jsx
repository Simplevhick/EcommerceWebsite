import { useState } from "react";
import { LiaEllipsisVSolid } from "react-icons/lia"
import { PiCaretDownBold } from "react-icons/pi";
import { PiCaretUpBold } from "react-icons/pi";
import { Link } from "react-router-dom";


function Nav({onClose}) {
    const [isDropDownOpen, setIsDropDownOpen] = useState(false);
    const [isDropDownView, setIsDropDownView] = useState(false);
    const [isDropDownShow, setIsDropDownShow] = useState(false);
    const [isDropDownClear, setIsDropDownClear] = useState(false);
    const [isDropDownPerfect, setIsDropDownPerfect] = useState(false);
    const [isDropDownGood, setIsDropDownGood] = useState(false);
    const [isDropDownReady, setIsDropDownReady] = useState(false);
    const [isDropDownGo, setIsDropDownGo] = useState(false);



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

     <div className="bg-[#ccc]">
        <ul className="hidden md:flex md:space-x-7 md:justify-center md:justify-between md:p-3">
            <li>All Categories</li>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>

        </ul>

     </div>

        {/* <div className="flex border bg-[#EADFEA] h-8 relative z-10">
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
                    
                <div>
                    
                    <div className="flex mt-1.5 ml-[53px] text-[rgb(75,68,77)]" onMouseOver={() => setIsDropDownOpen(true)}>
                        <p>Bags  </p>
                        <span className="mt-[5px] ml-[10px] "> {isDropDownOpen ? <PiCaretUpBold /> : <PiCaretDownBold />} </span>
                    </div>
                    
          

                </div>
               
              <div className={`${isDropDownOpen ? "block py-1 bg-[#eee] h-[149px] rounded-lg w-[5.3rem] mt-[30px]" : 
              "hidden py-1 bg-[#eee] h-[149px] rounded-lg w-[7rem]"}`} onMouseLeave={() => setIsDropDownOpen(false)}>
                        <ul className="text-left boreder rounded">
                            <li className="ml-1.5">All Bags </li>
                            <Link to="/categories/dolce&gabbana"><li className="ml-1.5 w-[2.5px]">Dolce & Gabbana</li></Link> 
                            <Link to="/categories/gucci"><li className="ml-1.5">Gucci</li> </Link>
                            <Link to="/categories/ego"> <li className="ml-1.5">Ego</li> </Link>
                        </ul>
                    </div>

                    <div>
                    
                    <div className="flex mt-1.5 ml-[33px] text-[rgb(75,68,77)]" onMouseOver={() => setIsDropDownView(true)}>
                        <p>Dresses  </p>
                        <span className="mt-[5px] ml-[10px] "> {isDropDownView ? <PiCaretUpBold /> : <PiCaretDownBold />} </span>
                    </div>
                    
          

                </div>
               
              <div className={`${isDropDownView ? "block py-1 bg-[#eee] h-[149px] rounded-lg w-[7rem] mt-[30px]" : 
              "hidden py-1 bg-[#eee] h-[149px] rounded-lg w-[7rem]"}`} onMouseLeave={() => setIsDropDownView(false)}>
                        <ul className="text-left boreder rounded">
                            <li className="ml-1.5">All Dresses </li>
                              <Link to="/categories/gucci"><li className="ml-1.5">Gucci</li> </Link>
                              <Link to="/categories/primark"><li className="ml-1.5">Primark</li> </Link>
                              <Link to="/categories/louisvuitton"><li className="ml-1.5">LouisVuitton</li></Link>
                              <Link to="/categories/dolce&gabbana"><li className="ml-1.5">Dolce </li> </Link>
                              <Link to="/categories/dolce&gabbana"><li className="ml-1.5">&Gabbana </li> </Link>
                        </ul>
                    </div>


                    <div>
                    
                    <div className="flex mt-1.5 ml-[33px] text-[rgb(75,68,77)]" onMouseOver={() => setIsDropDownShow(true)}>
                        <p>Hats  </p>
                        <span className="mt-[5px] ml-[10px] "> {isDropDownShow ? <PiCaretUpBold /> : <PiCaretDownBold />} </span>
                    </div>
                    
          

                </div>
               
              <div className={`${isDropDownShow ? "block py-1 bg-[#eee] h-[102px] rounded-lg w-[6.4rem] mt-[30px]" : 
              "hidden py-1 bg-[#eee] h-[149px] rounded-lg w-[7rem]"}`} onMouseLeave={() => setIsDropDownShow(false)}>
                        <ul className="text-left boreder rounded">
                            <li className="ml-1.5">All Hats </li>
                            <Link to="/categories/ego"> <li className="ml-1.5">Ego</li> </Link>
                            <Link to="/categories/nike"> <li className="ml-1.5">Nike</li> </Link>
                            <Link to="/categories/localstores"> <li className="ml-1.5">Local Stores </li> </Link>
                        </ul>
                    </div>


                    <div>
                    
                    <div className="flex mt-1.5 ml-[33px] text-[rgb(75,68,77)]" onMouseOver={() => setIsDropDownClear(true)}>
                        <p> Shades </p>
                        <span className="mt-[5px] ml-[10px] "> {isDropDownClear ? <PiCaretUpBold /> : <PiCaretDownBold />} </span>
                    </div>
                    
          

                </div>
               
                 <div className={`${isDropDownClear ? "block py-1 bg-[#eee] h-[148px] rounded-lg w-[6.4rem] mt-[30px]" : 
                    "hidden py-1 bg-[#eee] h-[149px] rounded-lg w-[7rem]"}`} onMouseLeave={() => setIsDropDownClear(false)}>
                        <ul className="text-left boreder rounded">
                            <li className="ml-1.5">All Shades </li>
                            <Link to="/categories/ego"> <li className="ml-1">Ego</li> </Link>
                            <Link to="/categories/dolce&gabbana"><li className="ml-1">Dolce & Gabbana </li> </Link>
                            <Link to="/categories/nike"> <li className="ml-1">Nike</li> </Link>
                            <Link to="/categories/localstores"> <li className="ml-1">Local Stores</li> </Link>
                        </ul>
                    </div>
                

                    <div>
                    
                    <div className="flex mt-1.5 ml-[33px] text-[rgb(75,68,77)]" onMouseOver={() => setIsDropDownPerfect(true)}>
                        <p> Shirts </p>
                        <span className="mt-[5px] ml-[10px] "> {isDropDownPerfect ? <PiCaretUpBold /> : <PiCaretDownBold />} </span>
                    </div>
                    
          

                </div>
               
                 <div className={`${isDropDownPerfect ? "block py-1 bg-[#eee] h-[148px] rounded-lg w-[6.4rem] mt-[30px]" : 
                    "hidden py-1 bg-[#eee] h-[149px] rounded-lg w-[7rem]"}`} onMouseLeave={() => setIsDropDownPerfect(false)}>
                        <ul className="text-left boreder rounded">
                            <li className="ml-1.5">All Shirts </li>
                            <Link to="/categories/dolce&gabbana"> <li className="ml-1">Dolce & Gabbana </li> </Link>
                                 <Link to="/categories/gucci"><li className="ml-1">Gucci</li> </Link>
                                 <Link to="/categories/primark"><li className="ml-1">Primark </li> </Link>
                                 <Link to="/categories/louisvuitton"><li className="ml-1"> Louis Vuition </li> </Link>
                        </ul>
                    </div>


                    <div>
                    
                    <div className="flex mt-1.5 ml-[33px] text-[rgb(75,68,77)]" onMouseOver={() => setIsDropDownGood(true)}>
                        <p> Shoes </p>
                        <span className="mt-[5px] ml-[10px] "> {isDropDownGood ? <PiCaretUpBold /> : <PiCaretDownBold />} </span>
                    </div>
                    
          

                </div>
               
                 <div className={`${isDropDownGood ? "block py-1 bg-[#eee] h-[125px] rounded-lg w-[6.4rem] mt-[30px]" : 
                    "hidden py-1 bg-[#eee] h-[149px] rounded-lg w-[7rem]"}`} onMouseLeave={() => setIsDropDownGood(false)}>
                        <ul className="text-left boreder rounded">
                            <li className="ml-1.5"> All Shoes </li>
                                <Link to="/categories/addidas">   <li className="ml-1">Adidas </li> </Link>
                                <Link to="/categories/jordan"><li className="ml-1">Jordan</li> </Link>
                                <Link to="/categories/nike"><li className="ml-1">Nike </li> </Link>
                                <Link to="/categories/localstores"><li className="ml-1"> Local Stores </li> </Link>
                        </ul>
                    </div>
                       

                    <div>
                    
                    <div className="flex mt-1.5 ml-[33px] text-[rgb(75,68,77)]" onMouseOver={() => setIsDropDownReady(true)}>
                        <p> Skirts </p>
                        <span className="mt-[5px] ml-[10px] "> {isDropDownReady ? <PiCaretUpBold /> : <PiCaretDownBold />} </span>
                    </div>
                    
          

                </div>
               
                 <div className={`${isDropDownReady ? "block py-1 bg-[#eee] h-[125px] rounded-lg w-[6.4rem] mt-[30px]" : 
                    "hidden py-1 bg-[#eee] h-[149px] rounded-lg w-[7rem]"}`} onMouseLeave={() => setIsDropDownReady(false)}>
                        <ul className="text-left boreder rounded">
                            <li className="ml-1.5"> All Skirts </li>
                                 <Link to="/categories/dolce&gabbana"> <li className="ml-1">Dolce & Gabbana </li> </Link>
                                 <Link to="/categories/gucci"> <li className="ml-1">Gucci</li> </Link>
                                 <Link to="/categories/louisvuitton"> <li className="ml-1"> Louis Vuition </li> </Link>
                        </ul>
                    </div>


                    <div>
                    
                    <div className="flex mt-1.5 ml-[33px] text-[rgb(75,68,77)]" onMouseOver={() => setIsDropDownGo(true)}>
                        <p> Trouser </p>
                        <span className="mt-[5px] ml-[10px] "> {isDropDownGo ? <PiCaretUpBold /> : <PiCaretDownBold />} </span>
                    </div>
                    
          

                </div>
               
                 <div className={`${isDropDownGo ? "block py-1 bg-[#eee] h-[148px] rounded-lg w-[6.4rem] mt-[30px]" : 
                    "hidden py-1 bg-[#eee] h-[149px] rounded-lg w-[7rem]"}`} onMouseLeave={() => setIsDropDownGo(false)}>
                        <ul className="text-left boreder rounded">
                            <li className="ml-1.5"> All Trouser </li>
                            <Link to="/categories/dolce&gabbana"><li className="ml-1">Dolce & Gabbana </li> </Link>
                                 <Link to="/categories/gucci"><li className="ml-1">Gucci</li> </Link>
                                 <Link to="/categories/primark"><li className="ml-1">Primark </li> </Link>
                                 <Link to="/categories/louisvuitton"><li className="ml-1"> LouisVuition </li> </Link>
                        </ul>
                    </div>

                



            </div>
        </div> */}
    </nav>
  )
}

export default Nav;
