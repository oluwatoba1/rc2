import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './reducers';

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['auth']
};

const pReducer = persistReducer(persistConfig, rootReducer);

const middleware = [thunk];

const store = createStore(
	pReducer,
	composeWithDevTools(applyMiddleware(...middleware))
);

const persistor = persistStore(store);

export { persistor, store };
