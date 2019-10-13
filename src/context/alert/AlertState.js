import React, { useReducer } from 'react';
import { AlertContext } from './AlertContext';
import { AlertReducer } from './AlertReducer';

import {
    SHOW_ALERT,
    REMOVE_ALERT
} from '../types';

export const AlertState = (props) => {

    const initialState = null;

    const [state, dispatch] = useReducer(AlertReducer, initialState);

    //Set Alert
    const showAlert = (msg, type) => {
        dispatch({ type: SHOW_ALERT, payload: { msg, type } });
        //removeAlert();
        setTimeout(() => dispatch({ type: REMOVE_ALERT }), 3000)
    }
    //Remove Alert
    //const removeAlert = () => dispatch({ type: REMOVE_ALERT, payload: null})
    return (
        <AlertContext.Provider
            value={{
                alert: state,
                showAlert
            }}>
            {props.children}
        </AlertContext.Provider>
    )


}