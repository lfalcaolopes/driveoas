import { ShareNetwork, Trash } from "@phosphor-icons/react";
import { useState } from "react";

interface Documento {
  titulo: string;
  imagem: string;
}

interface MyFilesProps {
  documentos: Documento[];
}

export default function MyFiles({ documentos }: MyFilesProps) {
  const [docs, setDocumentos] = useState(documentos);

  function removeDocumento(documento: Documento){
    const updatedDocs = docs.filter((doc) => doc !== documento);
    setDocumentos(updatedDocs);
  }
  return (
    <>
      <div className="bg-blue-200 grow flex flex-col gap-8 text-slate-100 p-8">
        <h1 className="text-3xl font-bold text-blue-700">Meus arquivos</h1>

        <div className="flex gap-8">
        {docs.map((documento, index) => (
          <div>
            <div
              key={index}
              className="bg-slate-100 p-4 rounded-2xl text-slate-800 w-80 flex flex-col gap-4 cursor-pointer"
            >
              <img
                src={documento.imagem}
                alt={documento.titulo}
                className="rounded-xl"
              />
              <div className="flex justify-between items-center">
                <p className="font-bold ">{documento.titulo}</p>

                <div className="flex items-center gap-4">
                  <Trash size={20} weight="bold" className="cursor-pointer" onClick={() => removeDocumento(documento)} />
                  <ShareNetwork
                    size={20}
                    weight="bold"
                    className="cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
        </div>
      </div>
    </>
  );
}
