import { Route,Routes } from "react-router-dom"
import Home from "./components/Home"
function App() {
  return (
    <div className="mx-auto">
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      </Routes>
      </div>
  )
}

export default App
