import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
const LoginAdmin = () => {
    const { loginInfo,updateLoginInfo,loginUser,loginError,loginLoading,}=useContext(AuthContext)
    return (  <div className="flex w-full h-screen">

    <div className="w-[70%] h-full bg-blue-300 flex flex-col justify-center items-center font-extrabold text-[100px] text-white">
    <h1 >Admin Dashboard</h1>
    <span className="block font-thin text-[24px]">Quản lý mọi thứ một cách dễ dàng và hiệu quả</span>
    </div>
    
    <div className="flex flex-col justify-center items-center flex-1">
        <h3 className="font-semibold text-[100px] text-sky-700">Login</h3>
        <div className="flex flex-col   font-extralight text-[24px] m-5border-[1px]">
            <form className="w-full flex flex-col gap-10 " onSubmit={loginUser}>
                <div className="flex border ">
                    Email:<input type="text"  className="flex-1 bg-transparent outline-none ml-5 placeholder:text-20px"placeholder="exampl@gmail.com" autocomplete="off"
                    onChange={(e)=>updateLoginInfo({
                        ...loginInfo,
                        email:e.target.value
                    })}
                    />
                </div>
                <div className="flex border ">
                    Mật Khẩu:<input type="password"  className="flex-1 bg-transparent outline-none ml-5 " autocomplete="off"  onChange={(e)=>updateLoginInfo({
                        ...loginInfo,
                        password:e.target.value
                    })}/>
                </div>
                <button type="submit" className="p-2 bg-blue-500 rounded-md border text-white text-[25px] font-medium active:opacity-45" >Đăng nhập</button>
            </form>
        </div>
        <div className="my-5 border-t-2 w-[70%] flex justify-center"><Link to='register' className="px-8 border-[2px] text-[24px] my-3 text-red-600 active:opacity-45   " >Bạn chưa có tài khoản?</Link></div>
    </div>

</div> );
}
 
export default LoginAdmin;