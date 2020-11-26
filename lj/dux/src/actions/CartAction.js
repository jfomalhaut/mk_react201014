const ADD_ITEM = "ADD_ITEM";
const REMOVE_ITEM = "REMOVE_ITEM";
const INCREASEMENT = "INCREASEMENT";

const addItem = (item) => ({ type: ADD_ITEM, item });
const removeItem = (id) => ({ type: REMOVE_ITEM, id });
const increasement = () => ({ type: INCREASEMENT });

export default {
	ADD_ITEM,
	REMOVE_ITEM,
	INCREASEMENT,
	addItem,
	removeItem,
	increasement,
};