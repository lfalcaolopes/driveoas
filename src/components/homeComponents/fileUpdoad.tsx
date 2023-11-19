import { useState } from "react";

interface Documento {
  titulo: string;
  imagem: string;
}

export default function FileUpload({ enviarDocumentos }: {enviarDocumentos: (documento: Documento) => void}) {
  const [dadosParaEnviar, setDadosParaEnviar] = useState("");

  function enviarDados() {
    enviarDocumentos({
      titulo: "Trabalho de campo",
      imagem: dadosParaEnviar,
    });
  }

  return (
    <div
      className="bg-blue-200 grow flex flex-col gap-8 text-slate-100 p-8"
    >
      <h1 className="text-3xl font-bold text-blue-700">
        Realize upload de arquivos
      </h1>
      <p className="text-xl font-bold text-blue-600">Digite o URL</p>

      <div className="flex justify-around items-center gap-32 px-8 text-blue-800">
        <input
          type="text"
          className="border border-blue-300 rounded w-full p-2"
          value={dadosParaEnviar}
          onChange={(e) => setDadosParaEnviar(e.target.value)}
        />
        <p className="text-lg font-bold text-blue-600">ou</p>
        <input
          type="file"
          className="border border-blue-300 rounded w-full p-2"
        />
      </div>

      <button
        type="submit"
        className="bg-slate-100 w-fit px-4 py-2 rounded-xl text-xl font-bold text-blue-600 shadow-inner self-end mr-32"
        onClick={enviarDados}
      >
        Feito
      </button>
    </div>
  );
}
