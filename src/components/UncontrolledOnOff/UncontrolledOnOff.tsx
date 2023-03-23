import s from './../OnOff/OnOff.module.css';
import React, {FormEvent, useCallback, useState} from "react";


type UncontrolledOnOffPropsType = {
    setSwitchOn: (on: boolean) => void
}

const UncontrolledOnOff = React.memo((props: UncontrolledOnOffPropsType) => {
    const [on, setOn] = useState(false);

    const onClicked = () => {
        setOn(true);
       props.setSwitchOn(true);
    }

    const offClicked = () => {
        setOn(false);
       props.setSwitchOn(false);
    }

    return <div className={s.container}>
        <div onClick={onClicked}
             className={`${s.item} ${on ? s.active_on : s.item}`}>On
        </div>
        <div onClick={offClicked} className={`${s.item} ${on ? s.item : s.active_off}`}>Off</div>
        <div className={`${s.circle} ${on ? s.active_on : s.active_off}`}></div>
    </div>
})

export const UncontrolledOnOffContainer = React.memo(UncontrolledOnOff)

export default UncontrolledOnOff;