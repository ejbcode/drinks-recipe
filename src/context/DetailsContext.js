import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
export const DetailsContext = createContext();

const DetailsProvider = (props) => {
  const [id, setId] = useState(null);
  const [detail, setDetail] = useState({});

  useEffect(() => {
    const URL = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
    if (!id) return;
    console.log("paso");
    const dataFromApi = async () => {
      const response = await axios.get(URL);
      setDetail(response.data.drinks[0]);
    };
    dataFromApi();
  }, [id]);
  console.log(detail);
  return (
    <DetailsContext.Provider value={{ id, setId, detail }}>
      {props.children}
    </DetailsContext.Provider>
  );
};

export default DetailsProvider;
