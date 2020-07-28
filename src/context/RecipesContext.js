import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const RecipesContext = createContext();

const RecipesProvider = (props) => {
  const [search, setSearch] = useState(null);
  const [recipes, setRecipes] = useState([]);
  console.log(search);
  // category = category.replace(/ /g, "_");
  const URL = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?${search}`;

  useEffect(() => {
    if (search === null) return;
    const dataFromApi = async () => {
      const response = await axios.get(URL);
      setRecipes(response.data.drinks);
    };
    dataFromApi();
  }, [URL, search]);

  return (
    <RecipesContext.Provider value={{ setSearch, recipes }}>
      {props.children}
    </RecipesContext.Provider>
  );
};

export default RecipesProvider;
