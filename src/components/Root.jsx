import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Root = () => {


    return (
        <>
            <Navbar />
            <Outlet />
            {/* <div className="preloader">
                MLSC
            </div> */}
        </>
    );
};
export default Root;