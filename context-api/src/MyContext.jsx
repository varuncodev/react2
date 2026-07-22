import { createContext, useContext, useState } from "react";

const myConte = createContext();


const MyContextProvider = ({ children }) => {
const [count, setCount] = useState(0);

  const value = {
    count,
    setCount,
  };

  return (<myConte.Provider value={value}>
    {children}
    </myConte.Provider>)
};

const useMYContext = () => {
  return useContext(myConte);
};

export { MyContextProvider, useMYContext };
