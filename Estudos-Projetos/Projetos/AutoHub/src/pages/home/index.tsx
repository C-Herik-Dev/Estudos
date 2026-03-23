import { Container } from "../../components/container";

export function Home() {
  
  return (
    <Container>
      <section className="flex items-center justify-center gap-2 bg-white w-full max-w-3xl rounded-lg p-4 mt-20">
          <input
            className="w-full max-w-6xl border border-gray-400 rounded h-9 mr-4 p-3 outline-none"
            type="text"
            placeholder="Digite o nome do carro..."
          />
          <button className="bg-red-500 text-white w-49 rounded h-9 font-medium cursor-pointer hover:scale-105 transition-all">
            Buscar
          </button>
        
      </section>
      <strong className='flex items-center justify-center mt-10 mb-3 text-xl'>
        <h1>Carros novos e usados em todo o Brasil</h1>
      </strong>
      <main className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-3 cursor-pointer">
        <section className="bg-white w-full rounded-lg hover:scale-105 transition-all shadow">
          <img 
          className="w-full rounded-lg mb-2 max-h-72"
          src="https://img1.icarros.com/dbimg/imgadicionalnoticia/4/115638_1.webp" 
          alt="carro a venda" />
          <p className="font-bold mt-1 mb-2 px-2">Carro AMG-ture</p>
          <div className="flex flex-col px-2">
            <span className="text-zinc-700 mt-1 mb-6">04/03/2026 - 26999 km</span>
          <strong className="text-black front-medium text-xl">R$ 239.000</strong>
          </div>
          <div className="w-full h-px bg-slate-200 my-2"></div>
          <div className="px-2 pb-2">
            <span className="text-black">São Paulo - SP</span>
          </div>
        </section>      
      </main>
    </Container>
  );
}
