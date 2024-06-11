import React, {
    createContext,
    useState,
    useContext,
    useEffect,
    ReactNode,
  } from "react";
   
  interface ThemeContextProps {
    isDarkMode: boolean;
    toggleTheme: () => void;
  }
   
  const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);
   
  export const useTheme = (): ThemeContextProps => {
    const context = useContext(ThemeContext);
    if (!context) {
      throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
  };
   
  interface ThemeProviderProps {
    children: ReactNode;
  }
   
  export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const savedTheme = localStorage.getItem("theme") || "light";
    const [isDarkMode, setIsDarkMode] = useState(savedTheme === "dark");
   
    useEffect(() => {
      document.body.setAttribute("data-theme", isDarkMode ? "dark" : "light");
      localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    }, [isDarkMode]);
   
    const toggleTheme = () => {
      setIsDarkMode((prevMode) => !prevMode);
    };
   
    const theme: ThemeContextProps = {
      isDarkMode,
      toggleTheme,
    };
   
    return (
      <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
  };