import React, {useEffect, useMemo, useState} from 'react';

export default {
    title: 'useEffect demo',
}


export const SimpleExample = () => {

    const [counter, setCounter] = useState(1)
    const [fake, setFake] = useState(1)

    console.log('SimpleExample')

    useEffect(() => {
        console.log('use Effect every render')
        document.title = counter.toString()
    })


    useEffect(() => {
        console.log('use Effect first render and every counter change')
        document.title = counter.toString()
    }, [counter])

    useEffect(() => {
        console.log('use Effect only first render(componentDidMount)')
        document.title = counter.toString()
    }, [])

    return (
        <div>
            <button onClick={() => setCounter(counter + 1)}>counter+</button>
            <button onClick={() => setFake(fake + 1)}>fake+</button>
            Hello, {counter} {fake}
        </div>
    )
}