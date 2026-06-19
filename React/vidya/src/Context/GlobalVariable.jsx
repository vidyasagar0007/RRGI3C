/* eslint-disable react-refresh/only-export-components */
import { createContext } from "react"
export const GlobalContext = createContext()

export const GlobalProvider = ({ children }) => {
    const land = "10 Acres"
    return (
        <GlobalContext.Provider value={{land}}>
            {children}
        </GlobalContext.Provider>
    )
}