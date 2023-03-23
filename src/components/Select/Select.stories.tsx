import React, {useState} from 'react';

import {action} from "@storybook/addon-actions";
import {SelectS} from "./Select";

export default{
    title: 'Select',
    component: SelectS,
}

export const SelectWithValue = () => {
    const [value, setValue]  = useState('2')
    return <SelectS value={value} onChange={setValue} items={[
        {countryId: '1', title: 'Minsk'},
        {countryId: '2', title: 'Moscow'},
        {countryId: '3', title: 'Kiev'},
    ]}/>
}


export const SelectWithoutValue = () => {
    const [value, setValue]  = useState(null)
    return <SelectS value={value} onChange={setValue} items={[
        {countryId: '1', title: 'Minsk'},
        {countryId: '2', title: 'Moscow'},
        {countryId: '3', title: 'Kiev'},
    ]}/>
}