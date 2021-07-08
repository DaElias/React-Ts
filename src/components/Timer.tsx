import React, { useState, useEffect, useRef } from 'react'

export const Timer = ({ segundo }: any) => {

    const [tiempo, setTiempo] = useState(0);
    const ref = useRef<NodeJS.Timeout>();


    useEffect(() => {
        ref.current && clearInterval(ref.current);

        ref.current = setInterval(() => {
            setTiempo(s => s + 1);
        }, segundo);
    }, [tiempo]);//tiempo

    const handleStop = ():void => setTiempo(0);
    const handleReplay = ():void => ref.current && clearInterval(ref.current);


    return (
        <>
            <h4>Timer: <small>{tiempo}</small></h4>
            <hr></hr>
            <button onClick={handleReplay}>Stop</button>
            <button onClick={handleStop}>Replay</button>
        </>
    )
}
