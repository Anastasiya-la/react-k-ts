import React, {useMemo, useState} from 'react';

export default {
    title: 'useMemo',
}

export const DifficultCounting = () => {
    let [a, setA] = useState(5)
    let [b, setB] = useState(5)

    let resultA;
    let resultB = 1;
    resultA = useMemo(() => {
        let tempResultA = 1;
        for (let i = 1; i <= a; i++) {
            tempResultA = tempResultA * i;
        }
        return tempResultA
    }, [a])

    for (let i = 1; i <= b; i++) {
        resultB = resultB * i;
    }

    return <>
        <input value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
        <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
        <div>Result a: {resultA}</div>
        <div>Result b: {resultB}</div>
    </>
}

const NewMessageCounterS = (props: { count: number }) => {
    console.log('Counter')
    return <div>{props.count}</div>
}

const UsersS = (props: { users: Array<string> }) => {
    console.log('Users')
    return <div>
        {props.users.map((u, i) => <div key={i}>
            {u}
        </div>)}
    </div>
}

const Users = React.memo(UsersS);

const NewMessageCounter = React.memo(NewMessageCounterS)


export const HelpsToReactMemo = () => {

    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Ana', 'Nika', 'Angelina'])

    const addUser = () => {
        const newUser = [...users, 'Lena']
        setUsers(newUser)
    }

    const newArray = useMemo(()=>{
        return users.filter(u => u.toLowerCase().indexOf('a') > -1)
    },[users]);

    return (<div>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <button onClick={addUser}>Add User</button>
            <NewMessageCounter count={counter}/>
            <Users users={newArray}/>
        </div>
    )
}

