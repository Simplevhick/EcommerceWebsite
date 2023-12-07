// import productDatas from "../../productDatas";
// import { useState } from "react";
import MoreInformation from "../moreInformation/moreInformation";

function ProductFooter() {
    // const [isClicked, setIsClicked] = useState(false);

        // const clickMe = (props) => {
        //   return (
        //       <div>
        //           {props.isLoggedIn ? <div> <MoreInformation isLoggedIn={true} userName="mic"/> </div> : 
        //   <h2>Please log in</h2>}
        //   </div> 
        //   )
        // }
        


  return (
    <div>
      {/* {productDatas.map((productData) => { */}
        {/* return ( */}
          <div>
            <div className="border w-[75.5rem] ml-[27px] mt-[23px]">
              
              <div className="flex bg-[#EADFEA]">
                
                <div className="flex items-start justify-start bg-[#FFD7EF]">
                  
                  <button className="border-2 flex text-start text-sm w-[100px] text-[#1D1B1E]">
                    Products Details
                  </button>
                  {" "}
                </div>
                {" "}
                <div className="flex items-start justify-start bg-[#7D747E]">
                  {" "}
                  <button className="border-2 w-[100px] text-start text-sm text-[#e3c3f3]">
                    More Information
                  </button>
                  {" "}
                </div>
                {" "}
                <div className="flex items-start justify-start bg-[#1D1B1E14]">
                  {" "}
                  <button className="border-2 w-[100px] text-[#1D1B1E] text-start text-sm">
                    Customer Reviews
                  </button>
                  {" "}
                </div>
                {" "}
              </div>
               <p className="bg-[#FFF7FC]"> This is a shirt </p>
                <MoreInformation isLoggedIn={true} userName="mic"/>
                
            {" "}
            </div>
          </div>
        {/* );  */}
      {/* })} */}
    </div>
  );
}

export default ProductFooter;