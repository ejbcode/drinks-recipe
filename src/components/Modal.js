import React, {
  useEffect,
  useImperativeHandle,
  useState,
  forwardRef,
  useCallback,
  useContext,
} from "react";
import { createPortal } from "react-dom";
import { DetailsContext } from "../context/DetailsContext";

import "../style.css";

const modalElement = document.getElementById("modal-root");

export function Modal({ children, fade = false, defaultOpened = false }, ref) {
  const [isOpen, setIsOpen] = useState(defaultOpened);

  const close = useCallback(() => setIsOpen(false), []);

  const { detail } = useContext(DetailsContext);
  console.log(detail);

  useImperativeHandle(
    ref,
    () => ({
      open: () => setIsOpen(true),
      close,
    }),
    [close]
  );

  const handleEscape = useCallback(
    (event) => {
      if (event.keyCode === 27) close();
    },
    [close]
  );

  useEffect(() => {
    if (isOpen) document.addEventListener("keydown", handleEscape, false);
    return () => {
      document.removeEventListener("keydown", handleEscape, false);
    };
  }, [handleEscape, isOpen]);

  const showIngredients = (detail) => {
    console.log("hjk");

    let ingredient = [];
    for (let i = 1; i < 16; i++) {
      if (detail[`strIngredient${i}`]) {
        ingredient.push(
          <li>
            {detail[`strIngredient${i}`]} {detail[`strMeasure${i}`]}
          </li>
        );
      }
    }
    console.log(ingredient);
    return ingredient;
  };

  return createPortal(
    isOpen ? (
      <div className={`modal ${fade ? "modal-fade" : ""}`}>
        <div className="modal-overlay" onClick={close} />
        <span
          role="button"
          className="modal-close"
          aria-label="close"
          onClick={close}
        ></span>
        <div className="modal-body">
          <h2>{detail.strDrink}</h2>
          <h3 className="mt-4">Instructions</h3>
          <p>{detail.strInstructions}</p>
          <img src={detail.strDrinkThumb} alt="" className="img-fluid my-4" />

          <h3>Ingredients</h3>
          <ul>{showIngredients(detail)}</ul>
        </div>
      </div>
    ) : null,
    modalElement
  );
}

export default forwardRef(Modal);
