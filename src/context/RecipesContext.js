import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const RecipesContext = createContext();

const RecipesProvider = (props) => {
  const [search, setSearch] = useState({ name: "", category: "" });
  const [recipes, setRecipes] = useState([]);

  let { name, category } = search;

  category = category.replace(/ /g, "_");
  const URL = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${name}&c=${category}`;

  useEffect(() => {
    if (name === "") return;
    const dataFromApi = async () => {
      const response = await axios.get(URL);
      setRecipes(response.data.drinks);
    };
    dataFromApi();
  }, [URL, name]);

  return (
    <RecipesContext.Provider value={{ setSearch, recipes }}>
      {props.children}
    </RecipesContext.Provider>
  );
};

export default RecipesProvider;
