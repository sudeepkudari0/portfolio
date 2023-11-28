import React from 'react'
import { Link } from "react-scroll";
import { MdKeyboardArrowRight } from "react-icons/md";
const Home = () => {
  return (
    <div name="Home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800">
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
            <div className="flex flex-col justify-center h-full">
                <h2 className="text-4xl sm:text-7xl font-bold text-white">
                    I'm Sudeep Kudari
                </h2>
                <p className="text-gray-500 py-4 max-w-md">
                Hello, I'm Sudeep Kudari, a fresh graduate eager to make my mark in Software Development. I bring a blend of passion, creativity, and a solid understanding of java, javascript, Reactjs, Nodejs, SpringBoot and more.
                </p>
                <div>
                    <Link to="Portfolio" smooth duration={500} className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                        Portfolio
                        <span>
                            <MdKeyboardArrowRight size={25} className="ml-1 group-hover:rotate-90 duration-300"/>
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home