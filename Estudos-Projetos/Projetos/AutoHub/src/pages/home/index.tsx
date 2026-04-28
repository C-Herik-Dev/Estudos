import { Container } from "../../components/container";
import { useState, useEffect } from "react";
import { collection, query, getDocs, orderBy, where } from "firebase/firestore";
import { db } from "../../services/firebaseConnection";
import { Link } from "react-router-dom";

interface CarProps {
  id: string;
  name: string;
  year: string;
  price: string | number;
  uid: string;
  km: string;
  city: string;
  images: CarImageProps[];
}
interface CarImageProps {
  uid: string;
  name: string;
  url: string;
}

export function Home() {
  const [cars, setCars] = useState<CarProps[]>([]);
  const [loadedImages, setLoadedImages] = useState<string[]>([]);
  const [input, setInput] = useState("")
  useEffect(() => {
    loadCars();
  }, []);

  function loadCars() {
      const carsRef = collection(db, "cars");
      const queryRef = query(carsRef, orderBy("created", "desc"));
      getDocs(queryRef).then((snapshot) => {
        let listcars = [] as CarProps[];
        snapshot.forEach((doc) => {
          listcars.push({
            id: doc.id,
            name: doc.data().name,
            year: doc.data().year,
            price: doc.data().price,
            uid: doc.data().uid,
            city: doc.data().city,
            km: doc.data().km,
            images: doc.data().images,
          });
        });
        setCars(listcars);
      })};

  function handleImageLoad(id: string){
    setLoadedImages((prevImageLoaded) => [...prevImageLoaded, id]);
  }

  async function handleSearchCar() {
    if(input === ''){
      loadCars();
      return;
    }
    setCars([]);
    setLoadedImages([]);

    const q = query(collection(db, "cars"), 
    where("name", ">=", input.toUpperCase()),
    where("name", "<=", input.toUpperCase() + "\uf8ff")
    )
    const querySnapshot = await getDocs(q)
    let listcars = [] as CarProps[];

    querySnapshot.forEach((doc)=> {
          listcars.push({
            id: doc.id,
            name: doc.data().name,
            year: doc.data().year,
            price: doc.data().price,
            uid: doc.data().uid,
            city: doc.data().city,
            km: doc.data().km,
            images: doc.data().images,
          });
        });
        setCars(listcars)
  }

  return (
    <Container>
      <section className="flex items-center justify-center gap-2 bg-white w-full max-w-3xl rounded-lg p-4 mt-20 mx-auto">
        <input
          className="w-full max-w-6xl border border-gray-400 rounded h-9 mr-4 p-3 outline-none"
          type="text"
          placeholder="Digite o nome do carro..."
          value={input}
          onChange={(e) => setInput(e.target.value) }
        />
        <button 
        onClick={handleSearchCar}
        className="bg-red-500 text-white w-49 rounded h-9 font-medium cursor-pointer hover:scale-105 transition-all">
          Buscar
        </button>
      </section>
      <strong className="flex items-center justify-center mt-10 mb-3 text-xl">
        <h1>Carros novos e usados em todo o Brasil</h1>
      </strong>

      <main className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {cars.map((car) => (
          <Link key={car.id} to={`/car/${car.id}`}>
            <section
              className="bg-white w-full max-w-118 mx-auto rounded-lg hover:scale-105 transition-all shadow"
            >
              <div
              className="w-full rounded-t-lg bg-slate-200 h-72"
              style={{ display: loadedImages.includes(car.id) ? 'none' : 'block' }}
              ></div>
              <img
                className="w-full rounded-t-lg mb-2 max-h-72 cursor-pointer"
                src={car.images[0].url}
                alt={car.name}
                onLoad={() => handleImageLoad(car.id)}
                style={{display: loadedImages.includes(car.id) ? 'block' : 'none'}}
              />
              <p className="font-bold mt-1 mb-2 px-2">{car.name}</p>
              <div className="flex flex-col px-2">
                <span className="text-zinc-700 mt-1 mb-6">
                  {car.year} - {car.km} km
                </span>
                <strong className="text-black front-medium text-xl">
                  R${" "}
                  {car.price.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </strong>
              </div>
              <div className="w-full h-px bg-slate-200 my-2"></div>
              <div className="px-2 pb-2">
                <span className="text-black">{car.city}</span>
              </div>
            </section>
          </Link>
        ))}
      </main>
    </Container>
  );
}
