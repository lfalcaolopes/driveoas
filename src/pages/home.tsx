import { List, Upload } from "@phosphor-icons/react"
import SearchBar from "../components/searchBar"

function Home() {

  return (
    <div className="h-screen w-screen flex">
      <div className="flex flex-col flex-grow">

        <div className="flex justify-center items-center h-32">
          <SearchBar />
        </div>

        <div className="grow flex">
          <div className="flex flex-col gap-4 p-8 bg-blue-500 h-full w-80">
            <button className="px-8 py-4 bg-purple-800 text-white rounded">Meus arquivos</button>
            <button className="px-8 py-4 bg-green-800 text-white rounded">Compartilhados comigo</button>
            <button className="px-8 py-4 bg-blue-800 text-white rounded">Lixeira</button>
          </div>

          <div className="flex-grow flex flex-col">
            <div className="w-full h-20 bg-slate-100 p-2">
              <p className="h-full w-60 flex justify-center pr-2 items-center border-r border-slate-300 font-bold cursor-pointer">
                + Fazer upload de arquivo
              </p>
            </div>
          
            {/* <Placeholder /> */}
            <Upload />
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
