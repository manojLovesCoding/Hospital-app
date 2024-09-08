import { createContext } from "react";
<<<<<<< HEAD
import { doctors } from "../assets/assets";

=======
import { doctors } from '../assets/assets'
>>>>>>> 3549b662091fc53978f0334157c9d9f5030423a1
export const AppContext = createContext()

const AppContextProvider = (props) => {
    const value = {
        doctors
    }

    return (
<<<<<<< HEAD
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>

=======
        <AppContextProvider value={value}>
            {props.children}
        </AppContextProvider>
>>>>>>> 3549b662091fc53978f0334157c9d9f5030423a1
    )
}

export default AppContextProvider