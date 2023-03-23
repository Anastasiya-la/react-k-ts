
import React, {useCallback, useState} from 'react';
import './App.css';
import {AccordionContainer} from "./components/Accordion/Accordion";
import {RatingContainer, RatingValueType} from "./components/Rating/Rating";
import OnOff from "./components/OnOff/OnOff";
import  {
    UncontrolledAccordionContainer
} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating, UncontrolledRatingContainer} from "./components/UncontrolledRating/UncontrolledRating";
import UncontrolledOnOff, {UncontrolledOnOffContainer} from "./components/UncontrolledOnOff/UncontrolledOnOff";
import {SelectS} from "./components/Select/Select";

function App() {
    console.log('App rendering');
    const [switchOn, setSwitchOn] = useState<boolean>(false)
    const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    const [accordionCollapsed, setAccordionCollapsed] = useState(false)
    const [valueOfSelect, setValueOfSelect] = useState('2')
    const [itemsSelect, setItemsSelect] = useState([{title: '13', countryId: '1'}, {title: '18', countryId: '2'}, {title: '25', countryId: '3'}])
    const [items, setItems] = useState([{title: 'Ana', value: '1'}, {
        title: 'Nika',
        value: '2'
    }, {title: 'Mira', value: '3'}])

    const onClick = useCallback((value: string) => {
        alert(`id: ${value}`)
    },[])




    return (
        <div className='App'>
            <PageTitleContainer title={'This is App component'}/>
            <PageTitleContainer title={'My friends'}/>
            Article 1
            <RatingContainer value={ratingValue} onClick={setRatingValue}/>
            <AccordionContainer titleValue={'Users'} collapsed={accordionCollapsed} setCollapsed={setAccordionCollapsed}
                       items={items} onClick={onClick}/>

            Article 2
            <UncontrolledRatingContainer/>
            <UncontrolledAccordionContainer titleValue={'Menu'}/>
            {/*         <OnOffContainer on={switchOn} changeColor={setSwitchOn}/>*/}
            <UncontrolledOnOff setSwitchOn={setSwitchOn}/>
            <SelectS value={valueOfSelect} onChange={setValueOfSelect} items={itemsSelect}/>
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

const PageTitleContainer = React.memo(PageTitle)

export default App;
