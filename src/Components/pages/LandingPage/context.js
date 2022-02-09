import { createContext } from "react";
export const LoginContext=createContext();

export const ContextProvider=({children})=>{
const value={
    example:'adfsdgf'
}

return(
    <LoginContext.Provider value={value}>
        {children}
    </LoginContext.Provider>
    
)
}