import React, {useState} from 'react'
import bread from "../assets/bread.png"
import {useNavigate} from 'react-router-dom'

function Navbar() {
    const [expand, setExpand] = useState(false); 
    const navigate = useNavigate();

    return (
        <nav className="w-screen z-10 flex flex-wrap items-center justify-between px-2 py-3 bg-navPrimary fixed">
            <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">                   
                    <a className="text-sm flex font-bold leading-relaxed mr-4 py-2 whitespace-nowrap uppercase text-white" href="#">
                        <img className='h-7' src={bread} />   
                        <p className='px-4 text-lg text-black'>Two Bakers</p>                 
                    </a>
                    <button 
                    className="text-white text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none cursor-pointer"
                    type="button"
                    onClick={() => setExpand(!expand)}>                        
                        {expand ? 
                        <svg fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="24px" height="24px"><path d="M 7.21875 5.78125 L 5.78125 7.21875 L 14.5625 16 L 5.78125 24.78125 L 7.21875 26.21875 L 16 17.4375 L 24.78125 26.21875 L 26.21875 24.78125 L 17.4375 16 L 26.21875 7.21875 L 24.78125 5.78125 L 16 14.5625 Z"/></svg>
                        : <svg fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="24px" height="24px"><path d="M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z"/></svg>
                        }
                    </button>
                </div>
                <div className={"lg:flex flex-grow items-center" + (expand ? " flex" : " hidden")}>
                    <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                        <li className="nav-item justify-center">
                            <a className="px-3 py-2 flex items-center text-lg text-black hover:opacity-50" onClick={() => navigate("/")}>
                                <span className="ml-2">HOME</span>
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="px-3 py-2 flex items-center text-lg text-black hover:opacity-50" onClick={() => navigate("/Recipes")}>
                                <span className="ml-2">RECIPES</span>
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="px-3 py-2 flex items-center text-lg text-black hover:opacity-50" href="#">
                                <span className="ml-2">ABOUT</span>
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="px-3 py-2 flex items-center text-lg text-black hover:opacity-50" href="#">
                                <span className="ml-2">CONTACT</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar

