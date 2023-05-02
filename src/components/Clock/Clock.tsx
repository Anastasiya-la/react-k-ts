import React, {useEffect, useState} from 'react';

const getDigitStrings = (number: number) => number < 10 ? '0' + number : number


const Clock = () => {
    const [date, setDate] = useState(new Date())
    useEffect(() => {
        const intervalId = setInterval(() => {
            console.log('tick')
            setDate(new Date())
        }, 1000)
        return () => {
            clearInterval(intervalId)
        }
    }, [])
    return (
        <div>
            <span>
              {getDigitStrings(date.getHours())}
            </span>
            :
            <span>
                {getDigitStrings(date.getMinutes())}
            </span>
            :
            <span>
                {getDigitStrings(date.getSeconds())}
            </span>
        </div>
    );
};

export default Clock;