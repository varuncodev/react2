import React from "react";
import { useSelector, useDispatch } from "react-redux";
// import {addToProduct} from './redux/action/action'
import Product from "./Product";
import { addToProduct, increment } from "./redux/action/action";

const App = () => {
  const dispatch = useDispatch();
 

  const handleToadd = () => {
    dispatch(
      addToProduct({
        name: "samsung",
        id: 1,
      }),
    );
  };

  const counter = () => {
    dispatch(increment());
  };

  return (
    <>
      <h1>Redux</h1>
      <button onClick={handleToadd}>button</button>
      <button onClick={counter}>Count</button>
      <Product />
    </>
  );
};

export default App;
