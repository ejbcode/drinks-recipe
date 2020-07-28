import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
export const CategoryContext = createContext();

const CategoryProvider = (props) => {
  const [category, setCategory] = useState([]);
  const [ingredient, setIngredient] = useState([]);

  useEffect(() => {
    const URLI = `https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list`;
    const URLC = `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`;
    const dataFromApi = async () => {
      const [responseI, responseC] = await Promise.all([
        axios(URLI),
        axios(URLC),
      ]);
      setIngredient(responseI.data.drinks);
      setCategory(responseC.data.drinks);
      // setCategory(response.data.drinks);
    };
    dataFromApi();
  }, []);

  return (
    <CategoryContext.Provider value={{ ingredient, category }}>
      {props.children}
    </CategoryContext.Provider>
  );
};

export default CategoryProvider;
