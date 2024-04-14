import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Footer";


const Root = () => {
    return (
        <div className="mx-[1%] md:mx-[4%]">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;