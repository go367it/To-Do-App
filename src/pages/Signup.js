import React from 'react'

const Signup = () => {
    return (
        <div className="flex justify-center p-3">
            <div className="w-11/12 md:w-1/3 border rounded-md border-gray-300 p-3">
                <h2 className="text-blue-600 text-2xl mb-5">Sign Up</h2>
                <form className="text-left">

                    <label className="text-base text-gray-700 text-blue-600 mt-5"htmlFor="username">UserName</label>
                    <input name="username" className="w-full outline-none rounded-md h-10 mt-3 mb-3 pl-2 pr-2
                    text-blue-500  border border-gray-300 focus:ring-2 focus:ring-blue-600
                    focus:ring-offset-0
                    "
                    placeholder="Username"
                    type="text"
                    />

                    <label className="text-base text-gray-700 text-blue-600" htmlFor="email">Email</label>
                    <input name="email" className="w-full outline-none rounded-md h-10 mt-3 mb-3 pl-2 pr-2
                    text-blue-500  border border-gray-300 focus:ring-2 focus:ring-blue-600
                    focus:ring-offset-0
                    "
                    placeholder="Email"
                    type="text"
                    />

                    <label className="text-base text-gray-700 text-blue-600" htmlFor="password">Password</label>
                    <input name="password" className="w-full outline-none rounded-md h-10 mt-3 mb-3 pl-2 pr-2
                    text-blue-500  border border-gray-300 focus:ring-2 focus:ring-blue-600
                    focus:ring-offset-0
                    "
                    placeholder="password"
                    type="password"
                    />

                    <label className="text-base text-gray-700 text-blue-600" htmlFor="confirm_password">Confirm Password</label>
                    <input name="confirm_password" className="w-full outline-none rounded-md h-10 mt-3 pl-2 pr-2
                    text-blue-500  border border-gray-300 focus:ring-2 focus:ring-blue-600
                    focus:ring-offset-0
                    "
                    placeholder="Confirm Password"
                    type="password"
                    />

                    <button type="submit" className="w-full rounded-lg mt-7 mb-3 text-white pt-2 pb-2 bg-blue-600 hover:bg-blue-700
                    focus:ring-2 focus:ring-offset-2 focus:ring-blue-700
                    ">
                        Sign In
                    </button>

                </form>
            </div>
        </div>
    )
}

export default Signup
