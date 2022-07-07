// Router
import { Route, Routes } from "react-router-dom"

// Components
import Calculator from "./components/Calculator/Calculator"
import Todolist from "./components/Todolist/Todolist"
import Navbar from "./components/Navbar/Navbar"
import Home from "./components/Home/Home"

function App(){
  return(
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/todolist" element={<Todolist />} />
      </Routes>
    </div>
  )
}

export default App
