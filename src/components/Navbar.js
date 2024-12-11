import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
import { useSelector } from 'react-redux';
import { HomeIcon, BuildingOfficeIcon, PhoneIcon, ShoppingBagIcon } from '@heroicons/react/16/solid';

const Navbar = () => {
    const cartItems = useSelector((state) => state.cart.items);

    return (
        <div className="bg-gray-200 shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    {/* Logo */}
                    <div>
                        <Link to="/">
                            <img src={logo} alt="logo" className="w-[50px]" />
                        </Link>
                    </div>

                    {/* Navigation Links */}
                    <div className="hidden md:flex space-x-8">
                        <ul className="flex space-x-5 text-gray-700">
                            <li>
                                <Link to="/" className="p-2 md:px-4 rounded-md flex items-center gap-2 hover:bg-gray-100">
                                    <HomeIcon className='w-4 h-4 text-gray-700' />{" "}
                                    <p>Home</p>
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className="p-2 md:px-4 rounded-md flex items-center gap-2 hover:bg-gray-100">
                                    <BuildingOfficeIcon className='w-4 h-4 text-gray-700' />{" "}
                                    <p>About</p>
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="p-2 md:px-4 rounded-md flex items-center gap-2 hover:bg-gray-100">
                                    <PhoneIcon className='w-4 h-4 text-gray-700' />{" "}
                                    <p>Contact</p>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Cart and Login Button */}
                    <div className='flex space-x-5'>
                        <Link
                            to="/cart"
                            className='p-2 relative hover:bg-gray-100 rounded-md flex items-center gap-2 w-24'
                        >
                            <ShoppingBagIcon className="w-4 h-4 text-gray-700" />
                            <p className='hidden md:block'>Cart</p>

                            {/* Only show the badge if there are items in the cart */}
                            {cartItems.length > 0 && (
                                <p className="absolute top-[-8px] right-[-8px] w-5 h-5 rounded-full bg-orange-500 text-xs text-white flex items-center justify-center">
                                    {cartItems.length}
                                </p>
                            )}
                        </Link>
                        <Link
                            to={'/login'}
                            className='ml-4 bg-orange-400 text-white p-2 px-4 rounded-md items-center gap-2 hidden md:flex'
                        >
                            Login
                        </Link>
                    </div>

                    {/* Mobile Menu Icon */}
                    <div className="md:hidden">
                        <button className="text-gray-700 focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
