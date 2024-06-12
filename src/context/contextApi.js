import React, { createContext, useState, useEffect } from "react";

import { datafetchfromapi } from "../utils/api";

export const  Context = createContext();

export  const AppContext = (props) => {
    const [searchQuery, setSearchQuery] = useState("");
    const [loading, setLoading] = useState(false);
    const [searchResults, setSearchResults] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("New");
    const [mobileMenu, setMobileMenu] = useState(false);

    useEffect(() => 
    {
        fetchSelectedCategoryData(selectedCategory);
    }, [selectedCategory]);

    const fetchSelectedCategoryData = (query) => {
        setLoading(true);
         datafetchfromapi(`search/?q=${query}`).then(({ contents }) => {
            console.log(contents);
            setSearchResults(contents);
            setLoading(false);
        });
    };

    const value= {
      loading,
      setLoading,
      searchResults,
      selectedCategory,
      setSelectedCategory,
      mobileMenu,
      setMobileMenu,
      searchQuery,
      setSearchQuery,
  }
    return (
        <Context.Provider value={value}>
            {props.children}
        </Context.Provider>
    );
};