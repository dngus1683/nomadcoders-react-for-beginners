import './App.css';
import {useState, useEffect} from 'react';

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event)=>setToDo(event.target.value);
  const onSubmit = (event)=>{
    event.preventDefault(); // preventDefault()로 form에서 submit이 발생할 때 새로 실행하지 않게 해준다.
    if(toDo === '') return;
    setToDo("");
    setToDos((currentArray)=>[toDo, ...currentArray]);
  }

  return (
    <div className="App">
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={toDo} type="text" placeholder='Write your to do...'/>
        <button>Add To Do</button>
      </form>
      <hr/>
      <ul>
        {toDos.map((item, index)=><li key={index}>{item}</li>)}
      </ul>
    </div>
  );
}

export default App;
