import {createStore, applyMiddleware} from 'redux';

import thunk from 'redux-thunk';

import { persistStore, persistReducer} from 'redux-persist';

import storage from 'redux-persist/lib/storage' 

import autoMergeLevel1 from 'redux-persist/lib/stateReconciler/autoMergeLevel1';

import reducers from './reducers';

const persistConfig = {
    key: 'root',
    blacklist:[],
    storage,
    stateReconciler: autoMergeLevel1
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = createStore(
    persistedReducer,
    applyMiddleware(thunk)
);

export const persistor = persistStore(store);
