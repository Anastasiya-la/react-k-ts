import React, {useState} from 'react';
import Accordion from "./Accordion";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Accordion',
    component: Accordion,
}

const callback = action('change Accordion')
const onClickCallback = action('some item was clicked');

export const MenuCollapsedMode = () => <Accordion titleValue={'Menu'} collapsed={true} setCollapsed={callback}
                                                  items={[]} onClick={onClickCallback}/>
export const UsersUncollapsedMode = () => <Accordion titleValue={'Users'} collapsed={false} setCollapsed={callback}
                                                     items={[{title: 'Ana', value: '1'}, {
                                                         title: 'Nika',
                                                         value: '2'
                                                     }, {title: 'Mira', value: '3'}]} onClick={onClickCallback}/>

export const ModeChanging = () => {
    const [value, setValue] = useState(true)
    return <Accordion titleValue={'Users'} collapsed={value} setCollapsed={() => setValue(!value)}
                      items={[{title: 'Ana', value: '1'}, {
                          title: 'Nika',
                          value: '2'
                      }, {title: 'Mira', value: '3'}]} onClick={(value) => {
        alert(`user with ${value}`)
    }}/>
}
