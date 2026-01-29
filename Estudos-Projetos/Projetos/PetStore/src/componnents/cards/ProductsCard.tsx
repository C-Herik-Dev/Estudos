import { BsCartPlus } from "react-icons/bs";

interface Product {
  id: number;
  price: number;
  cover: string;
  title: string;
}

export function ProductCard({ product }: { product: Product }) {
  return (
    <section className="w-full bg-white border border-gray-100 rounded-2xl px-6 py-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex flex-col">
      <div className="w-full h-40 flex items-center justify-center mb-4">
        <img
          className="max-h-full max-w-full object-contain"
          src={product.cover}
          alt={product.title}
        />
      </div>

      <p className="font-medium text-gray-800 mb-4 line-clamp-2">
        {product.title}
      </p>

      <div className="mt-auto flex items-center justify-between w-full">
        <strong className="text-green-500 text-lg">
          {product.price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </strong>

        <button className="bg-green-500 p-2 rounded-xl hover:bg-green-600 transition cursor-pointer flex-shrink-0">
          <BsCartPlus size={20} color="#fff" />
        </button>
      </div>
    </section>
  );
}