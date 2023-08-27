import {configureStore} from '@reduxjs/toolkit';
import {persistReducer, persistStore} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import rootReducers from './rootReducers';

// middleware
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import rootSaga from './rootSaga';

const persistConfig = {
  key: 'foodie',
  storage: AsyncStorage,
};

const PersistedReducer = persistReducer(persistConfig, rootReducers);

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: PersistedReducer,
  middleware: gDM => gDM().concat(logger, sagaMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);
