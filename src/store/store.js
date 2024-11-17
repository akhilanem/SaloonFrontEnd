import { combineReducers, configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootsaga';
import logger from 'redux-logger';

// Import any necessary libraries for persisting the Redux state
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const sagaMiddleware = createSagaMiddleware();

// const logger = createLogger({
//   collapsed: true,
// });

// Combine your reducers into one rootReducer
const rootReducer = combineReducers({
  
});

// Define your persistConfig
const persistConfig = {
  key: 'root',
  storage, // This assumes you have imported the storage engine you want to use
  // Add any additional configuration options here as needed
};

let middleware = [sagaMiddleware, logger]; // Include the logger middleware here

if (process.env.NODE_ENV === 'development') {
  middleware.push(logger);
}

// Create a persisted reducer using persistConfig
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create the Redux store with the persisted reducer and middleware
const store = configureStore({
  reducer: persistedReducer, // Use the persisted reducer
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    ...middleware,
  ],
});

// Run your sagas
sagaMiddleware.run(rootSaga);

// Create a persistor for the store
export const persistor = persistStore(store);

export default store;