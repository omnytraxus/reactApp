import React from "react";
import { useDispatch } from "react-redux";
import { setCount } from "../reducers/reposReduser";
import './app.less'

const App = () => {
  const dispatch = useDispatch();

  function onCountClick() {
    dispatch(setCount(5))
  }

  return (
    <div className='app'>
      <button onClick={()=>onCountClick()}>COUNT</button>
    </div>
  );
};

export default App;