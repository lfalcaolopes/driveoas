import Header from "./components/Header"
import SelectPermission from "./pages/selectPermission"

function App() {

  return (
    <div className="h-screen flex flex-col">
      <Header />
      <div className="w-screen h-full flex">
        {/* <Login /> */}
        {/* <SignUp /> */}
        <SelectPermission />
      </div>
    </div>
  )
}

export default App
