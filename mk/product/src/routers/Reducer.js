import React, { useReducer, useState } from "react";

const CounterReducer = (state, action) => {
  switch(action.type) {
    case 'ONCHANGE': {
      return action.value;
    }
    case 'INCREASEMENT': {
      return state + 1;
    }
    case 'DECREASEMENT': {
      return state - 1;
    }
    default: {
      return state;
    }
  }
}

const Reducer = () => {

  // const [num, setNum] = useState(0)
  const [number, dispatch] = useReducer(CounterReducer, 0);

  const increasement = () => {
    dispatch({type: 'INCREASEMENT'});
  }
  const decreasement = () => {
    dispatch({type: 'DECREASEMENT'});
  }

  return (
    <div>
      <h1>{number}</h1>
      <input type="number" value={number} onChange={(ev) => {dispatch({type: 'ONCHANGE', value: ev.target.value})}} />
      {/* <h1>{num}</h1> */}
      <button onClick={decreasement}>감소</button>
      <button onClick={increasement}>증가</button>
    </div>
  );
};

export default Reducer;

//원하는숫자 받아서 커스텀넘버 더하기