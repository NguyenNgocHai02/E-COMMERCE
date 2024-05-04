import { Link } from "react-router-dom";

const Sidebar = () => {
    return ( <div className="w-[25%] h-full border border-red-500 flex flex-col bg-blue-300 ">
        <div className="flex justify-center items-center font-extrabold text-[50px] text-white py-5 border-white border-b-[5px] rounded-2xl">Admin</div>
        <div className="flex-1">
            <ul className="flex flex-col justify-center items-center h-full w-full gap-10">
                <li className="w-full text-center"><Link to='/admin' className="font-semibold text-[30px] text-white w-full border-b-[4px] py-3 block border-solid  focus:opacity-55">Quản lý hệ thống</Link></li>
                <li className="w-full text-center"><Link to='/thongkevanaocao'  className="font-semibold text-[30px] text-white w-full border-b-[4px] border-solid py-3 block  focus:opacity-55">Thống kê và báo cáo</Link></li>
                <li className="w-full text-center"><Link to='/quanlykhachhang'  className="font-semibold text-[30px] text-white w-full border-b-[4px] py-3 block border-solid  focus:opacity-55">Quản lý khách hàng</Link></li>
                <li className="w-full text-center"><Link to='/quanlysanpham'  className="font-semibold text-[30px] text-white w-full border-b-[4px] py-3 block border-solid  focus:opacity-55">Quản lý sản phẩm</Link></li>
                <li className="w-full text-center"><Link to='/quanlyblog'  className="font-semibold text-[30px] text-white w-full border-b-[4px] py-3 block border-solid  focus:opacity-55">Quản lý Blog</Link></li>
            </ul>
        </div>
    </div> );
}
 
export default Sidebar;
