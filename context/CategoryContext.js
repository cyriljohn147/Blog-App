"use client"

import { createContext, useState} from "react";

export const { CategoryContext } = createContext();

export const CategoryProvider = ({children}) => {
  const [categoryId, setCaetgoryId] = useState("");

  const changeCategory = (catId) => {
    setCaetgoryId(catId);
  };

  return (
    <CategoryContext.Provider value={{categoryId, changeCategory}}>
      {children}
    </CategoryContext.Provider>
  );
}
