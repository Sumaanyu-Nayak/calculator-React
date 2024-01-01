'use client'
import { useState } from 'react';
import './App.css';
function App() {
  const [disp, setDisp] = useState("");

  const onACclick = () => {
    setDisp("")
  }
  const onDelclick = () => {
    var inp = document.getElementById('inpCalc').value;
    setDisp(inp.slice(0, -1))
  }
  const onEqlclick = () => {
    var inp = document.getElementById('inpCalc').value;
    setDisp(eval(inp))
  }

  const onButclick = (e) => {
    var inp = document.getElementById('inpCalc').value;
    setDisp(inp + e.target.innerText)
  }

  return (
    <>
    <div className="calculator">
        <input type="text" placeholder="0" id="inpCalc" value={disp}/>
        <div className="button set">
            <div className="set">
                <button onClick={onACclick} className="operator">AC</button>
                <button onClick={onDelclick} className="operator">DEL</button>
                <button onClick={onButclick} className="operator">**</button>
                <button onClick={onButclick} className="operator">/</button>
            </div>
            <div className="set">
                <button onClick={onButclick}>7</button>
                <button onClick={onButclick}>8</button>
                <button onClick={onButclick}>9</button>
                <button onClick={onButclick} className="operator">*</button>
            </div>
            <div className="set">
                <button onClick={onButclick}>4</button>
                <button onClick={onButclick}>5</button>
                <button onClick={onButclick}>6</button>
                <button onClick={onButclick} className="operator">-</button>
            </div>
            <div className="set">
                <button onClick={onButclick}>1</button>
                <button onClick={onButclick}>2</button>
                <button onClick={onButclick}>3</button>
                <button onClick={onButclick} className="operator">+</button>
            </div>
            <div className="set">
                <button onClick={onButclick}>00</button>
                <button onClick={onButclick}>0</button>
                <button onClick={onButclick}>.</button>
                <button onClick={onEqlclick} className="eqlBtn">=</button>
            </div>
        </div>
    </div></>
  );
}

export default App;
