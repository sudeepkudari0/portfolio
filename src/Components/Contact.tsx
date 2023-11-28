import React from 'react'

const Contact  = () => {
  return (
    <div name="Contact" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                    Contact
                </p>
                <p className="py-6">
                    Submit below form to get in touch with me
                </p>

            </div>
            <div className>
                <form action="https://getform.io/f/1dd45e6c-562a-4f55-a311-020a0cc91af0" method="POST" className="flex flex-col w-full max-w-lg md:w-1/2">
                   <input type="text" 
                   name="name"
                    placeholder="Enter your name"
                    className="p-2 bg-[#ccd6f6] border-2 rounded-md text-black focus:outline-none"
                   />
                   <input type="text" 
                   name="email"
                    placeholder="Enter your email"
                    className="my-4 p-2 bg-[#ccd6f6] border-2 rounded-md text-black focus:outline-none"
                   />
                   <textarea name="message"
                    placeholder="Enter your message"
                    rows="10"
                    className="p-2 bg-[#ccd6f6] border-2 rounded-md text-black focus:outline-none"
                   ></textarea>
                    <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300" type="submit">
                        Lets talk
                    </button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact