import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

const CollectionPage = () => {
  const { mainCategory, subCategory } = useParams();

  if (mainCategory === "shows") {
    return <div></div>;
  }
  if (mainCategory === "movies") {
    return <div></div>;
  } else {
  }

  return <div>CollectionPage</div>;
};

export default CollectionPage;
