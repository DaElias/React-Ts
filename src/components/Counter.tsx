import { useState } from 'react'
import '../App.css';

const Counter = ({id}:any) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [count, setCount] = useState(0);
    const [numCambio, setNumCambio] = useState(1);
    /*
        useEffect(()=>{
            console.log(typeof(count));
        },[count]);
        useEffect(()=>{
            console.log(typeof(count));
        },[numCambio]);
     */

    const incrementar = (): void => {
        setCount(count + numCambio);
    }
    const decrementar = (): void => {
        setCount(count - numCambio);
    }
    const rest = (): void => {
        setCount(0);
        setNumCambio(1);
    }

    const handleImput = (event: any): void => {
        //console.log(event.target.value);
        let num = parseInt(event.target.value);
        setNumCambio(num);
    }

    return (
        <div className="CounterXD">
            <h1> UseState+Ts </h1>
            <span>
                <code>Valor: {count}</code>
                <hr></hr>
                <button onClick={() => incrementar()}>+{numCambio}</button>
                <button onClick={() => decrementar()}>-{numCambio}</button>
                <button onClick={rest}>Rest</button>
                <hr></hr>
                <code>Numero a Incrementar {numCambio}</code>
                <input type="number"
                    value={numCambio}
                    onChange={function (event: any) { handleImput(event) }} />
            </span>
            <h5>#{id}</h5>
        </div>
    )
}

export default Counter
