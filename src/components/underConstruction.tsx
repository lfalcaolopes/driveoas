import { Barricade } from "@phosphor-icons/react";

function UnderConstruction() {

  return (
    <div className="bg-blue-200 grow flex flex-col justify-center items-center gap-8 text-slate-100 p-8">
      <Barricade size={150} weight="bold" className="text-slate-700"/>
      <h1 className="text-5xl font-bold text-slate-700">Em construção</h1>
    </div>
  )
}

export default UnderConstruction;