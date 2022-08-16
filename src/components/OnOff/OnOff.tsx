import s from './OnOff.module.css';
import {FormEvent, useState} from "react";

type OnOffPropsType = {
    on: boolean
    changeColorOn: () => void
    changeColorOff: () => void
}

const OnOff = (props: OnOffPropsType) => {


    return <div className={s.container}>
        <div onClick={() => props.changeColorOn()}
             className={`${s.item} ${props.on ? s.active_on : s.item}`}>On
        </div>
        <div onClick={() => props.changeColorOff()} className={`${s.item} ${props.on ? s.item : s.active_off}`}>Off
        </div>
        <div className={`${s.circle} ${props.on ? s.active_on : s.active_off}`}></div>
    </div>
}

export default OnOff;