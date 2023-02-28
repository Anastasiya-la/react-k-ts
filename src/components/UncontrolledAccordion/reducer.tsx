import React from 'react';


export const TOGGLE_COLLAPSED = 'TOGGLE_COLLAPSED'


export type StateType = {
    collapsed: boolean
}


export type ActionType = {
    type: typeof TOGGLE_COLLAPSED
}

export const reducer = (state: StateType, action: ActionType)=> {
    switch (action.type){
        case TOGGLE_COLLAPSED:
            const stateCopy: StateType = {...state, collapsed: !state.collapsed}
            return stateCopy;
        default:
            throw new Error('Bad action type')
    }
    return state
}
