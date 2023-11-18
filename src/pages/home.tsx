import { List } from "@phosphor-icons/react"
import { Link, Route, Routes } from "react-router-dom"
import FileUpload from "../components/homeComponents/fileUpdoad"
import MyFiles from "../components/homeComponents/myFiles"
import Placeholder from "../components/homeComponents/placeholder"
import SharedFiles from "../components/homeComponents/sharedFiles"
import TrashFiles from "../components/homeComponents/trashFiles"
import SearchBar from "../components/searchBar"
import UnderConstruction from "../components/underConstruction"

function Home() {

  return (
    <div className="h-screen w-screen flex">
      <div className="flex flex-col flex-grow">

        <div className="flex justify-center items-center h-32">
          <SearchBar />
        </div>

        <div className="grow flex">
          <div className="flex flex-col gap-4 p-8 bg-blue-500 h-full w-80">
            <Link to="myFiles" className="px-8 py-4 bg-purple-800 text-white rounded flex justify-center items-center">Meus arquivos</Link>
            <Link to="sharedFiles" className="px-8 py-4 bg-green-800 text-white rounded flex justify-center items-center">Compartilhados comigo</Link>
            <Link to="trash" className="px-8 py-4 bg-blue-800 text-white rounded flex justify-center items-center">Lixeira</Link>
          </div>

          <div className="flex-grow flex flex-col">
            <div className="w-full h-20 bg-slate-100 p-2">
              <Link to="upload" className="h-full w-60 flex justify-center pr-2 items-center border-r border-slate-300 font-bold cursor-pointer">
                + Fazer upload de arquivo
              </Link>
            </div>

            <Routes>
              <Route path="/" element={<Placeholder />} />
              <Route path="upload" element={<FileUpload />} />
              <Route path="myFiles" element={<MyFiles />} />
              <Route path="trash" element={<TrashFiles />} />
              <Route path="sharedFiles" element={<SharedFiles />} />
              <Route path="underConstruction" element={<UnderConstruction />} />
            </Routes>
          </div>
        </div>

        
      </div>

      <div className="flex flex-col gap-4 p-8 bg-blue-500 text-white items-center h-full w-60">
        <List className="cursor-pointer p-4" size={100} weight="bold" />
      </div>

    </div>
  )
}

export default Home
