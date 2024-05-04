import {createContext, useState,useCallback} from 'react'
import { baseUrl, postRequest } from "../utils/services";
export const ProductContext=createContext();
export const ProductProvider=({children})=>{
    const [notification,setNotification]=useState({
        message:'',
        active:'',
    })
    const [productInfo,setProductInfo]=useState({
        name:'',
      catalog_id:'',
      price:'',
      image_list:'',
      quantity:0,
      content:'',
      sold:0,
      discount:0
    })
    const [productLoading,setProductLoading]=useState(false)
   
    const updateProduct=useCallback((info)=>{
        setProductInfo(info)
    },[])
    const createProduct=async(e)=>{
        e.preventDefault();
        setProductLoading(true);
        productInfo.image_list=productInfo.image_list.split(',');
        console.log(productInfo)
        const response=await postRequest(`${baseUrl}/products/create`,JSON.stringify(productInfo))
       
     setProductLoading(false)
     setProductInfo({
        name:'',
      catalog_id:'',
      price:'',
      image_list:'',
      quantity:0,
      content:'',
      sold:0,
      discount:0
    })
        setNotification({message:response,active:'createProduct'});
        setTimeout(()=>{
            setNotification({
                message:'',
                active:'',
            })
        },1000)
    }
    return (
        <ProductContext.Provider
        value={{
            notification,
            productInfo,
            productLoading,
            updateProduct,
            createProduct,
            setNotification
         } }>
            {children}
        </ProductContext.Provider>
    )
}

