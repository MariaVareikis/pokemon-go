import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import pokemonReducer from './slices/pokemonSlice';

const persistConfig = {
  key: 'pokemon-app',
  storage: AsyncStorage,
  whitelist: ['collectedPokemon'],
  blacklist: ['isSearching', 'isCatching', 'searchError', 'catchError'],
};

const persistedReducer = persistReducer(persistConfig, pokemonReducer);

const store = configureStore({
  reducer: {
    pokemon: persistedReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
