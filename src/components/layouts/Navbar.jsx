import React, { Component } from 'react'
import Logo from '../../assets/images/logo.png';
import { NavLink } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <header className="text-gray-700 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <img src={Logo} className="w-10 h-10 text-white p-2  rounded-full" />
                        <span className="ml-3 text-xl">charcha</span>
                    </a>
                    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
                        <a className="mr-5 hover:text-gray-900">First Link</a>
                        <a className="mr-5 hover:text-gray-900">Second Link</a>
                        <a className="mr-5 hover:text-gray-900">Third Link</a>
                        <a className="mr-5 hover:text-gray-900">Fourth Link</a>
                    </nav>
                    <NavLink to="/login">
                        <button className="inline-flex items-center bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0">Login</button>
                    </NavLink>


                </div>
            </header>
        )
    }
}

export default Navbar
