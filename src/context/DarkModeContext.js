import {useContext , createContext , useState} from "react"

const DarkModeContext = createContext() //Create context
export const useDarkModeContext = () => useContext(DarkModeContext)

export const DarkModeProvider = (props) => {
    const [darkMode , setDarkMode] = useState(false)

    const toggleDarkMode = () => {
        setDarkMode(!darkMode)
        if(!darkMode){
            document.body.firstElementChild.classList.add('darkMode')
        } else {
            document.body.firstElementChild.classList.remove('darkMode')
        }
        console.log(darkMode)
    }


    return (
        <DarkModeContext.Provider value={{darkMode , toggleDarkMode}}>
            {props.children}
        </DarkModeContext.Provider>
    )
}