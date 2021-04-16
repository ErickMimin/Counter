import { useEffect, useState } from 'react';
import './App.css';

const obtenerLocalStorage = () => {
  const tareasStr = localStorage.getItem('count');
  return JSON.parse(tareasStr) || {jump: 1, count: 0}
}

const actualizarLocalStorage = (data) => {
  localStorage.setItem('count', JSON.stringify(data))
}

function App() {
  const {jump: j, count: c} = obtenerLocalStorage();
  const [jump, setJump] = useState(j);
  const [count, setCount] = useState(c);

  useEffect(()=>{
    actualizarLocalStorage({jump, count})
  }, [jump, count])

  return (
    <div className="container">
      <div className="card">
        <h1>{count}</h1><br/>
        <button onClick={()=>{setCount(count - jump)}} className="primary">Less</button>
        <button onClick={()=>{setCount(count + jump)}} className="primary">More</button><br/>
        <button onClick={()=>{setJump(jump - 1)}} className="secondary">-</button>
        <span>{jump}</span>
        <button onClick={()=>{setJump(jump + 1)}} className="secondary">+</button>

      </div>
    </div>
  );
}

export default App;
