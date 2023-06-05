import React, {useState} from 'react';
import Clock from "./Clock";

export default {
    title: 'Clock',
    component: Clock
}




export const BaseDigitalExample = () => {
    const [date, setDate] = useState(new Date())
    return (
        <div>
           <Clock mode={'digital'}/>
        </div>
    )
}


export const BaseAnalogExample = () => {
    const [date, setDate] = useState(new Date())
    return (
        <div>
            <Clock mode={'analog'}/>
        </div>
    )
}
