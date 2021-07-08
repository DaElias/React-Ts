//rafc
import React from 'react'
import Counter from './Counter';

export const PrintComponet = ({ num }: any) => {
    //console.log(num, typeof (num));

    const iNum = [];
    for (let i = 0; i < num; i++) {
        //console.log(i);
        iNum.push(i + 1);
    }
    //console.log(iNum);

    return (
        <div className="container">

            {iNum.map((index) => {
                return <Counter id={index} key={index}  />
            })}
        </div>
    )
}
