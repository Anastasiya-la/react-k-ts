import React from "react";

type Itemtype = {
    title: string
    value: any
}

type SelectPropsType = {
    value: any
    onChange: (value: any) => void
    items: Itemtype[]
}

export function Select(props: SelectPropsType) {

    return (
        <div>
            <div>{}</div>
            {props.items.map(i=><div>{i.title}</div>)}
        </div>
    )
}

export default Select;