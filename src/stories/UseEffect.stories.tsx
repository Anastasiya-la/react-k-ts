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

export const SetIntervalExample = () => {

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
        const intervalId = setInterval(() => {
            setCounter(state => state + 1)
        }, 1000)
        return () => {
            clearInterval(intervalId)
        }
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

export const ResetEffectExample = () => {

    const [counter, setCounter] = useState(1)

    console.log('ResetEffectExample')

    useEffect(() => {
        console.log('Effect occurred' + counter)
        return () => {
            console.log('RESET EFFECT' + counter)
        }
    }, [counter])


    const increase = () => {
        setCounter(counter + 1)
    }
    return (
        <div>
            Hello, counter: {counter}
            <button onClick={increase}>+</button>
        </div>

    )
}

export const KeysTrackerExample = () => {

    const [text, setText] = useState('')

    console.log(text)

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            console.log(e.key)
            setText(text + e.key)
        }
        window.addEventListener('keypress', handler)
        return () => {
            window.removeEventListener('keypress', handler)
        }

    }, [text])


    return (
        <div>
            Typed text: {text}
        </div>

    )
}

export const SetTimeoutExample = () => {

    const [text, setText] = useState('')

    console.log(text)

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            console.log('Timeout expired')
            setText('3 seconds passed')
        }, 3000)
        return () => {
            clearTimeout(timeoutId)
        }

    }, [text])


    return (
        <div>
            {text}
        </div>

    )
}