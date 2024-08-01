import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage/session";
import {
  persistStore,
  persistReducer,
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import { encryptTransform } from "redux-persist-transform-encrypt";
import rootReducer from "./redux/reducers/rootReducer";
import Config from "./Config";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth", "finalData",],
  transforms: [
    encryptTransform({
      secretKey: Config.reduxPersistEncryptKey!,
    }),
  ],
};

const store = configureStore({
  reducer: persistReducer(persistConfig, rootReducer),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: Config.isEnableReduxDevTools(), // only enable if dev, stg or local
});

const persistor = persistStore(store);

export { rootReducer, store, persistor };

export type Store = typeof store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
