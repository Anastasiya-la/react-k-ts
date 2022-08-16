import s from './../OnOff/OnOff.module.css';
import {FormEvent, useState} from "react";


const UncontrolledOnOff = () => {
    const [on, setOn] = useState(false);

    const changeColorOn = () => {
        setOn(true);
    }

    const changeColorOff = () => {
        setOn(false);
    }

    return <div className={s.container}>
        <div onClick={changeColorOn}
             className={`${s.item} ${on ? s.active_on : s.item}`}>On
        </div>
        <div onClick={changeColorOff} className={`${s.item} ${on ? s.item : s.active_off}`}>Off</div>
        <div className={`${s.circle} ${on ? s.active_on : s.active_off}`}></div>
    </div>
}

export default UncontrolledOnOff;