import { FaCalendarAlt, FaCartPlus, FaHome, FaList } from "react-icons/fa";
import { IoWalletSharp } from "react-icons/io5";
import { MdReviews } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";

const DashBoard = () => {

    const [isAdmin] = useAdmin();
    console.log(isAdmin);
    return (
        <div className="flex max-w-screen-xl mx-auto min-h-screen">
            <div className="bg-orange-400  p-5">
                <div>
                    <h1 className="text-xl font-bold text-center my-5 tracking-[5px]">Restaurant</h1>
                </div>
                <ul>
                    {isAdmin ? <>     <li className="px-2 my-3" >
                        <NavLink to={'/dashboard/adminHome'} className={({ isActive }) =>
                            isActive ? "text-white" : ""
                        }>
                            <p className="flex items-center gap-2"><FaHome />Admin Home</p>
                        </NavLink></li>
                        <li className="px-2 my-3" >
                            <NavLink to={'/dashboard/addItems'} className={({ isActive }) =>
                                isActive ? "text-white" : ""
                            }>
                                <p className="flex items-center gap-2"><FaCalendarAlt />Add Items</p>
                            </NavLink></li>
                        <li className="px-2 my-3" >
                            <NavLink to={'/dashboard/manageItems'} className={({ isActive }) =>
                                isActive ? "text-white" : ""
                            }>
                                <p className="flex items-center gap-2"><IoWalletSharp />Manage Items</p>
                            </NavLink></li>
                        <li className="px-2 my-3" >
                            <NavLink to={'/dashboard/manageBookings'} className={({ isActive }) =>
                                isActive ? "text-white" : ""
                            }>
                                <p className="flex items-center gap-2"><FaCartPlus />Manage Bookings</p>
                            </NavLink></li>
                        <li className="px-2 my-3" >
                            <NavLink to={'/dashboard/users'} className={({ isActive }) =>
                                isActive ? "text-white" : ""
                            }>
                                <p className="flex items-center gap-2"><MdReviews />Manage Users</p>
                            </NavLink></li>
                    </> : <>
                        <li className="px-2 my-3" >
                            <NavLink to={'/dashboard/home'} className={({ isActive }) =>
                                isActive ? "text-white" : ""
                            }>
                                <p className="flex items-center gap-2"><FaHome />User Home</p>
                            </NavLink></li>
                        <li className="px-2 my-3" >
                            <NavLink to={'/dashboard/reservation'} className={({ isActive }) =>
                                isActive ? "text-white" : ""
                            }>
                                <p className="flex items-center gap-2"><FaCalendarAlt />Reservation</p>
                            </NavLink></li>
                        <li className="px-2 my-3" >
                            <NavLink to={'/dashboard/payment'} className={({ isActive }) =>
                                isActive ? "text-white" : ""
                            }>
                                <p className="flex items-center gap-2"><IoWalletSharp />Payment History</p>
                            </NavLink></li>
                        <li className="px-2 my-3" >
                            <NavLink to={'/dashboard/cart'} className={({ isActive }) =>
                                isActive ? "text-white" : ""
                            }>
                                <p className="flex items-center gap-2"><FaCartPlus />My Cart</p>
                            </NavLink></li>
                        <li className="px-2 my-3" >
                            <NavLink to={'/dashboard/review'} className={({ isActive }) =>
                                isActive ? "text-white" : ""
                            }>
                                <p className="flex items-center gap-2"><MdReviews />Add Review</p>
                            </NavLink></li>
                        <li className="px-2 my-3" >
                            <NavLink to={'/dashboard/booking'} className={({ isActive }) =>
                                isActive ? "text-white" : ""
                            }>
                                <p className="flex items-center gap-2"><FaCalendarAlt />My Bookings</p>
                            </NavLink></li>
                    </>}
                    <div className="divider"></div>

                    <li className="px-2 my-3" >
                        <NavLink to={'/'} className={({ isActive }) =>
                            isActive ? "text-white" : ""
                        }>
                            <p className="flex items-center gap-2"><FaHome />Home</p>
                        </NavLink></li>
                    <li className="px-2 my-3" >
                        <NavLink to={'/order/salad'} className={({ isActive }) =>
                            isActive ? "text-white" : ""
                        }>
                            <p className="flex items-center gap-2"><FaList />Menu</p>
                        </NavLink></li>

                </ul>
            </div>
            <div className="flex-1 bg-gray-200">
                <Outlet></Outlet>
            </div>
        </div >
    );
};

export default DashBoard;