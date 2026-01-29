import { HiMail } from "react-icons/hi";

export function Newsletter() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="bg-green-100/70 rounded-3xl py-14 px-6 flex flex-col items-center text-center gap-4">
        <div className="w-12 h-12 flex items-center justify-center bg-green-200 rounded-xl">
          <HiMail size={34} className="text-green-500/80" />
        </div>

        <h2 className="text-2xl font-bold text-gray-900">
          Junte-se à família PetStore
        </h2>

        <p className="text-sm text-gray-600 max-w-md">
          Receba dicas de especialistas e 10% de desconto no seu primeiro pedido.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-3 mt-4 w-full justify-center">
          <input
            type="email"
            placeholder="Seu endereço de email"
            className="px-4 py-3 w-full sm:w-64 rounded-full text-sm outline-none border bg-white border-gray-200 focus:ring-2 focus:ring-green-500"
          />
          <button className="w-full sm:w-auto px-6 py-3 bg-green-500 text-white rounded-full font-semibold hover:bg-green-600 transition">
            Inscrever-se
          </button>
        </div>
      </div>
    </section>
  );
}