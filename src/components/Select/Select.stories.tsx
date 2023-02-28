import React, {useState} from 'react';
import Select from "./Select";
import {action} from "@storybook/addon-actions";

export default{
    title: 'Select',
    component: Select,
}

export const SelectWithValue = () => {
    const [value, setValue]  = useState('2')
    return <Select value={value} onChange={setValue} items={[
        {value: '1', title: 'Minsk'},
        {value: '2', title: 'Moscow'},
        {value: '3', title: 'Kiev'},
    ]}/>
}


export const SelectWithoutValue = () => {
    const [value, setValue]  = useState(null)
    return <Select value={value} onChange={setValue} items={[
        {value: '1', title: 'Minsk'},
        {value: '2', title: 'Moscow'},
        {value: '3', title: 'Kiev'},
    ]}/>
}