import { createStore } from 'redux';
import { ReduxActionTypes } from './ActionTypes';

export interface CwAppState{
    uiLanguage: string
}

interface CwAppStateAction{
    type: string,
    data: string
}

var defaultState: CwAppState = {
    uiLanguage: "nl" // TODO Get this from some kind of environment or config file
}

function updateCwAppState(state = defaultState, action: CwAppStateAction){
    if (action.type === ReduxActionTypes.SET_UI_LANGUAGE){
        return {
            ...state,
            uiLanguage: action.data
        }
    }

    return state;
}

var store = createStore(updateCwAppState);

export default store;