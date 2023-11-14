import secSaude from '../assets/secSaude.png'

function Header() {

  return (
    <div className='w-full flex justify-end py-6 px-16'>
      <img className='h-20' src={secSaude} alt="" />
    </div>
  )
}

export default Header
