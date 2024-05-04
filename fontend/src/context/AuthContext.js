import {createContext, useState,useCallback,useEffect} from 'react'
import { baseUrl, postRequest } from "../utils/services";
export const AuthContext=createContext()
export const AuthContextProvider=({children})=>{
    const [user,setUser]=useState(null)
    const [registerError,setResgisterError]=useState(null)
    const [registerLoading,setResgisterLoading]=useState(false)
    const[registerInfo,setResgisterInfo]=useState({
        name:"",
        email:"",
        password:"",
    });

    const [loginInfo,setLoginInfo]=useState({
        email:"",
        password:"",
      });
      const [loginError,setLoginError]=useState(null)
      const [loginLoading,setloginLoading]=useState(false)

      const updateRegisterInfo=useCallback((info)=>
      {
          setResgisterInfo(info)
      },[])
      useEffect(()=>{
        const users = localStorage.getItem("User");
        setUser(JSON.parse(users));
      },[])
      const updateLoginInfo=useCallback((info)=>{
        setLoginInfo(info)
      },[])

      const registerUser= useCallback(async(e)=>{
        e.preventDefault();
       setResgisterLoading(true)
       setResgisterError(null)
         const response=  await postRequest(`${baseUrl}/admin/register`,JSON.stringify(registerInfo))
       
         console.log("response",JSON.stringify(registerInfo))
       if(response.error)
       {
         setResgisterLoading(false)
         return setResgisterError(response)
       }
       setResgisterLoading(false)
       localStorage.setItem("User",JSON.stringify(response))
       setUser(response)
     },[registerInfo])

     const loginUser=useCallback(async(e)=>{
        e.preventDefault();
        setLoginError(null);
        setloginLoading(true);
        console.log(loginInfo)
        const response=await postRequest(`${baseUrl}/admin/login`,JSON.stringify(loginInfo))
        console.log("response",response)
        if(response.error)
        {
          setloginLoading(false);
          return setLoginError(response);
        }
        setloginLoading(false);
        localStorage.setItem("User",JSON.stringify(response))
       
        setUser(response);
  
      },[loginInfo])

    return(<AuthContext.Provider
        value={{ user,
            registerInfo,
            updateRegisterInfo,
            registerUser,
            registerError,
            registerLoading,
            loginInfo,
            updateLoginInfo,
            loginUser,
            loginError,
            loginLoading,
           }}
    >
        {children}
    </AuthContext.Provider>)
}