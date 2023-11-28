import Navbar from "./Components/Navbar"
import Home from "./Components/Home"
import Sites from "./Components/Sites"
import About from "./Components/About"
import Portfolio from "./Components/Portfolio"
import Contact from "./Components/Contact"

function App() {

  return (
    <>
      <div className="">
        <Navbar />
        <Home />
        <About />
        <Portfolio />
        <Contact />
        <Sites />

      </div>
    </>
  )
}

export default App
