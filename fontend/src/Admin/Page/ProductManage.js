import { useContext, useEffect, useState } from "react";
import Card from "../Component/Card";
import CreateProduct from "../Component/CreateProduct";
import { baseUrl, getRequest } from "../../utils/services";
import { ProductContext } from "../../context/ProductContext";
const ProductManage = () => {
    const {notification}=useContext(ProductContext)
    const [isCreateP,setIsCreateP]=useState(false)
    const [products, setProducts] = useState(null);
    console.log(products)
    useEffect(() => {
        const fetchProducts = async () => {
            const productsResponse = await getRequest(`${baseUrl}/products`);
            setProducts(productsResponse);
        };

        fetchProducts();
    }, [notification]);
    return ( <div className="flex w-full h-full flex-col ">
    <header className="w-full h-[100px] bg-blue-800 fixed top-0 flex items-center">
        <ul className="flex font-thin text-[24px] text-white ml-4">
            <li><button onClick={()=>setIsCreateP(true)} ><i class="fa-solid fa-plus"></i> Thêm sản phẩm</button></li>     
        </ul>
    </header>
    <div className=" mt-[100px] overflow-scroll scroll-smooth grid grid-cols-5 gap-8 p-4 w-full items-center will-change-scroll relative">
    {products&&products?.map((product) => (
                <Card key={product.id} product={product} />
            ))} 
    </div>
    {isCreateP && <CreateProduct setIsCreateP={setIsCreateP} />}
   {(notification.active==='delproduct')&&<div className="fixed top-8 right-5 border-[2px] border-red-800 bg-red-400 px-5 text-[20px] text-red-700 font-mono">{notification.message}</div>}
    </div> );
}
 
export default ProductManage;