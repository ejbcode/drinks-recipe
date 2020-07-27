import React, { useContext, useRef, useState } from "react";
import { DetailsContext } from "../context/DetailsContext";
import Modal from "./Modal";

const Recipe = ({ item }) => {
  const { setId } = useContext(DetailsContext);
  const [loading, setLoading] = useState(false);

  const modal = useRef(null);

  const handleClick = () => {
    setId(item.idDrink);
    modal.current.open();
    setLoading(true);
  };
  return (
    <div className="col-md-4 mb-3">
      <div className="card">
        <h2 className="card-header">{item.strDrink}</h2>
        <img
          src={item.strDrinkThumb}
          className="card-img-top"
          loading="lazy"
          alt={item.strDrink}
        />
        <div className="card-body">
          <button
            onClick={handleClick}
            type="button"
            className="btn btn-block btn-primary"
          >
            See recipe
          </button>
          <Modal ref={modal}></Modal>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
