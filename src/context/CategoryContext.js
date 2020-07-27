import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
export const CategoryContext = createContext();

const CategoryProvider = (props) => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const URL = `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`;
    const dataFromApi = async () => {
      const response = await axios.get(URL);
      setCategory(response.data.drinks);
    };
    dataFromApi();
  }, []);

  return (
    <CategoryContext.Provider value={{ category }}>
      {props.children}
    </CategoryContext.Provider>
  );
};

export default CategoryProvider;
