import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
const RegisterAdmin = () => {
    const {registerInfo,updateRegisterInfo,registerUser,registerError,registerLoading,}=useContext(AuthContext)
    return (  <div className="flex w-full h-screen">

        <div className="w-[70%] h-full bg-blue-300 flex flex-col justify-center items-center font-extrabold text-[100px] text-white">
        <h1 >Admin Dashboard</h1>
        <span className="block font-thin text-[24px]">Quản lý mọi thứ một cách dễ dàng và hiệu quả</span>
        </div>
        
        <div className="flex flex-col justify-center items-center flex-1">
            <h3 className="font-semibold text-[100px] text-sky-700">Register</h3>
            <div className="flex flex-col   font-extralight text-[24px] m-5border-[1px]">
                <form className="w-full flex flex-col gap-10" onSubmit={registerUser} >
                    <div className="flex border ">
                        Họ và tên:<input type="text" className="flex-1 bg-transparent outline-none ml-5 " autocomplete="off" onChange={(e)=>updateRegisterInfo({
                            ...registerInfo,
                            name:e.target.value
                        })}/>
                    </div>
                    <div className="flex border ">
                        Email:<input type="text"  className="flex-1 bg-transparent outline-none ml-5 placeholder:text-20px "placeholder="exampl@gmail.com" autocomplete="off"
                        onChange={(e)=>updateRegisterInfo({
                            ...registerInfo,
                            email:e.target.value
                        })}/>
                    </div>
                    <div className="flex border ">
                        Mật Khẩu:<input type="password"  className="flex-1 bg-transparent outline-none ml-5" autocomplete="off"onChange={(e)=>updateRegisterInfo({
                            ...registerInfo,
                            password:e.target.value
                        })}/>
                    </div>
                    <button className="p-2 bg-blue-500 rounded-md border text-white text-[25px] font-medium " type="submit">{registerLoading?"Đang tạo tài khoản":"Đăng kí"}</button>
                </form>
               {registerError?.error&&  <span className="text-center text-[16px]   border-red-600 bg-red-400 mt-3 text-red-800">{registerError.message}</span>}
            </div>
        </div>
    </div>);
}
 
export default RegisterAdmin;