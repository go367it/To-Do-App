import React from 'react'
import {Link} from 'react-router-dom'

const Homepage = () => {
    return (
        <div>
                        
            <div className="flex h-full gap-4 justify-center align-middle pt-2">
                <Link to='/signup'>
                    <button className="bg-blue-600 w-40 rounded-sm pt-2 pb-2 pl-4 pr-4
                    focus:ring-1 focus:ring-blue-500 focus:ring-offset-2
                    hover:bg-blue-700 text-white">
                        Get started
                    </button>
                </Link>
                <Link to='/signin'>
                    <button className="bg-blue-600 w-40 rounded-sm pt-2 pb-2 pl-4 pr-4
                    focus:ring-1 focus:ring-blue-500 focus:ring-offset-2
                    hover:bg-blue-700 text-white">
                        Login
                    </button>
                </Link>
            </div>

        </div>
    )
}

export default Homepage
