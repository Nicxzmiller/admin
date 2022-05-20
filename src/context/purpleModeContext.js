import { createContext, useReducer } from "react";
import PurpleModeReducer from "./purpleModeReducer"

const INITIAL_STATE = {
    purpleMode:false
}

export const PurpleModeContext = createContext(INITIAL_STATE)

export const PurpleModeContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(PurpleModeReducer, INITIAL_STATE)

    return(
        <PurpleModeContext.Provider value={{purpleMode:state.purpleMode, dispatch}}>{children}</PurpleModeContext.Provider>
    )
}