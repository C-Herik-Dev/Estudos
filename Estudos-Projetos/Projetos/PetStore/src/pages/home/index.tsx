import heroImg from "../../assets/img/Cachorro.png";
import { api } from "../../services/api";
import { useState, useEffect, useContext } from "react";
import { ProductCard } from "../../componnents/cards/ProductsCard";
import { Newsletter } from "../../componnents/newsletter/Newsletter";

import { CartContext } from '../../context/CartContext'

export interface ProductsProps {
  id: number;
  price: number;
  cover: string;
  title: string;
  description: string;
  amount: number;
  total: number;
}

export function Home() {
  const [products, setProducts] = useState<ProductsProps[]>([]);
  const { addItemCart } = useContext(CartContext)

  useEffect(() => {
    async function loadProducts() {
      try {
        const response = await api.get("/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Erro ao buscar produtos", error);
      }
    }
    loadProducts();
  }, []);

  return (
    <main className="w-full bg-gray-100">
      <section className="max-w-7xl mx-auto px-6 py-12 md:py-20">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-14">
          <div className="w-full md:flex-1">
            <img
              src={heroImg}
              alt="Banner Hero"
              className="w-full h-64 md:h-auto aspect-[16/10] rounded-3xl object-cover shadow-sm"
            />
          </div>
          <div className="w-full md:flex-1 flex flex-col items-center md:items-start text-center md:text-left gap-5">
            <span className="inline-block px-3 py-1 text-sm font-bold text-green-500 bg-green-200/40 rounded-full">
              Liquidação de verão - 20% OFF
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Cuidado Premium <br className="hidden md:block" />
              <span className="text-green-500">para seu melhor amigo</span>
            </h1>
            <p className="text-gray-600 max-w-md">
              Descubra nossa seleção especial de alimentos de alta qualidade,
              brinquedos interativos e acessórios aconchegantes.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-2 md:mt-6">
              <button 
              className="px-7 py-3 bg-green-500 text-white rounded-full font-semibold hover:bg-green-600 transition">
                Comprar agora
              </button>
              <button className="px-7 py-3 border border-green-500/30 rounded-full font-semibold hover:bg-green-50 transition">
                Ver ofertas
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Produtos em alta</h1>
          <a className="font-medium text-green-500 hover:underline" href="#">
            Ver todos →
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </div>

      <Newsletter />
    </main>
  );
}