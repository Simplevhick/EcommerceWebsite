import React from "react";
import { Link, useParams } from "react-router-dom";


const sideBarOption = [
  {
    category: "Dolce&Gabbana",
    href: "dolce&gabbana",
  },
  {
    category: "Gucci",
    href: "gucci",
  },

  {
    category: "Louis Vuiton",
    href: "louisvuitton",
  },

  {
    category: "Primark",
    href: "primark",
  },

  {
    category: "Local Stores",
    href: "localstores",
  },

];
const BarOption = [
  {
    category: "Addidas",
    href: "addidas",
  },
  {
    category: "Ego",
    href: "ego",
  },

  {
    category: "Jordan",
    href: "jordan",
  },

  {
    category: "Nike",
    href: "nike",
  },

  {
    category: "Local Stores",
    href: "localstores",
  },

];


const Sidebar = () => {
  const { brand } = useParams();

  return (
    <div>
      <div className="border w-[13rem] rounded-[4px] bg-[#F9F1F6] h-[27rem] mt-[10px] text-sm hidden md:block">
        <div className="flex p-[5px] mt-[7px] text-[rgb(75,68,77)]">
          <p className="text-xs ml-[0.5rem]">Clothes</p>
        </div>

        {sideBarOption.map((side , i) => (
          <Link to={`/categories/${side.href}`} key={i + 1}>
            <div
              className={
                side.href === brand
                  ? "flex justify-between m-3 bg-[#ffd7ef] rounded-full p-2"
                  : "flex justify-between m-1 p-2"
              }
            >
              <p className="text-xs">{side.category}</p>
              <p className="text-xs">999+</p>
            </div>
          </Link>
        ))}

         <div className="flex p-[5px] mt-[7px] text-[#4B444D]">
          <p className="text-xs ml-[0.5rem]">Shoes and accessories</p>
        </div>

        {BarOption.map((side , i) => (
          <Link to={`/categories/${side.href}`} key={i + 1}>
            <div
              className={
                side.href === brand
                  ? "flex justify-between m-3 bg-[#ffd7ef] rounded-full p-2"
                  : "flex justify-between m-1 p-[6px]"
              }
            >
              <p className="text-xs">{side.category}</p>
              <p className="text-xs">999+</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
