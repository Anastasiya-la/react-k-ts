import s from './OnOff.module.css';
import React from 'react';

type OnOffPropsType = {
    on: boolean
    changeColor: (on: boolean) => void
}

const OnOff = (props: OnOffPropsType) => {


    return <div className={s.container}>
        <div onClick={() => props.changeColor(true)}
             className={`${s.item} ${props.on ? s.active_on : s.item}`}>On
        </div>
        <div onClick={() => props.changeColor(false)} className={`${s.item} ${props.on ? s.item : s.active_off}`}>Off
        </div>
        <div className={`${s.circle} ${props.on ? s.active_on : s.active_off}`}></div>
    </div>
}

export const OnOffContainer = React.memo(OnOff)

export default OnOff;