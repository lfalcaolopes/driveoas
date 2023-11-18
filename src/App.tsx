import { ReactNode } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Home from "./pages/home"
import Login from "./pages/login"
import SelectPermission from "./pages/selectPermission"
import SignUp from "./pages/signUp"

const LayoutWithHeader = ({children}: {children: ReactNode}) => (
  <div>
    <Header />
    {children}
  </div>
);

const LayoutWithoutHeader = ({children}: {children: ReactNode}) => (
  <div>
    {children}
  </div>
);


function App() {

  return (
    <BrowserRouter>
      <div className="h-screen flex flex-col">
        <div className="w-screen h-full flex">
          <Routes>
            <Route path="/" element={<LayoutWithHeader><SelectPermission /></LayoutWithHeader>} />
            <Route path="/login" element={<LayoutWithHeader><Login /></LayoutWithHeader>} />
            <Route path="/signup" element={<LayoutWithHeader><SignUp /></LayoutWithHeader>} />
            <Route path="/dashboard/*" element={<LayoutWithoutHeader><Home /></LayoutWithoutHeader>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
