import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/home"
import Login from "./pages/login"
import SelectPermission from "./pages/selectPermission"
import SignUp from "./pages/signUp"

function App() {

  return (
    <BrowserRouter>
      <div className="h-screen flex flex-col">
          <Routes>
            <Route path="/" element={<SelectPermission />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/dashboard/*" element={<Home />} />
          </Routes>
        </div>
    </BrowserRouter>
  )
}

export default App
