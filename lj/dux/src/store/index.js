import { createStore } from 'redux';
import rootReducer from '../reducers';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

const persistCofing = {
	key: 'root',
	storage
};

const enhancedReducer = persistReducer(persistCofing, rootReducer);

export default function configureStore() {
	const store = createStore(enhancedReducer);
	const persistor = persistStore(store);

	return { store, persistor };
};