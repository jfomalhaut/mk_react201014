import React from "react";
import { useDispatch, useSelector } from 'react-redux'
import { CartAction } from "../actions";
import Item from '../jsons/items.json';

const List = () => {

  const dispatch = useDispatch();
	const count = useSelector(({ CartReducer }) => CartReducer.count);                    

  const increase = () => {
    dispatch(CartAction.increasement());
  }

	const addItem = (item) => {
		dispatch({type: 'ADD_ITEM', item});
	}

  return (
    <div>
      <h1>List component, Count: {count}</h1>
      <button onClick={increase}>증가</button>
			<ul>
				<li>
					{Item.map((item) => (
						<li style={{marginBottom: 20}}>
							<div>{item.name}</div>
							<button onClick={() => addItem(item)}>담기</button>
						</li>
					))}
				</li>
			</ul>
    </div>
  );
};

export default List;
