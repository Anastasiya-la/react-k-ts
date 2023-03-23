import React, {useMemo, useState} from 'react';
import {SelectS} from "../components/Select/Select";

export default {
    title: 'SelectExampleUseMemo',
    component: SelectS
}



const NewMessageCounterS = (props: { count: number }) => {
    console.log('Counter')
    return <div>{props.count}</div>
}
const NewMessageCounter = React.memo(NewMessageCounterS)

export const Example1 = () => {

    const [counter, setCounter] = useState(0)
    const [value, setValue]  = useState('2')
    const [cities, setCities] = useState([
        {countryId: '1', title: 'Minsk', numberOfCitizens: 2020133},
        {countryId: '2', title: 'Moscow', numberOfCitizens: 13097539},
        {countryId: '3', title: 'Kiev', numberOfCitizens: 3800000},
        {countryId: '1', title: 'Grodno', numberOfCitizens: 357493},
        {countryId: '3', title: 'Lviv', numberOfCitizens: 717545},
        {countryId: '2', title: 'Saint-Petersbourg', numberOfCitizens: 5361900}
    ])
    const citiesWithLetterM = useMemo(() => {
        return cities.filter(c => c.title.toLowerCase().indexOf('m') > -1)
    }, [cities])
    return <div>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <NewMessageCounter count={counter}/>
        <SelectS value={value} onChange={setValue} items={citiesWithLetterM}/>
    </div>
}
export const Example2 = () => {

    const [counter, setCounter] = useState(0)
    const [value, setValue]  = useState('2')
    const [cities, setCities] = useState([
        {countryId: '1', title: 'Minsk', numberOfCitizens: 2020133},
        {countryId: '2', title: 'Moscow', numberOfCitizens: 13097539},
        {countryId: '3', title: 'Kiev', numberOfCitizens: 3800000},
        {countryId: '1', title: 'Grodno', numberOfCitizens: 357493},
        {countryId: '3', title: 'Lviv', numberOfCitizens: 717545},
        {countryId: '2', title: 'Saint-Petersbourg', numberOfCitizens: 5361900}
    ])
    const citiesFromBelarus = useMemo(() => {
        return cities.filter(c => c.countryId === '1')
    }, [cities])
    return <div>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <NewMessageCounter count={counter}/>
        <SelectS value={value} onChange={setValue} items={citiesFromBelarus}/>
    </div>
}
export const Example3 = () => {

    const [counter, setCounter] = useState(0)
    const [value, setValue]  = useState('2')
    const [cities, setCities] = useState([
        {countryId: '1', title: 'Minsk', numberOfCitizens: 2020133},
        {countryId: '2', title: 'Moscow', numberOfCitizens: 13097539},
        {countryId: '3', title: 'Kiev', numberOfCitizens: 3800000},
        {countryId: '1', title: 'Grodno', numberOfCitizens: 357493},
        {countryId: '3', title: 'Lviv', numberOfCitizens: 717545},
        {countryId: '2', title: 'Saint-Petersbourg', numberOfCitizens: 5361900}
    ])

    const citiesWhichHaveMoreThanTenMillion = useMemo(() => {
        return cities.filter(c => c.numberOfCitizens > 10000000)
    }, [cities])
    return <div>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <NewMessageCounter count={counter}/>
        <SelectS value={value} onChange={setValue} items={citiesWhichHaveMoreThanTenMillion}/>
    </div>
}



