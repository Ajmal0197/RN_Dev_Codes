import {combineReducers, configureStore} from '@reduxjs/toolkit';
import cakeReducer from './slices/cakeSlice';
import icecreamReducer from './slices/icecreamSlice';
import userReducer from './slices/userSlice';
import Reactotron from './reactotronConfig/ReactotronConfig';
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import logger from 'redux-logger';

const persistConfig = {
  key: 'root',
  version: 1,
  storage: AsyncStorage,
};
const reducer = combineReducers({
  cake: cakeReducer,
  icecream: icecreamReducer,
  users: userReducer,
});
const persistedReducer = persistReducer(persistConfig, reducer);

//https://redux-toolkit.js.org/usage/usage-guide#use-with-redux-persist
const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER], //
      },
    }),
  // middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
  enhancers: [Reactotron.createEnhancer()],
  devTools: __DEV__,
});

export default store;
