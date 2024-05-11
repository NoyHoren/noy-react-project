import { NavLink, useNavigate } from "react-router-dom";
import "./NavBar.scss";
import { FaHome, FaUser } from 'react-icons/fa';
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import { useAuth } from "../../hooks/useAuth";
import { FaXmark, FaBars } from "react-icons/fa6";
import { useState } from "react";


const NavBar = () => {

    const { isLoggedIn, isBusiness, logout, isAdmin } = useAuth();

    const navigate = useNavigate();

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        if (!isMenuOpen) {
            setTimeout(() => {
                setIsMenuOpen(false);
            }, 2000);
        }
    }

    return (
        <nav className="site-navbar text-xl  leading-6 tracking-tight text-gray-900  dark:text-gray-100 mx-6">
            <div className="nav-left flex justify-center items-center ">
                <NavLink to="/" className='brand'>
                    <FaHome className="icon-home-image" />
                </NavLink>

            </div>

            <div className="nav-right">
                <div className="hidden md:flex md:flex-row gap-4">
                    {isAdmin && <NavLink to="/sandbox">Sandbox</NavLink>}
                    {isLoggedIn && <NavLink to="/cards">Cards</NavLink>}
                    {isLoggedIn && <NavLink to="/favoritecards">Fav Cards</NavLink>}
                    {isLoggedIn && isBusiness && <NavLink to="/mycards">My Cards</NavLink>}
                    {isLoggedIn && isBusiness && <NavLink to="/createcard">Create Card</NavLink>}
                    {!isLoggedIn && <NavLink to="/register">Register</NavLink>}
                    {!isLoggedIn && <NavLink to="/login">Login</NavLink>}
                    {isLoggedIn && <button onClick={() => {
                        logout();
                        navigate("/login")
                    }}>Logout</button>}
                    {isLoggedIn && <NavLink to={'/profile'}><FaUser /></NavLink>}

                </div>


                <DarkModeToggle />

                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-white focus:outline-none focus:text-gray-300">
                        {isMenuOpen ? (<FaXmark className="w-6 h-6 text-black dark:text-white" />) : (<FaBars className="  w-6 h-6 text-black dark:text-white" />)}
                    </button>
                </div>



            </div>

            {
                isMenuOpen && (
                    <div className="space-y-4 px-4 pt-3 pb-5 mx-2 rounded-md drop-shadow-md bg-stone-200 dark:bg-slate-500 fixed top-16 right-0 left-0 flex flex-col z-50 ">
                        {isLoggedIn && <NavLink to="/cards">Cards</NavLink>}
                        {isLoggedIn && <NavLink to="/favoritecards">Fav Cards</NavLink>}
                        {isLoggedIn && isBusiness && (
                            <>
                                <NavLink to="/mycards">My Cards</NavLink>
                                <NavLink to="/createcard">Create Card</NavLink>
                                <NavLink to="/profile">Profile</NavLink>
                            </>
                        )}
                        {!isLoggedIn && <NavLink to="/register">Register</NavLink>}
                        {!isLoggedIn && <NavLink to="/login">Login</NavLink>}
                        {isLoggedIn && <button onClick={() => {
                            logout();
                            navigate("/login")
                        }}>Logout</button>}
                    </div>
                )
            }

        </nav>
    );
};

export default NavBar;