import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { Reducer } from '../Reducer/Reducer';

const persistConfig = {
    key: 'main',
    storage,
};

const persistedReducer = persistReducer(persistConfig, Reducer);
const middleware = applyMiddleware(logger);

export const store = createStore(persistedReducer, middleware);
export const persistor = persistStore(store);
