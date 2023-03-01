import React, {useState} from 'react';

export default {
    title: 'React.memo demo',
}

const NewMessageCounterSecret = (props: { count: number }) => {
    console.log('Counter')
    return <div>{props.count}</div>
}

const UsersSecret = (props: { users: Array<string> }) => {
    console.log('Users')
    return <div>
        {props.users.map((u, i) => <div key={i}>
            {u}
        </div>)}
    </div>
}

const Users = React.memo(UsersSecret);

const NewMessageCounter = React.memo(NewMessageCounterSecret)


export const Example1 = () => {

    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Ana', 'Nika', 'Angelina'])

    const addUser = () => {
        const newUser = [...users, 'Lena']
        setUsers(newUser)
    }

    return (<div>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <button onClick={addUser}>Add User</button>
            <NewMessageCounter count={counter}/>
            <Users users={users}/>
        </div>
    )
}
