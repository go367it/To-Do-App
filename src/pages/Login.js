import React from 'react'
import {Link} from 'react-router-dom'

const Login = () => {

    // this function sets all the local storages needed for the project
    const settingProject = () =>{
        const projects = []
        localStorage.setItem("projects", JSON.stringify(projects))
    }

    return (
        <div className="flex justify-center p-3">
            
            <div className="w-11/12 md:w-1/3 border rounded-md border-gray-300 p-3">

                <Link to='/manage'>
                    <button className="bg-blue-600 text-white mt-2 mb-2 pt-2 pb-2 w-full
                    hover:bg-blue-700 rounded-lg focus:ring-2 focus:ring-offset-2 focus:ring-blue-700
                    "
                    onClick={()=>settingProject()}
                    >
                        Login
                    </button>
                </Link>

            </div>

        </div>
    )
}

export default Login
