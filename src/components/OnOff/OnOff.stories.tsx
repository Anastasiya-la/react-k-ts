import React, {useState} from 'react';
import OnOff from "./OnOff";
import {action} from "@storybook/addon-actions";

export default {
    title: 'onOff',
    component: OnOff,
}

const callback = action('on or off clicked')

export const onMode = () => <OnOff on={true} changeColor={callback}/>
export const offMode = () => <OnOff on={false} changeColor={callback}/>

export const ModeChanging = () => {
    const [value, setValue] = useState(true);
    return <OnOff on={value} changeColor={setValue}/>
}


