import React, { createContext, useReducer } from 'react'

const StateContext = createContext()

export default function StateProvider({reducer, initialState}) {
    return (
        <StateContext.Provider value={useReducer}>
            {children}
            
        </StateContext.Provider>
    )
}
