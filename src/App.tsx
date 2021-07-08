import { useState, useEffect } from 'react';
import './App.css';
import { PrintComponet } from './components/PrintComponet';
import { Usuarios } from './components/Usuarios';
import { TimerPadre } from './components/TimerPadre';



const App = () => {
  const [numP, setNumP] = useState(0);
  const [info, setInto] = useState("");
  const [limite, setLinite] = useState(50);

  const handleContador = (e: any) => {
    let num = e.target.value;
    if (num === "" || num < 0) {
      setNumP(0);
    } else {
      setNumP(parseInt(num));
    }
    if (num > limite) {
      setNumP(limite);
    }
  }

  useEffect(() => {
    if (numP === 0) {
      setInto("Ingrese un valor!!");
    } else {
      setInto("valor Correcto!");
    }
  }, [numP]);

  return (
    <div className="containerX">
      <div className="CounterXD">
        <TimerPadre />
      </div>
      <div className="CounterXD">
        <Usuarios />
      </div>
      <div className="CounterXD">
        <h2>Cantidad: {numP}/{limite}</h2>
        <input
          type="number"
          value={numP}
          onChange={(e: any) => { handleContador(e) }}
        ></input>
        <code>
          {info}
        </code>
      </div>
      <PrintComponet num={numP} />

    </div>
  )
}

export default App
