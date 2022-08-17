import s from './../OnOff/OnOff.module.css';
import {FormEvent, useState} from "react";


type UncontrolledOnOffPropsType = {
    changeColor: (on: boolean) => void
}

const UncontrolledOnOff = (props: UncontrolledOnOffPropsType) => {
    const [on, setOn] = useState(false);

    const onClicked = () => {
        setOn(true);
        props.changeColor(true);
    }

    const offClicked = () => {
        setOn(false);
        props.changeColor(false);
    }

    return <div className={s.container}>
        <div onClick={onClicked}
             className={`${s.item} ${on ? s.active_on : s.item}`}>On
        </div>
        <div onClick={offClicked} className={`${s.item} ${on ? s.item : s.active_off}`}>Off</div>
        <div className={`${s.circle} ${on ? s.active_on : s.active_off}`}></div>
    </div>
}

export default UncontrolledOnOff;