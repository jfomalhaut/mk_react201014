import { CartAction } from '../actions'

const initialState = {
  cart: [],
  count: 0
};

const CartReducer = (state = initialState, action) => {
  switch(action.type) {
    case CartAction.ADD_ITEM: {
			const newState = {...state, cart: [...state.cart, action.item]}
			console.log(newState);
      return newState
    }
    case CartAction.REMOVE_ITEM: {
      return state;
    }
    case CartAction.INCREASEMENT: {
      return {...state, count: state.count + 1};
    }
    default: {
      return state;
    }
  }
}

export default CartReducer;

//아이템 빼기 숙제