import { Link } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import { auth } from '../../services/firebaseConnection'
import { toast } from 'react-toastify'

export function DashboardHeader(){

  async function handleLogout(){
    await signOut(auth)
    toast.success("Usuario deslogado!")
  }

  return (
    <div className='w-f items-center flex h-10 bg-red-500 rounded-lg text-white font-medium gap-4 px-4 mb-4'>
      <Link className='hover:underline' to="/dashboard">
        Dashboard
      </Link>
       <Link className='hover:underline' to="/dashboard/new">
        Cadastrar carro
      </Link>

      <button className="ml-auto cursor-pointer hover:underline" onClick={handleLogout}>
        Sair da conta
      </button>
    </div>
  )
}