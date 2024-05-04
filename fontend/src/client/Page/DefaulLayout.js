import { Outlet } from "react-router-dom";
import Header from "../Component/Header";
const DefaulLayout = () => {
    return ( <>
    <Header/>
    <Outlet/>
    </> );
}
 
export default DefaulLayout;