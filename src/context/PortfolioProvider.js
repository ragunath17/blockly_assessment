import { useState, useEffect } from "react";
import PortfolioContext from "./PortfolioContext";

const PortfolioProvider = ({ children }) => {
    const [activeSection, setActiveSection] = useState('home')
    const [isDarkMode, setIsDarkMode] = useState(false)

    const toggleTheme = () => setIsDarkMode(prev => !prev)

    useEffect(() => {
        document.body.style.backgroundColor = isDarkMode ? '#000000' : '#FFFFFF';
        document.body.style.color = isDarkMode ? '#FFFFFF' : '#000000';
    }, [isDarkMode]);

    return (
        <PortfolioContext.Provider value={{
            activeSection, setActiveSection, isDarkMode, toggleTheme
        }}>
            {children}
        </PortfolioContext.Provider>
    )

}

export default PortfolioProvider
