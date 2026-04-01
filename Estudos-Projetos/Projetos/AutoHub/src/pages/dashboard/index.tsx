import { Container } from '../../components/container'
import { DashboardHeader} from '../../components/panelheader'
import { FiTrash2 } from 'react-icons/fi'
import { useEffect, useState, useContext } from 'react'
import { collection, query, getDocs, where, doc, deleteDoc } from "firebase/firestore";
import { db, storage } from "../../services/firebaseConnection";
import { Link } from "react-router-dom";
import { AuthContext } from '../../contexts/AuthContext';
import { deleteObject, ref } from 'firebase/storage';

interface CarProps {
  id: string;
  name: string;
  year: string;
  price: string | number;
  km: string;
  city: string;
  images: CarImageProps[];
  uid: string;
}
interface CarImageProps {
  uid: string;
  name: string;
  url: string;
}

export function Dashboard() {
  const [cars, setCars] = useState<CarProps[]>([]);
  const [loadedImages, setLoadedImages] = useState<string[]>([]);
  const {user} = useContext(AuthContext)

  useEffect(() => {
    function loadCars() {
      if(!user?.uid){
        return;
      }
      const carsRef = collection(db, "cars");
      const queryRef = query(carsRef, where("uid", "==", user.uid));
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
      });
    }
    loadCars();
  }, [user]);

  function handleImageLoad(id: string){
    setLoadedImages((prevImageLoaded) => [...prevImageLoaded, id]);
  }

  async function handleDeleteCar(car: CarProps){
    const itemCar = car;
    const docRef = doc(db, "cars", itemCar.id);
    await deleteDoc(docRef);
    itemCar.images.map( async (image) => {
      const imagePath = `images/${image.uid}/${image.name}`
      const imageRef = ref(storage, imagePath)
      try{
        await deleteObject(imageRef)
        setCars(cars.filter(car => car.id !== itemCar.id))
      }catch(err){
        console.log("erro ao tentar exluir imagens." + err)
      }
    })
  }

  return(
    <Container>
      <DashboardHeader />

      <main className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
        {cars.map( car =>(
          <section key={car.id} className='w-full bg-white rounded-lg relative hover:scale-105 transition-all'>
          <button 
          onClick={()=> handleDeleteCar(car)}
          className='absolute bg-white w-14 h-14 rounded-full flex items-center justify-center right-2 top-2 cursor-pointer drop-shadow'> 
            <FiTrash2 size={26} color='#000'/>
          </button>
          <div
            className="w-full rounded-t-lg bg-slate-200 h-70"
            style={{ display: loadedImages.includes(car.id) ? 'none' : 'block' }}
          >
          </div>
          <img 
          className='w-full rounded-t-lg mb-2 max-h-70'
          src={car.images[0].url}
          onLoad={() => handleImageLoad(car.id)}
          style={{display: loadedImages.includes(car.id) ? 'block' : 'none'}}
          />
          <p className='font-bold mt-1 px-2 mb-2'>{car.name}</p>
          <div className='flex flex-col px-2'>
            <span className='text-zinz-700'>
              Ano {car.year} | {car.km} km
            </span>
            <strong className='text-black font-bold mt-4'>
              R$ {car.price}
            </strong>
          </div>
          <div className='w-full h-px bg-slate-200 my-2'></div>
          <div className='px-2 pb-2'>
            <span className='text-black'>
              {car.city}
            </span>
          </div>
        </section>
        ))}
      </main>
    </Container>
  )
}