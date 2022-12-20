import React from 'react';

type ItemType = {
    title: string
    value: string
}

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    setCollapsed: (collapsed: boolean) => void
    items: Array<ItemType>
    onClick: (value: string) => void
}

function Accordion(props: AccordionPropsType) {
    console.log('Accordion rendering');

    return <div>
        <AccordionTitle title={props.titleValue} collapsed={props.collapsed} setCollapsed={props.setCollapsed}/>
        {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
    </div>


}

type AccordionTitlePropsType = {
    title: string
    collapsed: boolean
    setCollapsed: (collapsed: boolean) => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering');
    return <h3 onClick={() => {
        props.setCollapsed(!props.collapsed)
    }}>{props.title}</h3>

}

type AccordionBodyPropsType = {
    items: Array<ItemType>
    onClick: (value: string) => void
}

function AccordionBody(props: AccordionBodyPropsType) {
    console.log('AccordionBody rendering');
    return <ul>
        {props.items.map((i,index) => <li onClick={()=>{props.onClick(i.value)}} key={index}>{i.title}</li>)}
    </ul>
}

export default Accordion;