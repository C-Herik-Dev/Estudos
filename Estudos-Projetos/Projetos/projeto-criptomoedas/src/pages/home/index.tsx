import { useState, useEffect ,type FormEvent } from 'react'
import styles from './home.module.css'
import { BsSearch } from 'react-icons/bs'
import { Link, useNavigate } from 'react-router'

export interface CoinProps{
  id: string;
  name: string;
  symbol: string;
  marketCapUsd: string;
  priceUsd: string;
  volumeUsd24Hr: string;
  changePercent24Hr: string;
  supply: string;
  maxSupply: string;
  vwap24Hr: string;
  rank: string;
  explorer: string;
  formatedPrice?: string;
  formatedMarket?: string;
  formatedVolume?: string;
}

interface DataProp{
  data: CoinProps[];
}
 
export function Home() {
  const [input, setInput] = useState('')
  const [coins, setCoins] = useState<CoinProps[]>([])
  const [offset, setOffset] = useState(0)

  const navigate = useNavigate();

  useEffect(() => {
    getData();
  }, [offset])

  async function getData(){
    fetch(`https://rest.coincap.io/v3/assets?limit=10&offset=${offset}&apiKey=7d783cf95c1901061031fb0e4a4f0b8e63b307129df218fb35846ca8920ebbc6`)
    .then((response) => response.json())
    .then((data: DataProp) => {
      const coinsData = data.data;

      const price = Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      })
      const priceCompact = Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        notation: "compact"
      })
      
      const formattedCoins = coinsData.map((coin) => {
        const formatted = {
          ...coin,
          formatedPrice: price.format(Number(coin.priceUsd)),
          formatedMarket: priceCompact.format(Number(coin.marketCapUsd)),
          formatedVolume: priceCompact.format(Number(coin.volumeUsd24Hr)),
        }
        return formatted;
      })

      const listCoins = [...coins, ...formattedCoins];
      setCoins(listCoins);
      
    })
}

  function handleSubmit(e: FormEvent){
    e.preventDefault();
    if(input === "") return;
    navigate(`/detail/${input}`);
    setInput('');
  }

  function handleGetMore(){
    if(offset === 0){
      setOffset(10);
      return;
    }
    setOffset(offset + 10);
  }


  return (
    <main className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input type="text"
        placeholder="Digite o nome da criptomoeda"
        value={input}
        onChange={(e) => setInput(e.target.value)}
         />
        <button type="submit">
          <BsSearch size={30} color="#fff" />
        </button>
      </form>

      <table>
        <thead>
          <tr>
            <th scope="col">Moeda</th>
            <th scope="col">Valor mercado</th>
            <th scope="col">Preço</th>
            <th scope="col">Valume</th>
            <th scope="col">Mudaça 24h</th>
          </tr>
        </thead>

        <tbody id="tbody">

          {coins.length > 0 && coins.map( (item) => (
            <tr className={styles.tr} key={item.id}>
            <td className={styles.tdLabel} data-label="Moeda">

              <div className={styles.name}>
                <img
                  className={styles.coinIcon}
                  alt="logo Criptomoeda"
                  src={`https://assets.coincap.io/assets/icons/${item.symbol.toLocaleLowerCase()}2@2x.png` && `https://assets.coincap.io/assets/icons/${item.symbol.toLocaleLowerCase()}@2x.png` }
                />
                <Link to={`/detail/${item.id}`}>
                  <span>{item.name}</span> | {item.symbol}
                </Link>
              </div>
            </td>
            
            <td className={styles.tdLabel} data-label="Valor mercado">
              {item.formatedMarket}
            </td>

            <td className={styles.tdLabel} data-label="Preço">
              {item.formatedPrice}
            </td>

            <td className={styles.tdLabel} data-label="Valor mercado">
              {item.formatedVolume}
            </td>

            <td className={Number(item.changePercent24Hr) > 0 ? styles.tdProfit : styles.tdLoss} data-label="Mudança 24h">
              <span>{Number(item.changePercent24Hr).toFixed(2)}%</span>
            </td>
            </tr>
          ))}

        </tbody>  
      </table>

      <button className={styles.buttonMore} 
      onClick={handleGetMore}
      >
        Ver mais moedas...
      </button>

    </main>
  )
}