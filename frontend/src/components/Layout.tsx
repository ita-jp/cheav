import Header from './Header';
import Footer from "./Footer.tsx";
import {Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <div>
            <Header/>
            <main>
                <Outlet/>
            </main>
            <Footer/>
        </div>
    );
}

export default Layout;