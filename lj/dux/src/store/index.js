import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import rootSaga from '../sagas';
// import storage from 'redux-persist/lib/storage';
// import { persistReducer, persistStore } from 'redux-persist';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default store;

// const persistCofing = {
// 	key: 'root',
// 	storage
// };

// const enhancedReducer = persistReducer(persistCofing, rootReducer);

// export default function configureStore() {
// 	const store = createStore(enhancedReducer);
// 	const persistor = persistStore(store);

// 	return { store, persistor };
// };