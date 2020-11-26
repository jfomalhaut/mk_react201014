
// actions
const INCREASEMENT = "INCREASEMENT";
const DECREASEMENT = "DECREASEMENT";
const ADD_CUSTOM = "ADD_CUSTOM";

const increase = () => ({ type: INCREASEMENT });
const decrease = () => ({ type: DECREASEMENT });
const addCustomNumber = (value) => ({ type: ADD_CUSTOM, value });

export default {
	INCREASEMENT,
	DECREASEMENT,
	ADD_CUSTOM,
	increase,
	decrease,
	addCustomNumber
};