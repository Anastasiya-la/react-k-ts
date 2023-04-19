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

export const SetTimeoutExample = () => {

    const [counter, setCounter] = useState(1)
    const [fake, setFake] = useState(1)

    console.log('SetTimeoutExample')

    /*   useEffect(() => {
           setTimeout(() => {
               console.log('setTimeOut')
               document.title = counter.toString()
           }, 1000)
       }, [])
   */
    useEffect(() => {
        setInterval(() => {
            setCounter(state => state + 1)
        }, 1000)
    }, [])


    /* setTimeout(() => {
         console.log('setTimeOut')
         document.title = counter.toString()
     }, 1000)*/

    return (
        <div>
            {/*<button onClick={() => setCounter(counter + 1)}>counter+</button>
            <button onClick={() => setFake(fake + 1)}>fake+</button>*/}
            Hello, counter: {counter} - fake :{fake}
        </div>
    )
}

