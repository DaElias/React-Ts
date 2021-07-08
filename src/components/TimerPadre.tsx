import { useState } from 'react'
import { Timer } from './Timer'


export const TimerPadre = () => {
    const [segundo, setsegundo] = useState(1000);

    return (
        <>
            <span>
                <h2>milisegundos</h2>
                <button onClick={() => setsegundo(2000)}>2000</button>
                <button onClick={() => setsegundo(1000)}>1000</button>
                <button onClick={() => setsegundo(100)}>100</button>
                <button onClick={() => setsegundo(10)}>10</button>
                <button onClick={() => setsegundo(0)}>0</button>
              
                <Timer segundo={segundo} />
            </span>
        </>
    )
}
