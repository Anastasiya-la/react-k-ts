import React from "react";
import {DigitalClockViewType} from "./Clock";

const getDigitStrings = (number: number) => number < 10 ? '0' + number : number

export const DigitalClockView: React.FC<DigitalClockViewType> = ({date}) => {
    return (
        <div>
            <span>
              {getDigitStrings(date.getHours())}
            </span>
            :
            <span>
                {getDigitStrings(date.getMinutes())}
            </span>
            :
            <span>
                {getDigitStrings(date.getSeconds())}
            </span>
        </div>
    );
}