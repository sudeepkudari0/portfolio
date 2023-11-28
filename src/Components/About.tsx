import React from 'react'
const About = () => {
  return (
    <div name="About" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
          <div className="pb-8">
            <h1 className="text-4xl font-bold inline border-b-4 border-gray-500">
              About
            </h1>
          </div>
          <div className>
            <p className="text-xl mt-20">
            "Hello! I'm Sudeep Kudari, a recent graduate with a degree in Information Science Engineering from New Horizon College of Engineering, Bengaluru. 
            My academic journey has equipped me with a solid foundation in HTML, CSS, Java, Javascript, Reactjs, Nodejs, SpringBoot, 
            and more. I have a passion for technology and a desire to continuously learn. I am excited to continue exploring my interests.
            I am enthusiastic about Web Development, Cyber Security and I am eager to contribute my skills. 
            In addition to my professional pursuits, I enjoy traveling, PC Gaming. My goal is to become a full-stack developer."</p>
          </div>
        </div>
    </div>
  )
}

export default About