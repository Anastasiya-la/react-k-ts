import s from './OnOff.module.css';

type OnOffType = {
    on: boolean
}

const OnOff = (props: OnOffType) => {
    return <div className={s.container}>
        <div className={`${s.item} ${props.on ? s.active_on : s.item}`}>On</div>
        <div className={`${s.item} ${props.on ? s.item : s.active_off}`}>Off</div>
        <div className={`${s.circle} ${props.on ? s.active_on : s.active_off}`}></div>
    </div>
}

export default OnOff;