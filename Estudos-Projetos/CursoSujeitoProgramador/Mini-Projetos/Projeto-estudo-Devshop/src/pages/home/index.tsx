import { BsCartPlus } from 'react-icons/bs'

export function Home(){
  return (
    <div>
      <main className="w-full max-w-7xl px-4 mx-auto">
        <h1 className="font-bold text-2xl mb-4 mt-10 text-center">Produtos em alta</h1>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-5">
          <section className='w-full lg:w-auto'>
            <img
              className='w-full rounded-lg max-h-70 mb-2'
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZJP8i_HT-mrVWOl-J_ZPbwrxyPQKVf-Q_xw&s"
              alt="Logo do produto"
            />
            <p className='font-medium mt-1 mb-2'>Teclado Gamer</p>

            <div className='flex gap-3 items-center'>
              <strong className='text-zinc-700/90'>
                R$ 500
              </strong>
              <button className='bg-zinc-900 p-1 rounded'>
                <BsCartPlus size={20} color="#fff"/>
              </button>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}