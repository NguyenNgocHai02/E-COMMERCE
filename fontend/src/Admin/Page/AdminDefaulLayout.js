import Sidebar from "../Component/Sidebar";
import { Outlet } from "react-router-dom";
const AdminDefaulLayout = () => {
    return ( <div className="w-full h-screen bg-[#f5f5f5] flex ">
    <Sidebar/>

    <div className="flex-1"><Outlet/></div>
    </div> );
}
 
export default AdminDefaulLayout;