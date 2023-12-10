
const Portfolio = () => {
  
  return (
    <div name="Portfolio" className="w-full bg-gradient-to-b from-gray-800 to-black text-white md:h-screen">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">Portfolio</p>
            </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          <div className="shadow-md shadow-gray-600 rounded-lg">
            <h2 className="text-2xl font-bold m-3">Kanban-App-Node</h2>
              <img src="./kanban-node.png" className="rounded-md duration-200 hover:scale-105"/>
              <div className="flex items-center justify-center">
                  <button onClick={() => window.open("http://65.2.78.89/")} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Demo</button>
                  <button onClick={() => window.open("https://github.com/sudeepkudari0/kanban-app-node")} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Code</button>
              </div>
          </div>
          <div className="shadow-md shadow-gray-600 rounded-lg">
            <h2 className="text-2xl font-bold m-3">Book-Matching-App</h2>
              <img src="./book-match.png" className="rounded-md duration-200 hover:scale-105"/>
              <div className="flex items-center justify-center">
                  <button onClick={() => window.open("http://13.127.208.227:5000/")} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Demo</button>
                  <button onClick={() => window.open("https://github.com/sudeepkudari0/Reach-Best-Assignment")} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Code</button>
              </div>
          </div>
          
          <div className="shadow-md shadow-gray-600 rounded-lg">
            <h2 className="text-2xl font-bold m-3">Responsive-DashBoard</h2>
              <img src="./responsive.png" className="rounded-md duration-200 hover:scale-105"/>
              <div className="flex items-center justify-center">
                  <button onClick={() => window.open("https://responsive-dashboard-app.vercel.app")} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Demo</button>
                  <button onClick={() => window.open("https://github.com/sudeepkudari0/Responsive-Dashboard-App")} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Code</button>
              </div>
          </div>
          <div className="shadow-md shadow-gray-600 rounded-lg">
            <h2 className="text-2xl font-bold m-3">Crypto-Dash</h2>
              <img src="./crypto.png" className="rounded-md duration-200 hover:scale-105"/>
              <div className="flex items-center justify-center">
                  <button onClick={() => window.open("https://crypto-dash-omega-one.vercel.app")} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Demo</button>
                  <button onClick={() => window.open("https://github.com/sudeepkudari0/Crypto-Dash")} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Code</button>
              </div>
          </div>
          <div className="shadow-md shadow-gray-600 rounded-lg">
            <h2 className="text-2xl font-bold m-3">DSA-WEB</h2>
              <img src="./dsa.png" className="rounded-md duration-200 hover:scale-105"/>
              <div className="flex items-center justify-center">
                  <button onClick={() => window.open("https://github.com/sudeepkudari0/DSA-WEB")} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Demo</button>
                  <button onClick={() => window.open("https://github.com/sudeepkudari0/DSA-WEB")} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Code</button>
              </div>
          </div>
          <div className="shadow-md shadow-gray-600 rounded-lg">
            <h2 className="text-2xl font-bold m-3">kanban-App-Spring</h2>
              <img src="./kanban-node.png" className="rounded-md duration-200 hover:scale-105"/>
              <div className="flex items-center justify-center">
                  <button onClick={() => window.open("https://github.com/sudeepkudari0/kanban-app-spring")} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Demo</button>
                  <button onClick={() => window.open("https://github.com/sudeepkudari0/kanban-app-spring")} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Code</button>
              </div>
          </div>
      </div>

            
        </div>
    </div>
  )
}

export default Portfolio