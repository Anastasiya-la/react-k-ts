import React, {useState} from "react";
import s from './Select.module.css'

export type Itemtype = {
    title: string
    value: string
}

type SelectPropsType = {
    value: any
    onChange: (value: any) => void
    items: Itemtype[]
}

export function Select(props: SelectPropsType) {
    const [active, setActive] = useState(false)
    const [hoveredElementValue, setHoveredElementValue]=useState(props.value)

    const hoveredItem = props.items.find(i => i.value === hoveredElementValue)

    const activateSelectForm = () => {
        setActive(!active)
    }
    const onOptionClick = (value: string) => {
        props.onChange(value)
        activateSelectForm()
    }
    const selectedItem = props.items.find(i => i.value === props.value)
    return (
        <div className={s.select}>
            <span onClick={activateSelectForm} className={s.main}>{selectedItem && selectedItem.title}</span>
            {active && <div className={s.options}>{props.items.map(i => <div onMouseEnter={()=> setHoveredElementValue(i.value)} className={`${s.item} ${hoveredItem === i ? s.selected : ''}`} key={i.value} onClick={() => {
                onOptionClick(i.value)
            }
            }>{i.title}</div>)}</div>}
        </div>
    )
}


export default Select;