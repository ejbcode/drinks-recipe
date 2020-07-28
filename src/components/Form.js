import React, { useContext, useState } from "react";
import { CategoryContext } from "../context/CategoryContext";
import { RecipesContext } from "../context/RecipesContext";

const Form = () => {
  const { ingredient, category } = useContext(CategoryContext);
  const { setSearch } = useContext(RecipesContext);

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <form className="col-12">
      <fieldset>
        <legend>Find drink´s recipe by category or ingredients</legend>
      </fieldset>
      <div className="row mt-4">
        <div className="col-md-6">
          <select className="form-control" name="name" onChange={handleChange}>
            <option value="">-- Select a Ingredient --</option>
            {ingredient.map((item) => (
              <option
                value={`i=${item.strIngredient1}`}
                key={item.strIngredient1}
              >
                {item.strIngredient1}
              </option>
            ))}
          </select>
        </div>

        <div className="col-md-6">
          <select
            className="form-control"
            name="category"
            onChange={handleChange}
          >
            <option value="">-- Select a category --</option>
            {category.map((item) => (
              <option value={`c=${item.strCategory}`} key={item.strCategory}>
                {item.strCategory}
              </option>
            ))}
          </select>
        </div>
      </div>
    </form>
  );
};

export default Form;
