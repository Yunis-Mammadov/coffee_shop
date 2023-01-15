import {Routes, Route }  from "react-router-dom"
import About from "../pages/About/inxdex"
import Home from "../pages/Home"

const Routing = () => {
    return(
        <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/about" element={<About/>}/>
        </Routes>
    )
}

export default Routing;