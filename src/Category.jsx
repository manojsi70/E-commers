import React from "react";

function Category({ finalCategory,setCatName }) {
   let cat = finalCategory.map((get, i) => {
      let { name } = get;

      return (
         <li  onClick={()=>setCatName(name)}
            key={i}
            className="bg-[#ccc] cursor-pointer text-[20px] font-serif font-[500] mb-[14px] mt-[18px] pl-5"
         >
            {name}
         </li>
      );
   });
   return (
      <>
         <div className="font-light left-2 ">
            <h3 className="text-[25px] font-serif font-[400] text-center p-2 bg-red-200">
               Category
            </h3>
            <ul className="">{cat}</ul>
         </div>
      </>
   );
}

export default Category;
