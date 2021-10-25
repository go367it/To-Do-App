import React from 'react'
import {MenuIcon} from '@heroicons/react/outline'
import {Link} from 'react-router-dom'

const Navbar = () => {
    const toggleMenu = () =>{
        // menu.classList.toggle('hidden')
        document.querySelector('.mobile-menu').classList.toggle('hidden')
    }

    return (
      <div>
        <div className="py-3">

            <div className="flex justify-between w-screen">
                
                <div className="primary ml-8 flex items-center gap-4 md:gap-6">
                    <Link to='/'>
                      <h2 className="text-2xl md:text-2xl">Secretary</h2>
                    </Link>
                </div>

                <div className="secondary hidden md:flex items-center gap-8">

                    <a>Home</a>
                    <a>About Us</a>
                    <a>Team</a>
                    <a>Login</a>

                    <button className="bg-blue-500 py-2 px-4 rounded-sm mr-10 text-white 
                    hover:bg-blue-600 transition duration-300 ease-in-out">
                        Join Now
                    </button>

                </div>

                {/* for mobile view hamburger button */}
                <div className="md:hidden flex items-center h-12 w-12 mr-3">
                    <button onClick={()=>toggleMenu()} className="mobile-menu-button py-2 px-3 focus:ring-2 focus:ring-gray-600 rounded-sm">
                        <MenuIcon className="block h-6 w-6" />
                    </button>
                </div>

            </div>

            {/* list for mobile view */}
            <div className="mobile-menu hidden md:hidden p-5 w-screen" toggle="hidden">

                <button className="bg-gray-100 my-2 w-full py-2 px-4 rounded-sm mr-10 
                    hover:bg-gray-300 transition duration-300 ease-in-out">
                    Home
                </button>
                <button className="bg-gray-100 my-2 w-full py-2 px-4 rounded-sm mr-10 
                    hover:bg-gray-300 transition duration-300 ease-in-out">
                    About Us
                </button>
                <button className="bg-gray-100 my-2 w-full py-2 px-4 rounded-sm mr-10 
                    hover:bg-gray-300 transition duration-300 ease-in-out">
                    Team
                </button>
                <button className="bg-gray-100 my-2 w-full py-2 px-4 rounded-sm mr-10 
                    hover:bg-gray-300 transition duration-300 ease-in-out">
                    Login
                </button>
                <button className="bg-blue-500 my-2 w-full py-2 px-4 rounded-lg mr-10 text-white 
                    hover:bg-blue-600 transition duration-300 ease-in-out">
                    Join Now
                </button>

            </div>
            
        </div>
        <hr />
      </div>
    );
}

export default Navbar
