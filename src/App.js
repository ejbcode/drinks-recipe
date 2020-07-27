import React from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import CategoryProvider from "./context/CategoryContext";
import RecipesProvider from "./context/RecipesContext";
import DetailsProvider from "./context/DetailsContext";
import ListOfRecipes from "./components/ListOfRecipes";

function App() {
  return (
    <CategoryProvider>
      <RecipesProvider>
        <DetailsProvider>
          <Header />
          <div className="container mt-5">
            <div className="row">
              <Form />
              <ListOfRecipes />
            </div>
          </div>
        </DetailsProvider>
      </RecipesProvider>
    </CategoryProvider>
  );
}

export default App;
