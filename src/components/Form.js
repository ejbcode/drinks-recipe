import React, { useContext, useState } from "react";
import { CategoryContext } from "../context/CategoryContext";
import { RecipesContext } from "../context/RecipesContext";

const Form = () => {
  const { category } = useContext(CategoryContext);
  const { setSearch } = useContext(RecipesContext);

  const [drink, setDrink] = useState({});

  const handleChange = (event) => {
    setDrink({ ...drink, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearch(drink);
  };
  return (
    <form className="col-12" onSubmit={handleSubmit}>
      <fieldset>
        <legend>Find drink´s recipe by category or ingredients</legend>
      </fieldset>
      <div className="row mt-4">
        <div className="col-md-4">
          <input
            type="text"
            className="form-control"
            name="name"
            placeholder="Ingredients"
            onChange={handleChange}
          />
        </div>
        <div className="col-md-4">
          <select
            className="form-control"
            name="category"
            onChange={handleChange}
          >
            <option value="">-- Select a category --</option>
            {category.map((item) => (
              <option value={item.strCategory} key={item.strCategory}>
                {item.strCategory}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-4">
          <input type="submit" className="btn btn-block btn-primary" />
        </div>
      </div>
    </form>
  );
};

export default Form;
