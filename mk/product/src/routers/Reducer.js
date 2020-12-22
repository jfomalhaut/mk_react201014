import React, { useReducer, useState } from "react";
import CounterReducer from '../reducers/CountReducer'
import { CountAction } from '../actions'

const Reducer = () => {
  // const [num, setNum] = useState(0)
  const [number, dispatch] = useReducer(CounterReducer, 0);
  const [custom, setCustom] = useState("");

  const increasement = () => {
    dispatch(CountAction.increase());
  }
  const decreasement = () => {
    dispatch(CountAction.decrease());
  }
  const _custom = () => {
    dispatch(CountAction.change(custom));
  }

  const onChange = (ev) => {
    setCustom(ev.target.value);
  }

  const onSubmit = (ev) => {
    ev.preventDefault();
    _custom();
    setCustom("");
  }

  return (
    <div>
    <h1>number: {number}</h1>
      <h1>cutom: {custom}</h1>
      <form onSubmit={onSubmit}>
      <input value={custom} onChange={onChange}/>
      <button>등록</button>
      </form>
      <button onClick={decreasement}>감소</button>
      <button onClick={increasement}>증가</button>
    </div>
  );
};

export default Reducer;

//원하는숫자 받아서 커스텀넘버 더하기