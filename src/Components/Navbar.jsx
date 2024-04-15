import { Link, NavLink } from "react-router-dom";
import UseAuth from "../Hook/UseAuth";

const Navbar = () => {

    const { logout, user } = UseAuth();

    return (
        <div className="navbar bg-base-300 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

                        <NavLink className={({ isActive }) => isActive ? 'text-[#23BE0A] font-bold border border-green-500 p-2 sm:mr-2' : 'font-bold p-2 sm:mr-2'} to="/"><a>Home</a></NavLink>


                        <NavLink className={({ isActive }) => isActive ? 'text-[#23BE0A] font-bold border border-green-500 p-2 sm:mr-2 rounded' : 'font-bold p-2 sm:mr-2 rounded'} to="/properties"><a>Properties</a></NavLink>


                        <NavLink className={({ isActive }) => isActive ? 'text-[#23BE0A] font-bold border border-green-500 p-2 sm:mr-2 rounded' : 'font-bold p-2 sm:mr-2 rounded'} to="/watchlist"><a>Agents</a></NavLink>



                        <NavLink className={({ isActive }) => isActive ? 'text-[#23BE0A] font-bold border border-green-500 p-2 sm:mr-2 rounded' : 'font-bold p-2 sm:mr-2 rounded'} to="/contact"><a>Contact</a></NavLink>


                        <NavLink className={({ isActive }) => isActive ? 'text-[#23BE0A] font-bold border border-green-500 p-2 sm:mr-2 rounded' : 'font-bold p-2 sm:mr-2 rounded'} to="/about"><a>About Us</a></NavLink>

                    </ul>
                </div>
                <a className="btn btn-ghost text-xl font-bold">HavenCrest</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">

                    <NavLink className={({ isActive }) => isActive ? 'text-[#23BE0A] font-bold border border-green-500 p-2 sm:mr-2 rounded' : 'font-bold p-2 sm:mr-2 p-2 sm:mr-2 rounded'} to="/"><a>Home</a></NavLink>


                    <NavLink className={({ isActive }) => isActive ? 'text-[#23BE0A] font-bold border border-green-500 p-2 sm:mr-2 rounded' : 'font-bold p-2 sm:mr-2 rounded'} to="/properties"><a>Properties</a></NavLink>


                    <NavLink className={({ isActive }) => isActive ? 'text-[#23BE0A] font-bold border border-green-500 p-2 sm:mr-2 rounded' : 'font-bold p-2 sm:mr-2 rounded'} to="/watchlist"><a>Agents</a></NavLink>


                    <NavLink className={({ isActive }) => isActive ? 'text-[#23BE0A] font-bold border border-green-500 p-2 sm:mr-2 rounded' : 'font-bold p-2 sm:mr-2 rounded'} to="/contact"><a>Contact</a></NavLink>


                    <NavLink className={({ isActive }) => isActive ? 'text-[#23BE0A] font-bold border border-green-500 p-2 sm:mr-2 rounded' : 'font-bold p-2 sm:mr-2 rounded'} to="/about"><a>About Us</a></NavLink>

                </ul>
            </div>
            <div className="navbar-end gap-1 text-center" style={{ zIndex: 10 }}>
                {
                    user?.email ? <NavLink className={({ isActive }) => isActive ?
                     'text-[#23BE0A] border border-green-500 p-2 sm:mr-2 rounded' : 'p-2 sm:mr-2 rounded'} to="/update">
                        <a>Update Profile</a></NavLink>:
                        <a></a>
                }
                {
                    user?.email ? <div className="dropdown dropdown-end">
                        <label tabIndex={0}
                            className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src={user?.photoURL || "https://i.ibb.co/sjymvr8/Capture4.png"} />
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3
                        z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <button className="btn btn-sm btn-ghost bg-cyan-200">
                                    {user?.displayName ? user.displayName.split(' ')[0] : 'User name not found'}
                                </button>
                            </li>

                            <li>
                                <button
                                    onClick={logout}
                                    className="btn btn-sm btn-ghost bg-cyan-200 mt-2">Logout</button>
                            </li>
                        </ul>
                    </div>
                        :
                        <Link to="/login">
                            <button className="btn text-white bg-black">Login</button>
                        </Link>
                }



            </div>
        </div>
    );
};

export default Navbar;