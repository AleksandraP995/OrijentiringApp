import React from "react";
import { useContext } from "react";
import { searchWordContext, searchWordDispatchContext } from "../../SearchBarContext";
import "../../../App.css"

export const SearchFormComponent = ({ searchQuery, setSearchQuery }: any) => {

    return(

    <form action="/" method="get" >
        <label htmlFor="header-search">
            <span className="visually-hidden">Pretrazi vesti</span>
        </label>
        <input 
            className ="searchForm"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            type="text"
            //id="header-search"
            placeholder="Pretrazi vesti"
            name="s"
        />
        
    </form>
   )
}

export default SearchFormComponent;


// const searchWord = React.useContext(searchWordContext);
// const setSearchWord = useContext(searchWordDispatchContext);

// return <h1>{searchWord}</h1>