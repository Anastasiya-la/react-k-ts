import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import OnOff from "./components/OnOff/OnOff";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import UncontrolledOnOff from "./components/UncontrolledOnOff/UncontrolledOnOff";

function App() {
    console.log('App rendering');

    const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    const [onOffOnValue, setOnOffOnValue] = useState<boolean>(false)


    const changeColorOff = () => {
        setOnOffOnValue(false);
    }

    return (
        <div className='App'>
            <PageTitle title={'This is App component'}/>
            <PageTitle title={'My friends'}/>
            Article 1
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <Accordion titleValue={'Users'} collapsed={accordionCollapsed} setCollapsed={setAccordionCollapsed}/>

            Article 2
            <UncontrolledRating/>
            <UncontrolledAccordion titleValue={'Menu'}/>
            <OnOff on={onOffOnValue} changeColorOn={() => setOnOffOnValue(true)}
                   changeColorOff={() => setOnOffOnValue(false)}/>
            <UncontrolledOnOff/>
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log('PageTitle rendering');
    return <h1>{props.title}</h1>
}

export default App;
