import { CountAction } from '../actions';


const CounterReducer = (state, action) => {
  switch(action.type) {
    case CountAction.CHANGE: {
      return state + action.value * 1;
    }
    case CountAction.INCREASEMENT: {
      return state + 1;
    }
    case CountAction.DECREASEMENT: {
      return state - 1;
    }
    default: {
      return state;
    }
  }
};

export default CounterReducer;