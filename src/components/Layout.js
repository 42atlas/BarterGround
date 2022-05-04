
import { Outlet } from "react-router-dom";
import ButtonContact from "./ButtonContact";


const Layout = () => {
    return (
        <div>
            <Outlet />
            <ButtonContact />
        </div>
    )
}

export default Layout;