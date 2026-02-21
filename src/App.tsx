import Login from "./Components/Login"
import { Routes, Route } from "react-router-dom"
import Main from "./Components/Main"

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/main/*" element={<Main />} />
      </Routes>
    </div>
  )
}

export default App