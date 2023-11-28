import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdMailOutline } from 'react-icons/md'
import { BsFillPersonLinesFill } from 'react-icons/bs'
const Sites = () => {
  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
        <ul>
            <li className='flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500'>
                <a href="https://www.linkedin.com/in/sudeep-kudari-1916aa27a/" className="flex justify-between items-center w-full text-white" target="_blank">
                    <>
                        LinkedIn <FaLinkedin size={30}/>
                    </>
                </a>
            </li>
        
            <li className='flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500'>
                <a href="https://github.com/sudeepkudari0" className="flex justify-between items-center w-full text-white" target="_blank">
                    <>
                        GitHub <FaGithub size={30}/>
                    </>
                </a>
            </li>
            <li className='flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500'>
                <a href="mailto:sudeepkudari0@gmail.com" className="flex justify-between items-center w-full text-white" target="_blank">
                    <>
                        Mail <MdMailOutline size={30}/>
                    </>
                </a>
            </li>
            <li className='flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500'>
                <a href="./UpdatedResume.pdf" className="flex justify-between items-center w-full text-white" target="_blank">
                    <>
                        Resume <BsFillPersonLinesFill size={30}/>
                    </>
                </a>
            </li>
        </ul>
    </div>
  )
}

export default Sites