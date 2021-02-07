import React from "react"

export const Context = React.createContext()

export const Provider = (props) => {
    const origin = window.location.origin
    let backendHost = "http://localhost:8000"
    if (origin !== "http://localhost:3000") {
        backendHost = origin
    }
    let value = {
        backendHost: backendHost,
    }

    return(
        <Context.Provider value={value}>
            {props.children}
        </Context.Provider>
    )
}