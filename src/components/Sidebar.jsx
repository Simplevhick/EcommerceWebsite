import React from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";


const sideBarOption = [
  {
    category: "Dolce&Gabbana",
    href: "dolce&gabbana",
  },
  {
    category: "Gucci",
    href: "gucci",
  },
];

const Sidebar = () => {
  const { brand } = useParams();

  return (
    <div>
      <div className="border w-[13rem] rounded-[4px] bg-[#F9F1F6] h-[25rem] mt-[10px] text-sm">
        <div className="flex p-[5px] mt-[7px] text-[#4B444D]">
          <p className="text-xs ml-[1px]">Clothes</p>
        </div>

        {sideBarOption.map((side , i) => (
          <Link to={`/categories/${side.href}`} key={i + 1}>
            <div
              className={
                side.href === brand
                  ? "flex justify-between m-3 bg-[#ffd7ef] rounded-full p-2"
                  : "flex justify-between m-3 p-2"
              }
            >
              <span>{side.category}</span>
              <span>999+</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
