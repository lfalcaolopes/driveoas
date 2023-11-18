
import { ShareNetwork, Trash } from "@phosphor-icons/react"
import FileCover from "../../assets/fileCover.png"


function TrashFiles() {

  return (
    <div className="bg-blue-200 grow flex flex-col gap-8 text-slate-100 p-8">
      <h1 className="text-3xl font-bold text-blue-700">Lixeira</h1>

      <div className="bg-slate-100 p-4 rounded-2xl text-slate-800 w-80 flex flex-col gap-4 cursor-pointer">
        <img src={FileCover} alt="" className="rounded-xl"/>
        <div className="flex justify-between items-center">
          <p className="font-bold ">TCC - Economia</p>

          <div className="flex items-center gap-4">
            <Trash size={20} weight="bold" className="cursor-pointer"/>
            <ShareNetwork size={20} weight="bold" className="cursor-pointer"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TrashFiles