import React from 'react';

type ItemType = {
    title: string
    value: string
}

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    setCollapsed: (collapsed: boolean) => void
    items: Array<ItemType> // ItemType[]
    onClick: (value: string) => void
}





function Accordion(props: AccordionPropsType) {
    console.log('Accordion rendering');
    return <div>
        <AccordionTitleContainer title={props.titleValue} collapsed={props.collapsed} setCollapsed={props.setCollapsed}/>
        {!props.collapsed && <AccordionBodyContainer items={props.items} onClick={props.onClick}/>}
    </div>


}
export const AccordionContainer = React.memo(Accordion)



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
const AccordionTitleContainer = React.memo(AccordionTitle)

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
const AccordionBodyContainer = React.memo(AccordionBody)

export default Accordion;