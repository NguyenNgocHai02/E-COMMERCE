import { useContext } from "react";
import { baseUrl, delRequest } from "../../utils/services";
import { ProductContext } from "../../context/ProductContext";

const DelProduct = ({setIsDel,id}) => {
    const {setNotification}=useContext(ProductContext)
    console.log(id)
    const HanlderDelete=async()=>{
        const response= await delRequest(`${baseUrl}/products/${id}`)
        setIsDel(false)
        setNotification({message:response,active:'delproduct'})
       
        setTimeout(()=>{
            setNotification({
                message:'',
                active:'',
            })
        },1000)
        
    }
    return ( <div className="w-[40%] h-[100px] bg-white fixed top-[35%] left-[44%] shadow-sm rounded-md z-[999]">
    <h3 className="font-medium text-center text-[24px] text-red-600 p-1">Bạn có chắc chắn muốn xóa sản phẩm này không?</h3>
   <div className="flex justify-center items-center gap-10 my-3">
    <button className="p-2 bg-yellow-400 text-white rounded-xl w-32 active:opacity-55"onClick={()=>setIsDel(false)}>Quay lại</button>
    <button  className="p-2 bg-red-600 text-white rounded-xl w-32 active:opacity-55"onClick={HanlderDelete}>Xóa</button>
   </div>
    </div> );
}
 
export default DelProduct;