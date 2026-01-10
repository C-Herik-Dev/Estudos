import { BiLogOut } from 'react-icons/bi'
import { Link } from 'react-router'

import { signOut } from 'firebase/auth'
import { auth } from '../../services/firebaseConnection'

export function Header() {

  function handleLogout(){
    signOut(auth);
  }

  return(
    <header className='w-full max-w-2xl mt-4 px-1'>
      <nav className='w-full bg-slate-100 h-12 flex items-center justify-between rounded-md px-3 '>
        <div className='flex gap-4 font-medium '>
          <Link to='/' 
          className="relative text-slate-700 hover:text-slate-900
             after:content-[''] after:absolute after:left-0 after:-bottom-1
             after:w-0 after:h-0.5 after:bg-slate-900
             hover:after:w-full after:transition-all after:duration-200">
            Home
          </Link>

          <Link to='/admin'
          className="relative text-slate-700 hover:text-slate-900
             after:content-[''] after:absolute after:left-0 after:-bottom-1
             after:w-0 after:h-0.5 after:bg-slate-900
             hover:after:w-full after:transition-all after:duration-200">
            Links
          </Link>
          <Link to='/admin/social'
          className="relative text-slate-700 hover:text-slate-900
             after:content-[''] after:absolute after:left-0 after:-bottom-1
             after:w-0 after:h-0.5 after:bg-slate-900
             hover:after:w-full after:transition-all after:duration-200">
            Redes sociais
          </Link>
        </div>

        <button onClick={handleLogout} className='cursor-pointer'>
          <BiLogOut size={28} color="#db2629"/>
        </button>
      </nav>
    </header>
  )
}