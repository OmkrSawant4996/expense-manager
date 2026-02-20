import Login from "./Components/Login"
import { Routes, Route } from "react-router-dom"
import Dashboard from "./Components/Dashboard"

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  )
}

export default App