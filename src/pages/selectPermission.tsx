import { BookBookmark } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import secSaude from '../assets/secSaude.png'

function SelectPermission() {

  return (
    <div className=" w-full flex justify-center items-center mb-32">
      <div className=" h-[500px] w-[1000px] rounded-lg overflow-hidden flex shadow-[0px_9px_32px_10px_#00000010]">
        <div className='flex flex-col flex-grow gap-4 justify-between p-8'>
          <h2 className='font-bold text-3xl text-blue-500'>Quem é você?</h2>

          <div className='flex flex-col gap-2 px-8'>
            <button className="px-8 py-2 bg-purple-800 text-white rounded">Professor</button>
            <button className="px-8 py-2 bg-green-800 text-white rounded">Aluno</button>
          </div>

          <Link 
            to="/signup" 
            className="px-8 py-2 bg-blue-500 text-white rounded flex justify-center items-center"
            type="submit">
              Entrar
          </Link>
          <img className='' src={secSaude} alt="" />
        </div>
        <div className='flex flex-grow-2 gap-12 justify-center items-center w-full bg-blue-700 p-8'>
          <BookBookmark className='text-white' size={50} weight="bold" />
          <h1 className='font-bold text-4xl text-white'>Sistema de Educação</h1>
        </div>
      </div>
    </div>
  )
}

export default SelectPermission
