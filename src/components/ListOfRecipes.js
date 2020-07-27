import React, { useContext } from "react";
import Recipe from "./Recipe";
import { RecipesContext } from "../context/RecipesContext";

const ListOfRecipes = () => {
  const { recipes } = useContext(RecipesContext);
  return (
    <div className="row mt-5">
      {recipes.map((item) => (
        <Recipe key={item.idDrink} item={item} />
      ))}
    </div>
  );
};

export default ListOfRecipes;
