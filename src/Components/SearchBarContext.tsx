
import { createContext, useState } from "react";

const searchWordContext = createContext("");
const searchWordDispatchContext = createContext({}); 

const SearchBarProvider = ({ children } :any) => {
    const [searchWord, setSearchWord] = useState('nanan');
    
    return (
        <searchWordContext.Provider value={searchWord}>
          <searchWordDispatchContext.Provider value={setSearchWord}>
            {children}
          </searchWordDispatchContext.Provider>
        </searchWordContext.Provider>
      );
}

export { SearchBarProvider, searchWordContext, searchWordDispatchContext };