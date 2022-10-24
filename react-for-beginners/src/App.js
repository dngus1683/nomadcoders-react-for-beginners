import './App.css';
import {memo, useState, useEffect} from 'react';
import Button from "./Button";
import Convert from './Convert';


const MemorizedBtn = memo(Button); // 부모 컴포넌트에서 state에 변화가 생기면 변한 것이 없는 자식 컴포넌트도 모두 같이 리랜더링이 된다.
                                // 이는 코드가 더욱 복잡해진다면 속도 저하의 원인이 될 수 있다.
                                // memo를 사용하면, state에 변화가 생긴 것들만 랜더링이 된다.

function App() {
  const [time, setTime] = useState(0);
  const [distance, setDistance] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [index, setIndex] = useState('-1');
  const [bvalue, setBvalue] = useState("Save changes");
  const [movie, setMovie] = useState("");
  const [count, setCount] = useState(0);
  const [showing, setShowing] = useState(false);



 
  const onChangeTime = (event)=>{
    setTime(event.target.value);
  }
  const onChangeDis = (event)=>{
    setDistance(event.target.value);
  }
  const reset = ()=> {
    setTime(0);
    setDistance(0);
  }
  const onFlip = ()=> {
    reset();
    setFlipped((current)=>!current);
  }
  const onSelect = (event)=> {
    setIndex(event.target.value);
  }




  const onClickBval = ()=>{
    setBvalue("convert");
  }
  const onChangeMovie = (event)=>{
    setMovie(event.target.value);
  }



  const onlyonce = ()=>{
    console.log("useEffect done well");
  }
  const onClickCount = ()=>{
    console.log("counting now");
    setCount((prev)=> prev + 1 );
  }
  


  useEffect(onlyonce,[]);
  useEffect(()=>{
    if(movie !== '' && movie.length > 5)
    console.log(movie,"is be searching...");
  },[movie]);



  function Hello(){
    useEffect(()=>{
      console.log("created Hello");
      return ()=> console.log("destroyed Hello"); // cleanup function.  component가 사라질 때 함수를 호출하고 싶을 때는 그 함수를 return하면 된다.
    },[])
    return(
      <h1>Hello</h1>
    );
  }
  const onClickShow = () =>{
    setShowing((prev)=>(!prev));
  };


  return (
    <div className="App">
      <h1>Super Converter</h1>
      <select value={index} onChange={onSelect}>
        <option value= '-1'>Select your units</option> 
        <option value='0'>Minutes & Hours</option>
        <option value='1'>Km & Miles</option> 
      </select>
      <hr/>
      {index === "-1" ? "Please select your units" : null}
      {index === "0" ? <Convert onChange={onChangeTime} value={time} disabled={flipped} onReset={reset} onFlip={onFlip} index={index}/> : null}
      {index === "1" ? <Convert onChange={onChangeDis} value={distance} disabled={flipped} onReset={reset} onFlip={onFlip} index={index}/> : null}
      <hr/>
      <MemorizedBtn text={bvalue} onClick={onClickBval}/>
      <MemorizedBtn text="Confirm"/>
      <hr/>
      <input type="text" placeholder="search movies" onChange={onChangeMovie}></input>
      {count}
      <button onClick={onClickCount}>Button</button>
      <hr/>
      {showing ? <Hello/> : null}
      <button onClick={onClickShow}>{showing ? "show" : "hide"}</button>
    </div>
  );
}

export default App;
