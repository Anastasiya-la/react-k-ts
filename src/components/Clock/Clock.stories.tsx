import React, {useState} from 'react';
import Clock from "./Clock";

export default {
    title: 'Clock',
    component: Clock
}




export const BaseExample = () => {
    const [date, setDate] = useState(new Date())
    return (
        <div>
           <Clock/>
        </div>
    )
}