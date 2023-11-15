import img1 from "../../assets/shirt.jpg";
import { PiCaretRightBold } from "react-icons/pi";
import img2 from "../../assets/crop.jpg"
import img3 from "../../assets/cami.jpg"
import img4 from "../../assets/askirt.jpg"
import img5 from "../../assets/Tote.png"
import img6 from "../../assets/ash.jpg"
import img7 from "../../assets/shar.jpg"
import img8 from "../../assets/multi.jpg"
import img9 from "../../assets/kitty.jpg"
import img10 from "../../assets/gold.JPG"
import img11 from "../../assets/romania.png"
import img12 from "../../assets/polo.png"
import img13 from "../../assets/inner.png"
import img14 from "../../assets/hat.JPG"
import img15 from "../../assets/baggy.JPG"
import { Link } from "react-router-dom";

const Body = () => {
  return (
    <section>

        <div className="flex relative z-10">
            
            <div className="border w-[13rem] rounded-[4px] bg-[#F9F1F6] h-[25rem] mt-[10px] text-sm">
                <div className="flex p-[5px] mt-[7px] text-[#4B444D]">
                    <p className="text-xs ml-[1px]">Clothes</p> 
                </div>
                
                <div className="flex text-[#4B444D] mt-2 p-[4px]">
                    <button className="text-xs ml-[3px]">Dolce&Gabbana</button> 

                    <p className="ml-[71px] text-xs">999+</p>
                </div>
                
                <div className="flex text-[#4B444D]  mt-2 p-[5px]">
                    <button className="text-xs ml-[3px]">Gucci</button> 

                    <p className="ml-[130px] text-xs">999+</p>
                </div>
                
                <div className="flex text-[#4B444D] mt-3">
                    <button className="ml-[7px] text-xs">Louis Vuiton</button> 

                    <p className="ml-[95px] text-xs">999+</p>
                </div>
                
                <div className="flex text-[#4B444D] mt-[8.5px] p-[5px]">
                    <button className="text-xs ml-[3px]">Primark</button> 

                    <p className="ml-[120px] text-xs">999+</p>
                </div>
                
                <div className="flex text-[#4B444D] mt-[8px]">
                    <button className="ml-[8px] text-xs">Local Stores</button>

                    <p className="ml-[93px] text-xs">999+</p>
                </div>
                
                <div className="border border-black mt-[12px]">

                </div>
                
                <div className="flex text-[#4B444D] mt-2 ml-[4px]">
                    <p className="text-xs ml-[3px]">Shoes and accessories</p> 
                </div>
                
                <div className="flex text-[#4B444D] p-2 mt-2">
                    <button className="text-xs">Adidas</button> 

                    <p className="ml-[125px] text-xs">999+</p>
                </div>
                
                <div className="flex text-[#4B444D] mt-2">
                    <button className="ml-[7px] text-xs">Ego</button>

                    <p className="ml-[143px] text-xs">999+</p> 
                </div>
                
                <div className="flex text-[#4B444D] mt-2 p-2">
                    <button className="text-xs">Jordans</button> 

                    <p className="ml-[119px] text-xs">999+</p>
                </div>
                
                <div className="flex text-[#4B444D] mt-[1px] p-2">
                    <button className="text-xs">Nike</button> 

                    <p className="ml-[138px] text-xs">999+</p>
                </div>
                
                <div className="flex text-[#4B444D] mt-[6px]">
                    <button className="ml-[8px] text-xs">Local Stores</button> 

                    <p className="ml-[93px] text-xs">999+</p>
                </div>
           </div>

                <div className="grid grid-cols-5">

                    <div className="border bg-[#FFF7FC] w-[12rem] rounded-[4px] mt-[20px] ml-[1.6rem] h-[15rem]">

                        <div className="border w-[7rem] ml-[38px] mt-[1px]">
                            <img src={img1} alt="shirt" className="h-[7rem] w-[9rem]"/>
                        </div>
                        <p className="text-[12px] ml-[8px] mt-[10px]"> Black Plain button-down shirt </p>

                        <p className="ml-[70px] mt-[0.15rem] text-[12px]"> #17,500 </p>

                        <div className="flex">
                            <div>
                                <button className="mt-[2.5rem] font-bold w-[86px] p-[5px] text-[11px] border ml-[7px] bg-white text-[#9500D7] rounded-[15px]">View Details</button>
                            </div>

                            <div>
                                <button className="mt-[2.5rem] border font-bold w-[86px] p-[5px] text-[11px] ml-[5px] bg-[#9500D7] text-white rounded-[15px]">Place Order</button>
                            </div>
                        </div>
                    </div>

                    <div className="border bg-[#FFF7FC] w-[12rem] rounded-[4px] mt-[20px] ml-[1.2rem] h-[15rem]">

                        <div className="border w-[7rem] ml-[38px] mt-[1px]">
                            <img src={img2} alt="shirt" className="h-[7rem] w-[9rem]"/>
                        </div>
                        <p className="text-[12px] ml-[19px] mt-[10px]"> Black Plain Crop-top shirt </p>

                        <p className="ml-[70px] mt-[0.15rem] text-[12px]"> #17,500 </p>

                        <div className="flex">
                            <div>
                                <button className="mt-[2.5rem] font-bold w-[86px] p-[5px] text-[11px] border ml-[7px] bg-white text-[#9500D7] rounded-[15px]">View Details</button>
                            </div>

                            <div>
                                <button className="mt-[2.5rem] border font-bold w-[86px] p-[5px] text-[11px] ml-[5px] bg-[#9500D7] text-white rounded-[15px]">Place Order</button>
                            </div>
                        </div>
                    </div>

                    <div className="border bg-[#FFF7FC] w-[12rem] rounded-[4px] mt-[20px] ml-[0.8rem] h-[15rem]">

                        <div className="border w-[7rem] ml-[38px] mt-[1px]">
                            <img src={img3} alt="shirt" className="h-[7rem] w-[9rem]"/>
                        </div>
                        <p className="text-[12px] ml-[20px] mt-[10px]"> Black Plain inner-camisol </p>

                        <p className="ml-[70px] mt-[0.15rem] text-[12px]"> #17,500 </p>

                        <div className="flex">
                            <div>
                                <button className="mt-[2.5rem] font-bold w-[86px] p-[5px] text-[11px] border ml-[7px] bg-white text-[#9500D7] rounded-[15px]">View Details</button>
                            </div>

                            <div>
                                <button className="mt-[2.5rem] border font-bold w-[86px] p-[5px] text-[11px] ml-[5px] bg-[#9500D7] text-white rounded-[15px]">Place Order</button>
                            </div>
                        </div>
                    </div>
                    
                    <div className="border bg-[#FFF7FC] w-[12rem] rounded-[4px] mt-[20px] ml-[0.4rem] h-[15rem]">

                        <div className="border w-[7rem] ml-[38px] mt-[1px]">
                            <img src={img4} alt="shirt" className="h-[7rem] w-[9rem]"/>
                        </div>
                        <p className="text-[12px] ml-[43px] mt-[10px]"> Best skirt for kids </p>

                        <p className="ml-[70px] mt-[0.15rem] text-[12px]"> #17,500 </p>

                        <div className="flex">
                            <div>
                                <button className="mt-[2.5rem] font-bold w-[86px] p-[5px] text-[11px] border ml-[7px] bg-white text-[#9500D7] rounded-[15px]">View Details</button>
                            </div>

                            <div>
                                <button className="mt-[2.5rem] border font-bold w-[86px] p-[5px] text-[11px] ml-[5px] bg-[#9500D7] text-white rounded-[15px]">Place Order</button>
                            </div>
                        </div>
                    </div>

                    <div className="border bg-[#FFF7FC] w-[12rem] rounded-[4px] mt-[20px] h-[15rem]">

                        <div className="border w-[9rem] ml-[25px] mt-[1px]">
                            <img src={img5} alt="shirt" className="h-[7rem] w-[9rem]"/>
                        </div> 
                        <p className="text-[12px] ml-[40px] mt-[10px]"> Black Glitter Purse </p>

                        <p className="ml-[70px] mt-[0.15rem] text-[12px]"> #17,500 </p>

                        <div className="flex">
                            <div>
                                <button className="mt-[2.5rem] font-bold w-[86px] p-[5px] text-[11px] border ml-[7px] bg-white text-[#9500D7] rounded-[15px]">View Details</button>
                            </div>

                            <div>
                                <button className="mt-[2.5rem] border font-bold w-[86px] p-[5px] text-[11px] ml-[5px] bg-[#9500D7] text-white rounded-[15px]">Place Order</button>
                            </div>
                        </div>
                    </div>
            
                    <div className="border bg-[#FFF7FC] w-[12rem] rounded-[4px] mt-[20px] ml-[1.6rem] h-[15rem]">

                        <div className="border w-[7rem] ml-[38px] mt-[1px]">
                            <img src={img6} alt="shirt" className="h-[7rem] w-[9rem]"/>
                        </div>
                        <p className="text-[12px] ml-[33px] mt-[10px]"> Black Mini-skirt gown </p>

                        <p className="ml-[70px] mt-[0.15rem] text-[12px]"> #17,500 </p>

                        <div className="flex">
                            <div>
                                <button className="mt-[2.5rem] font-bold w-[86px] p-[5px] text-[11px] border ml-[7px] bg-white text-[#9500D7] rounded-[15px]">View Details</button>
                            </div>

                            <div>
                                <button className="mt-[2.5rem] border font-bold w-[86px] p-[5px] text-[11px] ml-[5px] bg-[#9500D7] text-white rounded-[15px]">Place Order</button>
                            </div>
                        </div>
                    </div>


                    <div className="border bg-[#FFF7FC] w-[12rem] rounded-[4px] mt-[20px] ml-[1.3rem] h-[15rem]">

                        <div className="border w-[7rem] ml-[38px] mt-[1px]">
                            <img src={img7} alt="shirt" className="h-[7rem] w-[9rem]"/>
                        </div>
                        <p className="text-[12px] ml-[14px] mt-[10px]"> Black Grey shartered gown </p>

                        <p className="ml-[70px] mt-[0.15rem] text-[12px]"> #17,500 </p>

                        <div className="flex">
                            <div>
                                <button className="mt-[2.5rem] font-bold w-[86px] p-[5px] text-[11px] border ml-[7px] bg-white text-[#9500D7] rounded-[15px]">View Details</button>
                            </div>

                            <div>
                                <button className="mt-[2.5rem] border font-bold w-[86px] p-[5px] text-[11px] ml-[5px] bg-[#9500D7] text-white rounded-[15px]">Place Order</button>
                            </div>
                        </div>
                    </div>
                    
                    <div className="border bg-[#FFF7FC] w-[12rem] rounded-[4px] mt-[20px] ml-[0.8rem] h-[15rem]">

                        <div className="border w-[7rem] ml-[38px] mt-[1px]">
                            <img src={img8} alt="shirt" className="h-[7rem] w-[9rem]"/>
                        </div>
                        <p className="text-[12px] ml-[8px] mt-[10px]"> Black Multi-purpose backpack </p>

                        <p className="ml-[70px] mt-[0.15rem] text-[12px]"> #27,500 </p>

                        <div className="flex">
                            <div>
                                <button className="mt-[2.5rem] font-bold w-[86px] p-[5px] text-[11px] border ml-[7px] bg-white text-[#9500D7] rounded-[15px]">View Details</button>
                            </div>

                            <div>
                                <button className="mt-[2.5rem] border font-bold w-[86px] p-[5px] text-[11px] ml-[5px] bg-[#9500D7] text-white rounded-[15px]">Place Order</button>
                            </div>
                        </div>
                    </div>
                    <div className="border bg-[#FFF7FC] w-[12rem] rounded-[4px] mt-[20px] ml-[0.5rem] h-[15rem]">

                        <div className="border w-[7rem] ml-[38px] mt-[1px]">
                            <img src={img9} alt="shirt" className="h-[7rem] w-[9rem]"/>
                        </div>
                        <p className="text-[12px] ml-[47px] mt-[10px]"> Pink Kitty purse </p>

                        <p className="ml-[70px] mt-[0.15rem] text-[12px]"> #11,500 </p>

                        <div className="flex">
                            <div>
                                <button className="mt-[2.5rem] font-bold w-[86px] p-[5px] text-[11px] border ml-[7px] bg-white text-[#9500D7] rounded-[15px]">View Details</button>
                            </div>

                            <div>
                                <button className="mt-[2.5rem] border font-bold w-[86px] p-[5px] text-[11px] ml-[5px] bg-[#9500D7] text-white rounded-[15px]">Place Order</button>
                            </div>
                        </div>
                    </div>
                    
                    <div className="border bg-[#FFF7FC] w-[12rem] rounded-[4px] mt-[20px] ml-[0.1rem] h-[15rem]">

                        <div className="border w-[7rem] ml-[38px] mt-[1px]">
                            <img src={img10} alt="shirt" className="h-[7rem] w-[9rem]"/>
                        </div>
                        <p className="text-[12px] ml-[22px] mt-[10px]"> Gold neecklace with case </p>

                        <p className="ml-[70px] mt-[0.15rem] text-[12px]"> #20,000 </p>

                        <div className="flex">
                            <div>
                                <button className="mt-[2.5rem] font-bold w-[86px] p-[5px] text-[11px] border ml-[7px] bg-white text-[#9500D7] rounded-[15px]">View Details</button>
                            </div>

                            <div>
                                <button className="mt-[2.5rem] border font-bold w-[86px] p-[5px] text-[11px] ml-[5px] bg-[#9500D7] text-white rounded-[15px]">Place Order</button>
                            </div>
                        </div>
                    </div>

                    <div className="border bg-[#FFF7FC] w-[12rem] rounded-[4px] mt-[20px] ml-[1.6rem] h-[15rem]">

                        <div className="border w-[9.5rem] ml-[20px] mt-[1px]">
                            <img src={img11} alt="shirt" className="h-[7rem] w-[9rem]"/>
                        </div>
                        <p className="text-[12px] ml-[8px] mt-[10px]"> Black Mini-strapped Silk dress </p>

                        <p className="ml-[70px] mt-[0.15rem] text-[12px]"> #10,500 </p>

                        <div className="flex">
                            <div>
                                <button className="mt-[2.5rem] font-bold w-[86px] p-[5px] text-[11px] border ml-[7px] bg-white text-[#9500D7] rounded-[15px]">View Details</button>
                            </div>

                            <div>
                                <button className="mt-[2.5rem] border font-bold w-[86px] p-[5px] text-[11px] ml-[5px] bg-[#9500D7] text-white rounded-[15px]">Place Order</button>
                            </div>
                        </div>
                    </div>

                    <div className="border bg-[#FFF7FC] w-[12rem] rounded-[4px] mt-[20px] ml-[1.3rem] h-[15rem]">

                        <div className="border w-[9rem] ml-[24px] mt-[1px]">
                            <img src={img12} alt="shirt" className="h-[7rem] w-[9rem]"/>
                        </div>
                        <p className="text-[12px] ml-[8px] mt-[10px]"> Black Plain button-down shirt </p>

                        <p className="ml-[70px] mt-[0.15rem] text-[12px]"> #17,500 </p>

                        <div className="flex">
                            <div>
                                <button className="mt-[2.5rem] font-bold w-[86px] p-[5px] text-[11px] border ml-[7px] bg-white text-[#9500D7] rounded-[15px]">View Details</button>
                            </div>

                            <div>
                                <button className="mt-[2.5rem] border font-bold w-[86px] p-[5px] text-[11px] ml-[5px] bg-[#9500D7] text-white rounded-[15px]">Place Order</button>
                            </div>
                        </div>
                    </div>

                    <div className="border bg-[#FFF7FC] w-[12rem] rounded-[4px] mt-[20px] ml-[0.8rem] h-[15rem]">

                        <div className="border w-[9rem] bg-[#FFF7FC] ml-[24px] mt-[1px]">
                            <img src={img13} alt="shirt" className="h-[7rem] w-[9rem]"/>
                        </div>
                        <p className="text-[12px] ml-[35px] mt-[10px]"> Black inner Camisole </p>

                        <p className="ml-[80px] mt-[0.15rem] text-[12px]"> #4,500 </p>

                        <div className="flex">
                            <div>
                                <button className="mt-[2.5rem] font-bold w-[86px] p-[5px] text-[11px] border ml-[7px] bg-white text-[#9500D7] rounded-[15px]">View Details</button>
                            </div>

                            <div>
                                <button className="mt-[2.5rem] border font-bold w-[86px] p-[5px] text-[11px] ml-[5px] bg-[#9500D7] text-white rounded-[15px]">Place Order</button>
                            </div>
                        </div>
                    </div>

                    <div className="border bg-[#FFF7FC] w-[12rem] rounded-[4px] mt-[20px] ml-[0.5rem] h-[15rem]">

                        <div className="border w-[7rem] ml-[38px] mt-[1px]">
                            <img src={img14} alt="shirt" className="h-[7rem] w-[9rem]"/>
                        </div>
                        <p className="text-[12px] ml-[8px] mt-[10px]"> Black and white kisses Tote bag </p>

                        <p className="ml-[70px] mt-[0.15rem] text-[12px]"> #17,500 </p>

                        <div className="flex">
                            <div>
                                <button className="mt-[2.5rem] font-bold w-[86px] p-[5px] text-[11px] border ml-[7px] bg-white text-[#9500D7] rounded-[15px]">View Details</button>
                            </div>

                            <div>
                                <button className="mt-[2.5rem] border font-bold w-[86px] p-[5px] text-[11px] ml-[5px] bg-[#9500D7] text-white rounded-[15px]">Place Order</button>
                            </div>
                        </div>
                    </div>

                    <div className="border bg-[#FFF7FC] w-[12rem] rounded-[4px] mt-[20px] ml-[0.1rem] h-[15rem]">

                        <div className="border w-[7rem] ml-[38px] mt-[1px]">
                            <img src={img15} alt="shirt" className="h-[7rem] w-[9rem]"/>
                        </div>
                        <p className="text-[12px] ml-[8px] mt-[10px]"> Black Plain Baggy Pants </p>

                        <p className="ml-[70px] mt-[0.15rem] text-[12px]"> #17,500 </p>

                        <div className="flex">
                            <div>
                                <button className="mt-[2.5rem] font-bold w-[86px] p-[5px] text-[11px] border ml-[7px] bg-white text-[#9500D7] rounded-[15px]">View Details</button>
                            </div>

                            <div>
                                <button className="mt-[2.5rem] border font-bold w-[86px] p-[5px] text-[11px] ml-[5px] bg-[#9500D7] text-white rounded-[15px]">Place Order</button>
                            </div>
                        </div>
                    </div>

                </div>
        </div>

                <div className="">
                    
                    <div className="flex border w-[21.1rem] ml-[30rem] mt-[40px] border-dotted">
                        <button className="ml-[2px] border text-left w-[4rem] text-[12px] bg-[#7D747E] border-t-0 border-r-0 border-b-0">1</button>
                        <Link  to='/page'>
                        <button className="w-[4rem] text-left border text-[12px] border-t-0 border-r-0 border-b-0">2</button>
                        </Link>
                        <button className="w-[4rem] text-[12px] border-l-2 border text-left border-t-0 border-r-0 border-b-0">3</button>
                        <button className="w-[4rem] text-[12px] text-left border-l-2 border border-t-0 border-r-0 border-b-0">4</button>
                        <button className="border border-t-0 border-r-0 border-l-2 border-b-0 w-[4rem] text-[12px] text-left">5</button>
                        <p> <PiCaretRightBold className="border h-6 w-3 font-bold" /> </p>
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
  )
}

export default Body;