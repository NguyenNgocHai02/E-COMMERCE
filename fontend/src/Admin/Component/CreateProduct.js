import {useState,useContext } from "react";
import { getRequest,baseUrl } from "../../utils/services";
import { ProductContext } from "../../context/ProductContext";
const CreateProduct = ({setIsCreateP}) => {
    const { notification,productInfo,productLoading,updateProduct, createProduct}=useContext(ProductContext)
    const [catalog,setCatalog]=useState(null)
    const handlereven=async(e)=>{
        setCatalog(null)
       if(e.target.value!==' ')
       {
        const response= await getRequest(`${baseUrl}/catalog/parent/${e.target.value}`)
        console.log(response)
        setCatalog(response)
       }
        
    }
    return ( <div className="fixed top-0 bottom-0 right-0 left-0 bg-black bg-opacity-70">
        <div className="w-full h-full flex justify-center items-center">
            <div className="w-[500px] h-[90%] bg-white flex flex-col items-center justify-center relative">
                <h1 className="font-bold text-[40px] mb-10 text-blue-300 m-0 p-0">Thêm sản phẩm</h1>
                <form className="w-[80%] flex flex-col gap-y-5" onSubmit={createProduct}>
                    <div className="w-full flex">
                        <label className="w-[26%]">Tên sản phẩm:</label>
                        <input className="ml-2 outline-none flex-1 border-[2px] " name="name" autocomplete="off" value={productInfo.name}
                        onChange={(e)=>updateProduct({
                            ...productInfo,
                            name:e.target.value
                        })}
                        />
                    </div>
                    <div className="w-full flex">
                        <label className=" w-[26%]">Giá:</label>
                        <input className="ml-2 outline-none w-[30%] border-[2px]"name="price" autocomplete="off"value={productInfo.price}
                         onChange={(e)=>updateProduct({
                            ...productInfo,
                            price:e.target.value
                        })}/> đ
                    </div>
                    <div className="w-full flex">
                        <label className=" w-[26%]">Link ảnh:</label>
                        <input className="ml-2 outline-none flex-1 border-[2px]"name=" image_list"     autocomplete="off"value={productInfo.image_list}
                         onChange={(e)=>updateProduct({
                            ...productInfo,
                            image_list:e.target.value
                        })}
                        />
                    </div>
                    <div className="w-full flex">
                        <label className=" w-[26%]">Giảm giá:</label>
                        <input className="ml-2 outline-none w-[30%] border-[2px]" name="discount" autocomplete="off"value={productInfo.discount}
                         onChange={(e)=>updateProduct({
                            ...productInfo,
                            discount:e.target.value
                        })}/> %
                    </div>
                    <div className="w-full flex gap-3">
                 <label  className="w-[26%]">Danh mục:</label>
                        <select  onChange={(e)=>updateProduct({
                            ...productInfo,
                            catalog_id:e.target.value
                        })} className="w-[37%] outline-none border-[2px] ml-1" onClick={handlereven}
                        >
                        <option className="text-center" value=' '>-----</option>
                            <option value="661425522e41dfc8075628f3" >Quần áo</option>
                            <option value="661426602e41dfc8075628ff">Giầy thể thao</option>
                            <option value="66169bdc949dbbcbb9577e26">Phụ kiện</option>
                        </select>
                      <select value={productInfo.catalog_id} className="w-[37%] outline-none border-[2px]"onChange={(e)=>{
                        if(e.target.id!==' '){updateProduct({
                            ...productInfo,
                            catalog_id:e.target.value
                        })}}}>
                               <option className="text-center" value=' ' >-----</option>
                                {catalog&&catalog.map((item) => ( 
                                    <option key={item._id} value={item._id}>{item.name}</option>
                                ))}
                            </select>
                    </div>

                    <div className="w-full flex">
                        <label className=" w-[26%]">Số lượng:</label>
                        <input value={productInfo.quantity} className="ml-2 outline-none w-[30%] border-[2px] " name="quantity" autocomplete="off" onChange={(e)=>updateProduct({
                            ...productInfo,
                            quantity:e.target.value
                        })}/>
                    </div>
                    <div className="w-full flex flex-col">
                        <label className="block">Mô tả:</label>
                        <textarea  value={productInfo.content}  className="outline-none  border-[2px] h-[100px]" style={{ resize: 'none' }} name="content" autocomplete="off"onChange={(e)=>updateProduct({
                            ...productInfo,
                            content:e.target.value
                        })}/>
                    </div>
                    <div className="w-[100%] flex justify-end gap-5">
                    <button className="p-2 bg-yellow-400 text-white rounded-xl" onClick={(e)=>{  e.preventDefault();setIsCreateP(false)}}>Quay lại</button>
                    <button type="submit" className="p-2 bg-blue-400 text-white rounded-xl">{productLoading?"Đang thêm sản phẩm...":"Thêm sản phẩm"}</button>
                </div>
                </form>
               
                {notification.active==='createProduct'&&<span className="bg-green-400  absolute top-0 right-0 text-white flex p-2 rounded-md">{notification.message} <div className=" ml-2 bg-green-300 rounded-full w-5 h-5 flex justify-center items-center text-white"><i class="fa-solid fa-check"></i></div></span>}
            </div>
        </div>
    </div> );
}
 
export default CreateProduct;