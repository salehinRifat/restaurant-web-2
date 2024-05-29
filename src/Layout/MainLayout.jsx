
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer';
import Navbar from '../Pages/Shared/Navbar';

const MainLayout = () => {
    return (
        <div>

            <Navbar></Navbar>
            <Outlet className="max-w-screen-xl mx-auto"></Outlet>
            <Footer></Footer>
        </div >
    );
};

export default MainLayout;