import { useState } from "react";
import DelProduct from "./DelProduct";

const Card = ({product}) => {
    const [isDel,setIsDel]=useState(false)
    return ( <div>
    <div className="  border-solid border-gray-400 border-[1px] relative hover:-translate-y-[0.5px] hover:border-red-600 w-48 cursor-pointer">
    <img src={product.image_list[0]} alt="img" className="w-48" />
    
    <div className="w-full h-14 overflow-hidden font-normal text-left">
    <h3 className="p-2 line-clamp-2 ">{product.name}</h3>
    </div>
    <span className="w-full h-auto text-red-600 block p-2 text-start ">{product.price}đ</span>

    <div className="flex gap-4 justify-end mr-3 text-white mb-3">
        <button   className=" bg-red-600 rounded-md px-4 active:opacity-80 relative" onClick={()=>setIsDel(true)}>Xóa</button>
        <button className="bg-yellow-500 rounded-md px-4 active:opacity-80">Sửa</button>
    </div>
    <span className="absolute top-0 right-0 px-2 text-red-600 font-thin bg-[#ffe97a] text-[14px]">-{product.discount}%</span>
    </div>
    {isDel&&<DelProduct setIsDel={setIsDel} id={product._id} />}
</div> );
}
 
export default Card;