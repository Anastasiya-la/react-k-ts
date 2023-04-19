import React, {useMemo, useState} from 'react';

export default {
    title: 'useState demo',
}


const generateData = () => {
    console.log('generate Data')
    return 122323829;
}

export const Example1 = () => {

    //const initialState = useMemo(generateData, []);

    const [counter, setCounter] = useState(generateData)

    // const changer = (state: number) => {return state + 1;}

    return (
        <div>
            <button onClick={() => setCounter(state => state + 1)}>+</button>
            {counter}
        </div>
    )
}