import './App.css';
import {useState, useEffect} from 'react';

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [usd, setUsd] = useState(0);
  const [price, setPrice] = useState(0);
  const [coin, setCoin] = useState(0);

  const onChangeUsd = (event)=>{
    setUsd(event.target.value);
  }
  const onChangeSelect = (event)=>{
    setPrice(coins[event.target.value].quotes.USD.price);
    setCoin(0);
    setUsd(0);
  }
  const onClick = ()=>{
    setCoin(usd/price);
  }

  useEffect(()=>{
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then((response)=> response.json())
    .then((json)=> {
      console.log(json);
      setCoins(json);
      setLoading(false);
    });
  },[]);
  return (
    <div className="App">
      <h1>The Coins! {loading ? "":  `(${coins.length})`}</h1>
      {loading ? <strong>Loading...</strong> : 
        <div>
          <select onChange={onChangeSelect}>
            {coins.map((coin, index)=>(
              <option key={index} value={index}>{coin.name} ({coin.symbol}): {coin.quotes.USD.price} USD</option>
            ))}
          </select>
          <div>
            <input type='number' onChange={onChangeUsd} value={usd}/> 
            <button onClick={onClick}>cal</button>
          </div>
          <hr/>
          {coin}
        </div>
        
      }      
    </div>
  );
}

export default App;
